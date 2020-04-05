import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Layout, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import { userInformation } from '../../store/actions/user/HomeActions';
import { CircularProgressbar } from 'react-circular-progressbar';
import './style.scss';
import _ from 'lodash';
const { Content } = Layout;

class User extends React.Component {
  async componentDidMount() {
    const { userInformation } = this.props;
    await userInformation();
  }
  render() {
    const {
      // status,
      gender,
      fullName,
      imagePath,
      country,
      // birthDate,
      work_Hours,
      city,
      mobile,
      about,
      public_Major,
      spicifc_Major,
      languages,
      skills,
      personal_Skills,
      profileComplete,
      profile_views,
      aplled_jobs,
      email
      // hoppies
    } = this.props.user.userInfo;
    return (
      <div>
        <Header />
        <div className="user-container">
          <Content className="user-home">
            {/* <div className="user-notification">
              <Alert
                message="تم قبول طلبك على وظيفة مبرمج ومطور تطبيقات"
                type="warning"
                className="warning-alert"
              />
              <Alert
                message="وظائف جديدة متاحة للتقدم عليها في مجال عملك"
                type="info"
                className="info-alert"
              />
            </div> */}
            <Row className="user-profile">
              <div className="user-progress-mob">
                <div className="user-hours-work">
                  <div>عدد ساعات العمل</div>
                  <div className="user-stc-number">{work_Hours}</div>
                </div>
                <div className="user-job">
                  <div>وظائف تقدمت عليها</div>
                  <div className="user-stc-number">{aplled_jobs}</div>
                </div>
                <div className="user-profile-seen">
                  <div>عدد مشاهدات الحساب</div>
                  <div className="user-stc-number">{profile_views}</div>
                </div>
              </div>
              <div>
                <Col md={2}></Col>
                <Col md={14} sm={24} xs={24} className="left-section">
                  <Row className="user-progress">
                    <Col md={7} sm={7} className="user-profile-seen">
                      <div>عدد مشاهدات الحساب</div>
                      <div className="user-stc-number">{profile_views}</div>
                    </Col>
                    <Col md={7} sm={7} className="user-job">
                      <div>وظائف تقدمت عليها</div>
                      <div className="user-stc-number">{aplled_jobs}</div>
                    </Col>
                    <Col md={8} sm={8} className="user-hours-work">
                      <div>عدد ساعات العمل</div>
                      <div className="user-stc-number">{work_Hours}</div>
                    </Col>
                  </Row>

                  <div className="skills-general-info">
                    <div className="preif-section">
                      <div className="h-title p-title">
                        <i
                          className="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        نبذة عامة
                      </div>
                      <div className="p-subject">{about}</div>
                    </div>
                    <br />
                    <br />
                    <div className="education-section">
                      <div className="h-title e-title">الدراسات والشهادات</div>
                      <div>
                        <h3 className="sub-h-title">التخصص العام</h3>
                        <p>
                          {public_Major ? (
                            public_Major
                          ) : (
                            <div className="spinner-lo  ading">
                              <Spin size="large" />
                            </div>
                          )}{' '}
                        </p>
                      </div>
                      <div>
                        <h3 className="sub-h-title"> التخصص الدقيق</h3>
                        <p>{spicifc_Major}</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="general-section">
                      <div className="h-title g-title">
                        <i className="fa fa-language" aria-hidden="true"></i>
                        اللغات
                      </div>
                      <div className="sub-desc">
                        {_.isArray(languages)
                          ? languages.map(language => {
                              return (
                                <span key={language}>
                                  {language} <br />
                                </span>
                              );
                            })
                          : ''}
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="user-general-skills">
                      <div style={{ width: '100%' }}>
                        {/* <i className="fa fa-star-o" aria-hidden="true"></i> */}
                        <div className="h-title sk-title"> المهارات</div>
                        <div className="g-body">
                          <div className="skills-hobbies">
                            <div>
                              <div className="sub-h-title">
                                المهارات الشخصية
                              </div>
                              <div className="sub-desc">
                                {_.isArray(personal_Skills)
                                  ? personal_Skills.map(skill => {
                                      return (
                                        <span key={skill}>
                                          {skill} <br />
                                        </span>
                                      );
                                    })
                                  : ''}
                              </div>
                            </div>
                            <div>
                              <div className="sub-h-title">المهارات العامة</div>
                              <div className="sub-desc">
                                {_.isArray(skills)
                                  ? skills.map(skill => {
                                      return (
                                        <span key={skill}>
                                          {skill} <br />
                                        </span>
                                      );
                                    })
                                  : ''}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sk-content"></div>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={24} xs={24} className="right-section">
                  <div className="personal-info">
                    <div className="user-pic-info">
                      {imagePath !== 'null' ? (
                        <img src={imagePath} alt="user" className="u-pic" />
                      ) : (
                        <i
                          className="fa fa-user-circle"
                          aria-hidden="true"
                          style={{ fontSize: '60px' }}
                        ></i>
                      )}
                      <span className="fullname">{fullName} </span>

                      <span className="job-type">مصمم جرافيك</span>
                    </div>
                    <div className="details-user-info">
                      <span>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        {email}
                      </span>
                      <span>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        {mobile}
                      </span>
                      <span>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        {gender}
                      </span>
                      <span>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        {city},{country}
                      </span>
                    </div>
                  </div>
                  <div className="user-profile-complete">
                    <div>
                      <CircularProgressbar
                        value={profileComplete}
                        text={profileComplete ? `${profileComplete}%` : ''}
                        styles={{
                          path: {
                            stroke: `rgba(62, 152, 199, ${profileComplete /
                              100})`,
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center'
                          },
                          trail: {
                            stroke: '#d6d6d6',
                            strokeLinecap: 'butt',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center'
                          },
                          text: {
                            fill: '#009ad0',
                            fontSize: '16px',
                            textAlign: 'center'
                          },
                          background: {
                            fill: '#3e98c7'
                          }
                        }}
                      />
                    </div>
                    <span className="u-p-title">نسبة اكتمال الحساب</span>
                  </div>
                  <button
                    className="update-profile-btn"
                    onClick={() =>
                      this.props.history.push('/user/profile/update')
                    }
                  >
                    تعديل معلومات الحساب
                  </button>
                </Col>
              </div>
            </Row>
          </Content>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ userS }) => {
  return {
    user: userS
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userInformation: () => dispatch(userInformation())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
