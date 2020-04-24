import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import { jobOffers, applyJob } from '../../../store/actions/user/jobOffers';
import _ from 'lodash';
import FilterAndSearch from '../Filter';

class Jobs extends React.Component {
  state = {
    loading: true,
    count: 1,
    search: '',
    offers: ''
  };
  async componentDidMount() {
    const { offersData } = this.props;
    const jobOffersData = await offersData(this.state.count);
    this.setState(
      {
        offers: jobOffersData.value.result,
        basedOffersArray: jobOffersData.value.result
      },
      () => {
        if (jobOffersData.value.totalPages > 1) {
          this.setState({
            loading: false
          });
        }
      }
    );
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

  displayMore = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      async () => {
        const { offersData } = this.props;
        await offersData(this.state.count);
      }
    );
  };
  componentDidUpdate(prevProps) {
    if (prevProps.offers.result) {
      if (prevProps.offers.result !== this.props.offers.result) {
        const offers = prevProps.offers.result.concat(this.props.offers.result);
        this.setState({
          offers,
          basedOffersArray: offers,
          totalPages: this.props.offers.totalPages
        });
      }
    }
  }
  handleFilterChange = (value, option) => {
    this.setState(
      {
        [option.props.name]: option.key
      },
      () => {
        const { filterOption, offers, basedOffersArray } = this.state;
        let sortedOffers;

        if (filterOption === 'new') {
          sortedOffers = basedOffersArray;
        } else {
          var sorted = new Array();
          for (var i = offers.length - 1; i >= 0; i--) {
            sorted.push(offers[i]);
          }
          sortedOffers = sorted;
        }

        this.setState({
          offers: sortedOffers
        });
      }
    );
  };

  handleSearch = e => {
    const { basedOffersArray } = this.state;
    const { value } = e.target;

    const search = basedOffersArray.filter(
      elm => elm.jobAd.job_Name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    this.setState({
      offers: search,
      search: value
    });
  };

  render() {
    const { offers, loading, totalPages, count, search } = this.state;

    return (
      <React.Fragment>
        <div>
          <Header />
          <div className="user-container">
            <div className="user-jobs">
              <FilterAndSearch
                handleChange={this.handleFilterChange}
                handleSearch={this.handleSearch}
              />
              <Row className="jobs-details">
                {_.isArray(offers) ? (
                  offers.map(elm => {
                    return (
                      <Col
                        md={5}
                        xs={24}
                        sm={24}
                        className="job-post"
                        key={elm.jobAd._id}
                      >
                        <div>
                          <div className="post-header">
                            {elm.imagePath && elm.imagePath !== 'null' ? (
                              <img src={elm.imagePath} alt="" />
                            ) : (
                              <i
                                className="fa fa-picture-o"
                                aria-hidden="true"
                                style={{
                                  fontSize: '45px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              ></i>
                            )}
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
                          </div>
                        </div>
                        <div className="post-actions-btns">
                          {elm.status ? (
                            <div className="post-status">تم التقدم للعمل</div>
                          ) : (
                            <React.Fragment>
                              <div
                                className="post-status"
                                style={{ marginBottom: '15px' }}
                              >
                                لم يتم التقدم
                              </div>
                              {elm.jobAd.isLock ? (
                                <div className="job-completed">
                                  {' '}
                                  لقد اكتمل العدد
                                </div>
                              ) : (
                                ''
                              )}
                            </React.Fragment>
                          )}
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
                      </Col>
                    );
                  })
                ) : (
                  <div
                    className="spinner-loading"
                    // style={{ width: '100%', margin: '0 auto' }}
                  >
                    <Spin size="large" />
                  </div>
                )}
              </Row>
              {!loading && totalPages !== count && !search && (
                <button className="display-more" onClick={this.displayMore}>
                  عرض المزيد
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </React.Fragment>
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
    offersData: pageNo => dispatch(jobOffers(pageNo)),
    applyJob: params => dispatch(applyJob(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
