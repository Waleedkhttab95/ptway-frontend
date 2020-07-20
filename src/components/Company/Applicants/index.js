import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Spin, Row, Col } from 'antd';
// import FilterAndSearch from '../Filter';
import Applicant from '../Applicant';
const { getCandidates, getUser } = applicants;
let array = [];
class Applicants extends React.Component {
  state = {
    candidates: [],
    count: 1,
    moreAds: '',
    loading: false,
    clicked: [],
    applicantsInfoLoading: true,
    status: '',
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
  fetchMoreListItems = () => {
    this.fetchData();
    this.setState({
      isFetching: false
    });
  };
  applicantCV = async (userId, index, status, applicantId) => {
    const { jobId } = this.state;

    this.setState({
      loading: true
    });
    const user = await getUser({ userId, jobId });
    array.push(index);
    this.setState({
      user,
      userId,
      loading: false,
      selected: index,
      clicked: array,
      status,
      applicantId
    });
  };

  fetchData = async () => {
    const { count, pages, candidates } = this.state;

    const jobId = this.props.match.params.id;
    if (pages >= count) {
      const candidatesData = await getCandidates({ jobId, pageNo: count });

      this.setState({
        jobId,
        candidates:
          candidates.length !== 0
            ? candidates.concat(candidatesData.Bresult)
            : candidatesData.Bresult,
        applicantsInfoLoading: false,
        count: count + 1,
        pages: candidatesData.totalPages
      });
    }
  };
  componentDidUpdate() {
    const { isFetching } = this.state;
    if (isFetching) {
      if (!isFetching) return;
      this.fetchMoreListItems();
    }
  }

  render() {
    const {
      candidates,
      loading,
      applicantsInfoLoading,
      user,
      userId,
      jobId,
      selected,
      clicked,
      status,
      applicantId
    } = this.state;
    console.log('candidatescandidates', candidates);
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Row className="applicants-container">
            <Spin
              spinning={applicantsInfoLoading}
              size="large"
              style={{ marginTop: '50px' }}
            >
              {/* <FilterAndSearch /> */}
              <Col md={12} sm={24} className="mobile-view">
                <h2 className="app-title">السيرة الذاتية</h2>
                <Spin
                  spinning={loading}
                  size="large"
                  style={{ marginTop: '50px' }}
                >
                  {user && (
                    <Applicant
                      user={user}
                      userId={userId}
                      jobId={jobId}
                      status={status}
                      applicantId={applicantId}
                    />
                  )}
                </Spin>
              </Col>
              <Col md={12} sm={24}>
                <h2 className="app-title">اسم المتقدم</h2>

                <div className="applicants-names" ref="divScroll">
                  {_.isArray(candidates) && candidates.length !== 0 ? (
                    candidates.length !== 0 ? (
                      candidates.map((elm, index) => (
                        <div
                          className={
                            elm.user.isRead ||
                            selected == index ||
                            clicked.includes(index)
                              ? ' applicant-cv-info active'
                              : 'applicant-cv-info un-read'
                          }
                          key={elm.user.candidateName._id}
                          onClick={() =>
                            this.applicantCV(
                              elm.user.candidateName._id,
                              index,
                              elm.user.status,
                              elm.user._id
                            )
                          }
                        >
                          <div>
                            {elm.imagePath && elm.imagePath !== 'null' ? (
                              <img src={elm.imagePath} className="u-pic" />
                            ) : (
                              <img
                                src={require('../../../images/person.png')}
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
                                `/applicant-cv/id=${elm.user.candidateName._id}&job_id=${jobId}&status=${elm.user.status}&applicantId=${elm.user._id}`
                              )
                            }
                          >
                            مشاهدة السيرة الذاتية
                          </button>
                          <div className="applicant-status">
                            {elm.user.status === 'waiting' ? (
                              <span style={{ color: '#ffa76a' }}>
                                {' '}
                                قيد الانتظار{' '}
                              </span>
                            ) : elm.user.status === 'Accepted' ? (
                              <span style={{ color: '#5fcf84' }}> مقبول </span>
                            ) : elm.user.status === 'rejected' ? (
                              <span style={{ color: '#d66b6b' }}> مرفوض </span>
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        style={{
                          textAlign: 'center',
                          paddingTop: '30px',
                          fontSize: '18px'
                        }}
                      >
                        {' '}
                        لا يوجد متقدمين
                      </div>
                    )
                  ) : (
                    ''
                  )}
                </div>
              </Col>
            </Spin>
          </Row>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Applicants;
