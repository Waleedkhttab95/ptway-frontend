import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Layout, Alert, Col } from 'antd';
import { connect } from 'react-redux';
import {
  userInformation,
  jobOffers
} from '../../store/actions/user/HomeActions';
import './style.scss';
import _ from 'lodash';
const { Content } = Layout;

class User extends React.Component {
  async componentDidMount() {
    const { userInformation, jobOffers } = this.props;
    await userInformation();
    await jobOffers();
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
            <div className="user-notification">
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
            </div>
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
                    <img src={imagePath} alt="user" className="u-pic" />
                    <span className="fullname">{fullName} </span>
                    <span className="job-date">يعمل منذ 11/02/2018</span>
                    <span className="job-type">مصمم جرافيك</span>
                  </div>
                  <div className="details-user-info">
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      yasser.qahtani@gmail.com
                    </span>
                    <span>
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      0096 555 123 456 78 90
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
                      كل إنسان يحب أن يكون كلامه مسموعا، يعبر عن نفسه وذاته
                      بحرية وبانطلاق في الحياة، مما دفع الكثيرون إلى تطوير
                      أساليبهم في بناء التعابير الصوتية المختلفة، وتعلم مهارات
                      الجسد، والكثير من المهارات؛ ليستطيعوا التعبير عن أنفسهم،
                      واقناع الناس بذلك ليظهروا وليرتفع اسمهم في المجتمع وفي
                      أنفسهم. ومع التطور الحاصل في العصر الحديث من التكنولوجيا
                      الحديثة ومواقع التواصل الاجتماعي، وانتشار استخدامها،
                      والمدونات أصبحت الكتابة لونا لا يستغني عنه أحد في التعبير
                      عن ما يدور في عقله وكيانه من أفكار ومعتقدات وآراء؛ ساعيا
                      ليجلب اعجاب الآخرين به أحيانا،
                    </div>
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
                                  return { skill };
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
                                  return { hoppy };
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
                                  return { language };
                                })
                              : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="user-general-skills">
                    <div className="h-title sk-title">
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      مهارات عامة
                      {_.isArray(skills)
                        ? skills.map(skill => {
                            return { skill };
                          })
                        : ''}
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
    userInformation: () => dispatch(userInformation()),
    jobOffers: () => dispatch(jobOffers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
