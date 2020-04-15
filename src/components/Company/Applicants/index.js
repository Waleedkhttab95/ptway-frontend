import React from 'react';
import './style.scss';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
const { getCandidates, acceptUser, getMoreCandidates } = applicants;

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
        if (candidates.Bresult.length >= 2) {
          this.setState({
            loading: false
          });
        }
      }
    );
  }

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
    const { candidates, loading, moreAds, count } = this.state;
    console.log('candidates', candidates);

    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Filter />
          <div className="applicant-header">
            <h3>اسم المتقدم</h3>
            <h3>السيرة الذاتية</h3>
            {/* <h3>اسم المشروع</h3>
            <h3>اسم العرض</h3>*/}
            <h3>قبول</h3>
          </div>
          {_.isArray(candidates.Bresult) ? (
            candidates.Bresult.map(elm => (
              <div className="applicant" key={elm.candidateName._id}>
                <h4>
                  {elm.candidateName.firstName +
                    ' ' +
                    elm.candidateName.lastName}
                </h4>
                <Link
                  className="display-cv"
                  target="_blank"
                  to={`/applicant/profile/job/${this.state.jobId}/user/${elm.candidateName._id}`}
                >
                  عرض
                </Link>
                <button
                  className="accept-user"
                  onClick={() => this.acceptUser(elm.candidateName._id)}
                >
                  موافق
                </button>

                <button
                  className="display-cv-mob"
                  onClick={() =>
                    this.props.history.push(
                      `/applicant/profile/job/${this.state.jobId}/user/${elm.candidateName._id}`
                    )
                  }
                >
                  عرض السيرة الذاتية
                </button>
              </div>
            ))
          ) : (
            <div className="spinner-loading">
              <Spin size="large" />
            </div>
          )}
          {!loading && moreAds.totalPages !== count && (
            <button
              className="more-projects-offers-btn"
              onClick={this.displayMore}
              style={{ marginTop: '30px' }}
            >
              عرض المزيد
            </button>
          )}
        </div>
        {/* <div style={{ position: 'absolute', width: '100%', bottom: '0' }}> */}
        <Footer />
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default Applicants;
