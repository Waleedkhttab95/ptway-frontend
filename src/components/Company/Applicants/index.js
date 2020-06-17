import React from 'react';
import './style.scss';
import Header from '../../Header';
import Filter from '../Filter';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Spin, Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import FilterAndSearch from '../Filter';
import Applicant from '../Applicant';
const { getCandidates, acceptUser, getMoreCandidates, getUser } = applicants;

class Applicants extends React.Component {
  state = {
    candidates: '',
    count: 1,
    moreAds: '',
    loading: true
  };
  async componentDidMount() {
    const jobId = this.props.match.params.id;
    const candidates = await getCandidates({ jobId });
    this.setState(
      {
        jobId,
        candidates
      },
      () => {
        if (candidates.totalPages > 1) {
          this.setState({
            loading: false
          });
        }
      }
    );
  }

  applicantCV = async userId => {
    const user = await getUser({ userId });
    console.log('user', user);
    this.setState({
      user,
      userId
    });
  };

  acceptUser = async userId => {
    const { jobId, candidates } = this.state;
    await acceptUser({
      jobId,
      userId
    });
    this.setState({
      candidates: candidates.Bresult.filter(e => e.candidateName._id !== userId)
    });
  };

  displayMore = async () => {
    let count = this.state.count + 1;
    const { candidates, jobId } = this.state;
    const moreAds = await getMoreCandidates({ pageNo: count, jobAd: jobId });
    this.setState({
      candidates: {
        Bresult: candidates.Bresult.concat(moreAds.Bresult)
      },
      moreAds,
      count
    });
  };

  render() {
    const { candidates, loading, moreAds, count, user, userId } = this.state;
    console.log('candidates', candidates);
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Row className="applicants-container">
            <FilterAndSearch />
            <Col md={12} sm={24}>
              <h2 className="app-title">السيرة الذاتية</h2>
              {user && <Applicant user={user} userId={userId} />}
            </Col>
            <Col md={12} sm={24}>
              <h2 className="app-title">اسم المتقدم</h2>
              <div className="applicants-names">
                {_.isArray(candidates.Bresult)
                  ? candidates.Bresult.length > 0
                    ? candidates.Bresult.map(elm => (
                        <div
                          className="applicant-cv-info"
                          key={elm.candidateName._id}
                          onClick={() =>
                            this.applicantCV(elm.candidateName._id)
                          }
                        >
                          {elm.candidateName && elm.candidateName.imagePath ? (
                            <img
                              src={elm.candidateName.imagePath}
                              className="u-pic"
                            />
                          ) : (
                            <img
                              src={require('../../../images/pure-avatar.png')}
                            />
                          )}
                          <div>
                            <h4>
                              {' '}
                              {elm.candidateName.firstName +
                                ' ' +
                                elm.candidateName.lastName}
                            </h4>
                            <h3>مشروع تأمين أفرع الشركة التجارية </h3>
                          </div>
                        </div>
                      ))
                    : ''
                  : ''}
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Applicants;
