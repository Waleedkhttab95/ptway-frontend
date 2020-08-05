import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  jobOffers,
  jobOffer,
  applyJob
} from '../../../store/actions/user/jobOffers';
import FilterAndSearch from '../Filter';
import Job from '../Job/jobBreif';
import { Link } from 'react-router-dom';
let array = [];

class Jobs extends React.Component {
  state = {
    loading: true,
    count: 1,
    search: '',
    offers: [],
    pageLoading: true,
    jobLoading: false,
    clicked: [],
    isFetching: false,
    pages: 1
  };
  async componentDidMount() {
    await this.fetchData();
    this.refs.divScroll.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (
      this.refs.divScroll.scrollTop + this.refs.divScroll.clientHeight >=
      this.refs.divScroll.scrollHeight
    ) {
      this.setState({
        isFetching: true
      });
    }
  };

  fetchData = async () => {
    const { offersData } = this.props;
    const { count, pages, offers } = this.state;
    if (pages >= count) {
      const jobOffersData = await offersData(this.state.count);
      this.setState({
        offers:
          offers.length !== 0
            ? offers.concat(jobOffersData.value.result)
            : jobOffersData.value.result,
        basedOffersArray: jobOffersData.value.result,
        count: count + 1,
        pages: jobOffersData.value.totalPages,
        pageLoading: false
      });
    }
  };

  fetchMoreListItems = () => {
    this.fetchData();
    this.setState({
      isFetching: false
    });
  };

  componentDidUpdate() {
    const { isFetching } = this.state;
    if (isFetching) {
      if (!isFetching) return;
      this.fetchMoreListItems();
    }
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
    this.setState({
      jobLoading: true
    });
    const {
      jobOffer
      //  company
    } = this.props;

    const job = await jobOffer({ id: jobId });
    // await company({ id: job.value.job.company });
    array.push(index);
    this.setState({
      job,
      jobId,
      jobLoading: false,
      selected: index,
      clicked: array
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
      jobLoading,
      pageLoading,
      clicked
    } = this.state;

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

              <Spin
                spinning={pageLoading}
                size="large"
                style={{ marginTop: '50px' }}
              >
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
                    <div
                      className="jobs-section"
                      ref="divScroll"
                      id="jobs-section-scroll"
                    >
                      {offers ? (
                        offers.map((elm, index) => {
                          return (
                            <div
                              className={
                                elm.isRead ||
                                selected == index ||
                                clicked.includes(index)
                                  ? 'job active'
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
                              <div className="description">
                                <div>
                                  <h3>
                                    نوع العقد:{' '}
                                    <span>
                                      {elm.jobAd?.contract?.contractName}
                                    </span>
                                  </h3>
                                  <h3>
                                    مبلغ الراتب:{' '}
                                    <span>{elm.jobAd.salary} </span>
                                  </h3>
                                  <h3>
                                    مدة العقد:{' '}
                                    <span>{elm.jobAd.work_days} </span>{' '}
                                  </h3>
                                </div>
                                <div>
                                  <h3>
                                    تاريخ بدء العمل:{' '}
                                    <span>
                                      {moment(elm.jobAd.startDate).format(
                                        'MMM D YY'
                                      )}
                                    </span>
                                  </h3>
                                  <h3>
                                    ساعات العمل اليومية:{' '}
                                    <span>{elm.jobAd.work_hours}</span>
                                  </h3>
                                </div>
                                <Link to={`/user/job/${elm.jobAd._id}`}>
                                  <button className="job-mobile-btn">
                                    مشاهدة التفاصيل
                                  </button>
                                </Link>
                              </div>
                            </div>
                          );
                        })
                      ) : offers.length == 0 ? (
                        <div
                          style={{
                            textAlign: 'center',
                            paddingTop: '30px',
                            fontSize: '18px'
                          }}
                        >
                          {' '}
                          لا يوجد عروض وظيفية
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </Col>
                </Row>
              </Spin>
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
