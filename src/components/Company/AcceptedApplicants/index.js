import React from 'react';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';

const { getAcceptedCandidates, getMoreAcceptedCandidates } = applicants;

class AcceptedApplicants extends React.Component {
  state = {
    AcceptedCandidates: '',
    count: 1,
    moreAds: '',
    loading: true
  };
  async componentDidMount() {
    const jobId = this.props.match.params.id;
    const AcceptedCandidates = await getAcceptedCandidates({ jobId });
    this.setState({
      AcceptedCandidates,
      jobId,
      loading: false
    });
  }
  displayMore = async () => {
    let count = this.state.count + 1;
    const { AcceptedCandidates, jobId } = this.state;
    const moreAds = await getMoreAcceptedCandidates({
      pageNo: count,
      jobAd: jobId
    });
    console.log('moreAds', moreAds);

    this.setState({
      AcceptedCandidates: {
        response: AcceptedCandidates.response.concat(moreAds.response)
      },
      moreAds,
      count
    });
  };
  render() {
    const { AcceptedCandidates, loading, moreAds, count } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Filter />
          <div className="applicant-header">
            <h3>الاسم </h3>
            <h3>السيرة الذاتية</h3>
          </div>
          {_.isArray(AcceptedCandidates.response) ? (
            AcceptedCandidates.response.map(elm => (
              <div className="applicant" key={elm._id}>
                <h4>
                  {elm.acceptedName
                    ? elm.acceptedName.firstName +
                      ' ' +
                      elm.acceptedName.lastName
                    : ''}
                </h4>
                <Link
                  className="display-cv"
                  target="_blank"
                  to={`/applicant/profile/job/${this.state.jobId}/user/${elm._id}`}
                >
                  عرض
                </Link>
                <button
                  className="display-cv-mob"
                  target="_blank"
                  onClick={() =>
                    this.props.history.push(
                      `/applicant/profile/job/${this.state.jobId}/user/${elm._id}`
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
              style={{ marginTop: '30px', marginBottom: '30px' }}
            >
              عرض المزيد
            </button>
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            bottom: '-80px'
          }}
        >
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default AcceptedApplicants;
