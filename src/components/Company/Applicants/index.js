import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Spin, Row, Col, Menu, Select } from 'antd';
// import FilterAndSearch from '../Filter';
import Applicant from '../Applicant';

const { getCandidates, getUser, getFavCandidates } = applicants;
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
    pages: 1,
    statistics: '',
    allCandidates: true,
    favCount: 1,
    favPages: 1
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
  applicantCV = async (userId, index, status, applicantId, isFavorite) => {
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
      applicantId,
      isFavorite
    });
  };

  fetchData = async () => {
    const {
      allCandidates,
      count,
      pages,
      candidates,
      fav,
      favPages,
      favCount
    } = this.state;

    const jobId = this.props.match.params.id;
    if (fav && favPages >= favCount) {
      const favCandidates = await getFavCandidates({ jobId, pageNo: favPages });
      this.setState({
        candidates:
          candidates.length !== 0
            ? candidates.concat(favCandidates.Bresult)
            : favCandidates.Bresult,
        favPages: favCandidates.totalPages,
        favCount: favCount + 1
      });
    } else if (allCandidates && pages >= count) {
      const candidatesData = await getCandidates({ jobId, pageNo: count });

      this.setState({
        jobId,
        candidates:
          candidates.length !== 0
            ? candidates.concat(candidatesData.Bresult)
            : candidatesData.Bresult,
        applicantsInfoLoading: false,
        count: count + 1,
        pages: candidatesData.totalPages,
        statistics: {
          acceptableUsersCount: candidatesData.acceptableUsersCount,
          allCandidatesCount: candidatesData.allCandidatesCount,
          rejectedUsersCount: candidatesData.rejectedUsersCount,
          waitingUsersCount: candidatesData.waitingUsersCount
        }
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

  getFavouriteCandidates = async () => {
    this.setState(
      {
        fav: true,
        allCandidates: false,
        favPages: 1,
        favCount: 1
      },
      () => {
        this.fetchData();
      }
    );
  };

  getAllCandidates = () => {
    this.setState(
      {
        fav: false,
        allCandidates: true,
        pages: 1,
        count: 1
      },
      () => {
        this.fetchData();
      }
    );
  };

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
      applicantId,
      statistics,
      isFavorite
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Row gutter={12}>
            <Col lg={20} md={20} sm={24}>
              <Row className="applicants-container">
                <Spin
                  spinning={applicantsInfoLoading}
                  size="large"
                  style={{ marginTop: '50px' }}
                >
                  {/* <FilterAndSearch /> */}
                  <div className="applicants-header">
                    <div className="top">
                      <h3>
                        {' '}
                        اسم المشروع:{' '}
                        <span className="name">
                          {candidates[0]
                            ? candidates[0].user.jobAd.job_Name
                            : ''}
                        </span>
                      </h3>
                      <h3>
                        {' '}
                        عدد المتقدمين:{' '}
                        <span className="name">
                          {statistics.allCandidatesCount}
                        </span>
                      </h3>
                      <h3>
                        {' '}
                        عدد الذين تم قبولهم:{' '}
                        <span className="name">
                          {statistics.acceptableUsersCount}
                        </span>
                      </h3>
                    </div>
                    <div className="bottom">
                      <h4>
                        {statistics.waitingUsersCount} شخص مازالو ينتظرونك
                        للاطلاع على سيرهم الذاتية
                      </h4>
                      <div className="left-side">
                        <span>الترتيب :</span>
                        <Select>
                          <Select.Option value="latest">الأحدث</Select.Option>
                          <Select.Option value="eariest">الأقدم</Select.Option>
                        </Select>
                      </div>
                    </div>
                  </div>
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
                          isFavorite={isFavorite}
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
                                  elm.user._id,
                                  elm.user.isFavorite
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
                                  <span style={{ color: '#5fcf84' }}>
                                    {' '}
                                    مقبول{' '}
                                  </span>
                                ) : elm.user.status === 'rejected' ? (
                                  <span style={{ color: '#d66b6b' }}>
                                    {' '}
                                    مرفوض{' '}
                                  </span>
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
            </Col>
            <Col lg={4} md={4} sm={24} className="applicants-filter">
              <Menu className="menu" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <>
                    <img
                      src={require('../../../images/applicant-group.svg')}
                      className="menu-icon"
                    />
                    <span onClick={this.getAllCandidates}>
                      {' '}
                      جميع المتقدمين{' '}
                    </span>
                  </>
                </Menu.Item>
                <Menu.Item key="2">
                  <>
                    <img
                      src={require('../../../images/tick.svg')}
                      className="menu-icon"
                    />
                    <span> القبول المبدئي </span>
                  </>
                </Menu.Item>
                <Menu.Item key="3">
                  <>
                    <img
                      src={require('../../../images/star.svg')}
                      className="menu-icon"
                    />
                    <span onClick={this.getFavouriteCandidates}> المفضلة </span>
                  </>
                </Menu.Item>
                {/* <Menu.Item key="4">
                  <>
                    <img
                      src={require('../../../images/calendar.svg')}
                      className="menu-icon"
                    />
                    <span> المقابلات </span>
                  </>
                </Menu.Item> */}
                <Menu.Item key="5">
                  <>
                    <img
                      src={require('../../../images/close.svg')}
                      className="menu-icon"
                    />
                    <span> المرفوضين </span>
                  </>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Applicants;
