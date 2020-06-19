import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Spin, Row, Col } from 'antd';
// import FilterAndSearch from '../Filter';
import Applicant from '../Applicant';
const { getCandidates, acceptUser, getMoreCandidates, getUser } = applicants;

class Applicants extends React.Component {
  state = {
    candidates: '',
    count: 1,
    moreAds: '',
    loading: false,
    isReadClass: false
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
    const { jobId } = this.state;
    this.setState({
      loading: true
    });
    const user = await getUser({ userId, jobId });
    this.setState({
      user,
      userId,
      loading: false,
      isReadClass: true
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
    const {
      candidates,
      loading,
      moreAds,
      count,
      user,
      userId,
      jobId,
      isReadClass
    } = this.state;
    console.log('candidates', candidates);
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Row className="applicants-container">
            {/* <FilterAndSearch /> */}
            <Col md={12} sm={24} className="mobile-view">
              <h2 className="app-title">السيرة الذاتية</h2>
              <Spin
                spinning={loading}
                size="large"
                style={{ marginTop: '50px' }}
              >
                {user && (
                  <Applicant user={user} userId={userId} jobId={jobId} />
                )}
              </Spin>
            </Col>
            <Col md={12} sm={24}>
              <h2 className="app-title">اسم المتقدم</h2>
              <div className="applicants-names">
                {_.isArray(candidates.Bresult)
                  ? candidates.Bresult.length > 0
                    ? candidates.Bresult.map((elm, index) => (
                        <div
                          className={
                            !elm.user.isRead
                              ? 'applicant-cv-info is-read'
                              : // : isReadClass && !index
                                'applicant-cv-info'
                            // : ' applicant-cv-info is-read'
                          }
                          key={elm.user.candidateName._id}
                          onClick={() =>
                            this.applicantCV(elm.user.candidateName._id)
                          }
                        >
                          <div>
                            {elm.imagePath && elm.imagePath !== 'null' ? (
                              <img src={elm.imagePath} className="u-pic" />
                            ) : (
                              <img
                                src={require('../../../images/pure-avatar.png')}
                              />
                            )}
                            <div className="app-content">
                              <h4>
                                {' '}
                                {elm.user.candidateName.firstName +
                                  ' ' +
                                  elm.user.candidateName.lastName}
                              </h4>
                              <h3>
                                <span className="job-title-mob">
                                  المسمى الوظيفي:{' '}
                                </span>{' '}
                                {elm.user.jobAd.job_Name}{' '}
                              </h3>
                            </div>
                          </div>
                          <button
                            className="cv-btn-mobile"
                            onClick={() =>
                              this.props.history.push(
                                `/applicant-cv/id=${elm.user.candidateName._id}&job_id=${jobId}`
                              )
                            }
                          >
                            مشاهدة السيرة الذاتية
                          </button>
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
