import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Layout, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import { userInformation } from '../../store/actions/user/HomeActions';
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
      profileComplete
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
            <div className="user-profile">
              <div className="user-progress-mob">
                <div className="user-hours-work">
                  <div>عدد ساعات العمل</div>
                  <div className="user-stc-number">{work_Hours}</div>
                </div>
                <div className="user-job">
                  <div>وظائف تقدمت عليها</div>
                  <div className="user-stc-number">1,024</div>
                </div>
                <div className="user-profile-seen">
                  <div>عدد مشاهدات الحساب</div>
                  <div className="user-stc-number">7,213</div>
                </div>
              </div>

              <Col md={6} className="right-section">
                <div className="personal-info">
                  <div className="user-pic-info">
                    {/* <i className="fa fa-user u-pic" aria-hidden="true"></i> */}
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
                      yasser.qahtani@gmail.com
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
                  <span className="u-p-title">نسبة اكتمال الحساب</span>
                  <div className="complete-chart">{profileComplete + '%'} </div>
                  <span className="u-p-desc">
                    لتحصل على أفضل الفرص عليك إكمال ملفك الشخصي
                  </span>
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
              <Col md={18} className="left-section">
                <div className="user-progress">
                  <div className="user-hours-work">
                    <div>عدد ساعات العمل</div>
                    <div className="user-stc-number">{work_Hours}</div>
                  </div>
                  <div className="user-job">
                    <div>وظائف تقدمت عليها</div>
                    <div className="user-stc-number">1,024</div>
                  </div>
                  <div className="user-profile-seen">
                    <div>عدد مشاهدات الحساب</div>
                    <div className="user-stc-number">7,213</div>
                  </div>
                </div>

                <div className="skills-general-info">
                  <div className="preif-section">
                    <div className="h-title p-title">
                      <i
                        className="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                      نبذة عامة
                    </div>
                    <div className="p-subject">
                      {about ? (
                        about
                      ) : (
                        <div className="spinner-loading">
                          <Spin size="large" />
                        </div>
                      )}
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="education-section">
                    <div className="h-title e-title">الدراسات والشهادات</div>
                    <div>
                      <h3 className="sub-h-title">التخصص العام</h3>
                      <p>{public_Major} </p>
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
                            <div className="sub-h-title">المهارات الشخصية</div>
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
            </div>
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
