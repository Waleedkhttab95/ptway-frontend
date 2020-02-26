import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Layout, Col } from 'antd';
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
      profile_views,
      aplled_jobs,
      email,
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
      hoppies
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
                  <div className="user-stc-number">{aplled_jobs}</div>
                </div>
                <div className="user-profile-seen">
                  <div>عدد مشاهدات الحساب</div>
                  <div className="user-stc-number">{profile_views}</div>
                </div>
              </div>

              <Col md={6} className="right-section">
                <div className="personal-info">
                  <div className="user-pic-info">
                    {/* <i className="fa fa-user u-pic" aria-hidden="true"></i> */}
                    <img src={imagePath} alt="user" className="u-pic" />
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
                  <span className="u-p-title">نسبة اكتمال الحساب</span>
                  <div className="completion-chart">%76</div>
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
                    <div className="user-stc-number">{aplled_jobs}</div>
                  </div>
                  <div className="user-profile-seen">
                    <div>عدد مشاهدات الحساب</div>
                    <div className="user-stc-number">{profile_views}</div>
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
                    <div className="p-subject">{about}</div>
                  </div>
                  {/* <div className="education-section">
                  <div className="h-title e-title">الدراسات والشهادات</div>
                  <div className="e-subject"></div>
                </div> */}
                  <div className="general-section">
                    <div className="h-title g-title">
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                      معلومات عامة
                    </div>
                    <div className="g-body">
                      <div className="skills-hobbies">
                        <div>
                          <div className="sub-h-title">المهارات الشخصية</div>
                          <div className="sub-desc">
                            {_.isArray(personal_Skills)
                              ? personal_Skills.map(skill => {
                                  return skill;
                                })
                              : ''}
                          </div>
                        </div>
                        <div>
                          <h3 className="sub-h-title">التخصص العام</h3>
                          <p>{public_Major} </p>
                        </div>
                        <div>
                          <div className="sub-h-title">الهوايات</div>
                          <div className="sub-desc">
                            {_.isArray(hoppies)
                              ? hoppies.map(hoppy => {
                                  return hoppy;
                                })
                              : ''}
                          </div>
                        </div>
                      </div>
                      <div className="tech-lang">
                        <div>
                          <div className="sub-h-title">المهارات العلمية</div>
                          <div className="sub-desc">
                            برمجة وميكانيك التحكم عن بعد
                          </div>
                        </div>
                        <div>
                          <h3 className="sub-h-title"> التخصص الدقيق</h3>
                          <p>{spicifc_Major}</p>
                        </div>
                        <div>
                          <div className="sub-h-title">اللغات</div>
                          <div className="sub-desc">
                            {_.isArray(languages)
                              ? languages.map(language => {
                                  return language;
                                })
                              : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="user-general-skills">
                    <div>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <div className="h-title sk-title"> مهارات عامة</div>
                      <div className="sub-desc">
                        {_.isArray(skills)
                          ? skills.map(skill => {
                              return skill;
                            })
                          : ''}
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
