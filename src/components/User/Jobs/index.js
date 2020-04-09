import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import { jobOffers, applyJob } from '../../../store/actions/user/jobOffers';
import _ from 'lodash';
import FilterAndSearch from '../../Filter';

class Jobs extends React.Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    const { jobOffers } = this.props;
    await jobOffers();
    this.setState({
      loading: false
    });
  }

  jobOffer = async id => {
    const { jobOffer } = this.props;
    await jobOffer(id);
  };

  applyJob = async jobId => {
    const { applyJob } = this.props;
    const result = await applyJob({ jobId });
    if (result) {
      this.setState({
        jobStatus: true
      });
    }
  };

  render() {
    console.log('jobs props', this.props.offers.jobOffers);
    const { offers } = this.props;
    return (
      <div>
        <Header />
        <div className="user-container">
          <div className="user-jobs">
            <FilterAndSearch />
            <Row className="jobs-details">
              {_.isArray(offers.jobOffers.result) ? (
                offers.jobOffers.result.map(elm => {
                  return (
                    <Col md={6} className="job-post" key={elm.jobAd._id}>
                      <div className="post-header">
                        {/* <img src="" alt="" className="post-img" /> */}
                        <i
                          className="fa fa-picture-o"
                          aria-hidden="true"
                          style={{
                            fontSize: '45px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        ></i>
                        <div className="job-owner-info">
                          <span className="job-owner-title">
                            {elm.jobAd.job_Name}
                          </span>
                          <span className="job-owner-location">
                          {elm.compName}
                          </span>
                          {/* <span className="job-owner-mobile">
                              الرقم : 0002163477555
                            </span> */}
                        </div>
                      </div>
                      <div className="post-body">
                        <span className="post-description">
                          {elm.jobAd.descreption}
                        </span>
                        <div className="post-actions-btns">
                          <div className="post-status">
                            {elm.status ? (
                              <span>تم التقدم للعمل</span>
                            ) : (
                              <React.Fragment>
                                <p style={{ marginBottom: '15px' }}>
                                  لم يتم التقدم
                                </p>
                                {elm.jobAd.isLock ? (
                                  <p className="job-completed">
                                    {' '}
                                    لقد اكتمل العدد
                                  </p>
                                ) : (
                                  ''
                                  // <button
                                  //   className="apply-job-btn"
                                  //   onClick={() => this.applyJob(elm.jobAd._id)}
                                  // >
                                  //   التقدم للعمل
                                  // </button>
                                )}
                              </React.Fragment>
                            )}
                          </div>
                          {elm.jobAd.isLock ? (
                            <span></span>
                          ) : (
                            <button
                              className="details-btn"
                              onClick={() =>
                                this.props.history.push(
                                  `/user/job/${elm.jobAd._id}`
                                )
                              }
                            >
                              التفاصيل
                            </button>
                          )}
                        </div>
                      </div>
                    </Col>
                  );
                })
              ) : (
                <div className="spinner-loading">
                  <Spin size="large" />
                </div>
              )}
              {/* {!this.state.loading && (
                <button className="display-more">عرض المزيد</button>
              )} */}
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ jobOffers }) => {
  return {
    offers: jobOffers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    jobOffers: () => dispatch(jobOffers()),
    applyJob: params => dispatch(applyJob(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
