import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './index.scss';
import { Row, Col, Spin } from 'antd';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import interviewsData from '../../../services/user/interviews';
import { Interview } from './interview';
import { Link } from 'react-router-dom';
import { CalendarOutlined } from '@ant-design/icons';

const { getInterviews, getInterview } = interviewsData;
let array = [];

export class Interviews extends React.Component {
  state = {
    loading: true,
    count: 1,
    search: '',
    offers: [],
    pageLoading: true,
    jobLoading: false,
    clicked: [],
    isFetching: false,
    pages: 1,
    userInterviews: []
  };

  componentDidMount() {
    this.getAppointments();
  }

  getAppointments = async () => {
    const { pages } = this.state;
    const userInterviews = await getInterviews({ pageNo: pages });
    this.setState({
      userInterviews: userInterviews.appointments.appointments,
      totalPages: userInterviews.totalPages,
      pages: pages + 1
    });
  };

  getJob = async (jobId, index) => {
    this.setState({
      jobLoading: true
    });

    const job = await getInterview({ id: jobId });
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
      job,
      jobId,
      selected,
      jobLoading,
      clicked,
      userInterviews,
      pages,
      totalPages
    } = this.state;

    return (
      <React.Fragment>
        <div>
          <Header />
          <div className="user-container interview-container">
            <div className="user-jobs">
              <Row>
                <Col md={12} sm={24} className="mobile-view">
                  <h2 className="job-header-title">التفاصيل</h2>
                  <Spin
                    spinning={jobLoading}
                    size="large"
                    style={{ marginTop: '50px' }}
                  >
                    {job && <Interview job={job} jobId={jobId} />}
                  </Spin>
                </Col>
                <Col md={12} sm={24}>
                  <h2 className="job-header-title">العرض الوظيفي</h2>
                  <div className="jobs-section" id="jobs-section-scroll">
                    <InfiniteScroll
                      dataLength={userInterviews.length}
                      next={this.getAppointments}
                      hasMore={pages <= totalPages ? true : false}
                      loader={
                        <Spin size="large" className="scroll-loader"></Spin>
                      }
                    >
                      {userInterviews && userInterviews.length !== 0 ? (
                        userInterviews.map((elm, index) => {
                          return (
                            <div
                              className={
                                elm.isRead ||
                                selected === index ||
                                clicked.includes(index)
                                  ? 'job active'
                                  : 'job un-read'
                              }
                              key={index}
                              onClick={() => this.getJob(elm._id, index)}
                            >
                              <div className="top-section">
                                {elm.imagePath && elm.imagePath !== 'null' ? (
                                  <img
                                    className="job-img"
                                    src={elm.imagePath}
                                    alt=""
                                  />
                                ) : (
                                  <CalendarOutlined />
                                )}
                                <div className="job-content">
                                  <h3>{elm.jobAd.job_Name}</h3>
                                  <h4>{elm.compName}</h4>
                                </div>
                                <div className="job-status">
                                  أكّد موعد المقابلة
                                </div>
                              </div>
                              <div className="description">
                                <div>
                                  <h3>
                                    اسم الشركة:{' '}
                                    <span>{elm.company.companyName} </span>
                                  </h3>
                                  <h3>
                                    تاريخ بدء العمل:{' '}
                                    <span>
                                      {moment(elm.jobAd.startDate).format(
                                        'MMM D YY'
                                      )}
                                    </span>
                                  </h3>
                                </div>
                                <Link to={`/user/interview/${elm._id}`}>
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
                          style={{
                            textAlign: 'center',
                            paddingTop: '30px',
                            fontSize: '18px'
                          }}
                        >
                          {' '}
                          لا يوجد عروض وظيفية
                        </div>
                      )}
                    </InfiniteScroll>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </React.Fragment>
    );
  }
}
