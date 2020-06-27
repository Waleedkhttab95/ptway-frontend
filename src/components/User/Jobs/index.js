import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col, Spin, Typography } from 'antd';
import { connect } from 'react-redux';
import {
  jobOffers,
  jobOffer,
  applyJob
} from '../../../store/actions/user/jobOffers';
import _ from 'lodash';
import FilterAndSearch from '../Filter';
import Job from '../Job';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;
class Jobs extends React.Component {
  state = {
    loading: true,
    count: 1,
    search: '',
    offers: '',
    pageLoading: true,
    jobLoading: false
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

  // displayMore = () => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1
  //     },
  //     async () => {
  //       const { offersData } = this.props;
  //       await offersData(this.state.count);
  //     }
  //   );
  // };

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
  handleFilterChange = (e, option) => {
    if (!option) {
      const { name, value } = e.target;
      this.setState(
        {
          [name]: value
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
    } else {
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
    }
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

  getJob = async (jobId, index) => {
    const {
      jobOffer
      //  company
    } = this.props;

    const job = await jobOffer({ id: jobId });
    // await company({ id: job.value.job.company });
    this.setState({
      job,
      jobId,
      jobLoading: false,
      selected: index
    });
  };

  render() {
    const {
      offers,
      job,
      jobId,
      // count,
      // search,
      selected,
      jobLoading
    } = this.state;
    console.log('job before', job);

    return (
      <React.Fragment>
        <div>
          <Header />
          <div className="user-container">
            <div className="user-jobs">
              {/* <FilterAndSearch
                handleChange={this.handleFilterChange}
                handleSearch={this.handleSearch}
              /> */}
              <Row>
                <Col md={12} sm={24} className="mobile-view">
                  <h2 className="job-header-title">التفاصيل</h2>
                  <Spin
                    spinning={jobLoading}
                    size="large"
                    style={{ marginTop: '50px' }}
                  >
                    {job && <Job job={job} jobId={jobId} />}
                  </Spin>
                </Col>
                <Col md={12} sm={24}>
                  <h2 className="job-header-title">العرض الوظيفي</h2>
                  <div className="jobs-section">
                    {_.isArray(offers) ? (
                      offers.map((elm, index) => {
                        return (
                          <div
                            className={
                              !elm.jobAd.isLock || selected == index
                                ? 'job active'
                                : selected !== index
                                ? 'job'
                                : 'job un-read'
                            }
                            key={elm.jobAd._id}
                            onClick={() => this.getJob(elm.jobAd._id, index)}
                          >
                            <div className="top-section">
                              {elm.imagePath && elm.imagePath !== 'null' ? (
                                <img
                                  className="job-img"
                                  src={elm.imagePath}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="job-img"
                                  src={require('../../../images/pure-avatar.png')}
                                />
                              )}
                              <div className="job-content">
                                <h3>{elm.jobAd.job_Name}</h3>
                                <h4>{elm.compName}</h4>
                              </div>
                              <div className="job-status">
                                {elm.status ? (
                                  <div>تم التقدم للعمل</div>
                                ) : (
                                  <React.Fragment>
                                    <div style={{ color: '#7696f5' }}>
                                      لم يتم التقدم
                                    </div>
                                    {elm.jobAd.isLock ? (
                                      <div style={{ color: '#ffa76a' }}>
                                        {' '}
                                        لقد اكتمل العدد
                                      </div>
                                    ) : (
                                      ''
                                    )}
                                  </React.Fragment>
                                )}
                              </div>
                            </div>
                            <div>
                              <Paragraph
                                ellipsis={{ rows: 5, expandable: false }}
                                className="job-description"
                              >
                                <span>{elm.jobAd.descreption + '...'}</span>
                              </Paragraph>
                              <Link to={`/user/job/${elm.jobAd._id}`}>
                                <button className="job-mobile-btn">
                                  مشاهدة التفاصيل
                                </button>
                              </Link>
                            </div>
                          </div>
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
                  </div>
                </Col>
              </Row>
              {/* {!loading && totalPages !== count && !search && (
                <button className="display-more" onClick={this.displayMore}>
                  عرض المزيد
                </button>
              )} */}
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
    applyJob: params => dispatch(applyJob(params)),
    jobOffer: params => dispatch(jobOffer(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
