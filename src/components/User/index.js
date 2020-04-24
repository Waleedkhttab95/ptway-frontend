import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Layout, Col, Spin, Alert } from 'antd';
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
      education_degree,
      study_degree,
      Education_level,
      public_Major,
      spicifc_Major,
      languages,
      skills,
      personal_Skills,
      profileComplete,
      profile_views,
      aplled_jobs,
      email,
      isConfirmed,
      universty,
      facebook,
      twitter,
      linkedin,
      personal_web
      // hoppies
    } = this.props.user.userInfo;
    return (
      <div>
        <Header />
        <div className="user-container">
          <Content className="user-home">
            <div className="user-notification">
              {this.props.user.userInfo && !isConfirmed && (
                <React.Fragment>
                  <Alert
                    message="للحصول على عروض وظيفية والتأكيد عليها الرجاء تفعيل حسابك عن طريق البريد الالكتروني"
                    type="warning"
                    className="warning-alert"
                  />
                  <Alert
                    message="سوف يتم ايقاف حسابك خلال عدة أيام اذا لم تقم بتفعيل الحساب عن طريق البريد الالكتروني"
                    type="warning"
                    className="warning-alert"
                  />
                </React.Fragment>
              )}
              {/* <Alert
                message="وظائف جديدة متاحة للتقدم عليها في مجال عملك"
                type="info"
                className="info-alert"
              /> */}
            </div>
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

                    {/* <span className="job-type">مصمم جرافيك</span> */}
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
                  <div
                    dir="ltr"
                    className="pt-5 pb-3 text-center bg-white rounded-lg shadow-sm"
                  >
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
                          dominantBaseline: 'middle',
                          textAnchor: 'middle'
                        },
                        background: {
                          fill: '#3e98c7'
                        }
                      }}
                    />
                  </div>
                  <span className="u-p-title">نسبة اكتمال الحساب</span>
                </div>
                <div>
                  <button
                    className="update-profile-btn"
                    onClick={() =>
                      this.props.history.push('/user/profile/update')
                    }
                  >
                    تعديل معلومات الحساب
                  </button>
                </div>
              </Col>
              <Col md={1}></Col>
              <Col md={16} sm={24} xs={24} className="left-section">
                <Row className="user-progress" gutter={20}>
                  <Col
                    md={7}
                    sm={7}
                    xs={7}
                    lg={7}
                    xl={7}
                    // span={6}
                    className="user-profile-seen gutter-row"
                  >
                    <div>عدد مشاهدات الحساب</div>
                    <div className="user-stc-number">{profile_views}</div>
                  </Col>
                  <Col
                    md={7}
                    sm={7}
                    lg={7}
                    xl={7}
                    // span={7}
                    className="user-job gutter-row"
                  >
                    <div>وظائف تقدمت عليها</div>
                    <div className="user-stc-number">{aplled_jobs}</div>
                  </Col>
                  <Col
                    md={7}
                    sm={7}
                    lg={7}
                    xl={7}
                    // span={6}
                    className="user-hours-work gutter-row"
                  >
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
                  <div className="cv-education">
                    <h3 className="h-title heading">الدراسات والشهادات</h3>
                    <div>
                      <p>
                        الدراسة الحالية :
                        {education_degree !== 'undefined'
                          ? education_degree
                          : ''}
                      </p>
                      <p>الشهادة الجامعية :{study_degree}</p>
                    </div>
                    <div>
                      <p>المستوى التعليمي : {Education_level} </p>
                      <p> الجامعة :{universty}</p>
                    </div>
                    <div>
                      <p>التخصص العام : {public_Major} </p>
                      <p>التخصص الدقيق : {spicifc_Major} </p>
                    </div>
                  </div>

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
                  <div>
                    <h3 className="h-title heading">التواصل الالكتروني</h3>
                    <p>
                      الموقع الشخصي : {personal_web ? personal_web : 'لا يوجد'}
                    </p>
                    <p>الفيسبوك : {facebook ? facebook : 'لا يوجد'} </p>
                    <p>التويتر : {twitter ? twitter : 'لا يوجد'} </p>
                    <p>لينكيد ان : {linkedin ? linkedin : 'لا يوجد'}</p>
                  </div>
                </div>
              </Col>
              <Col md={2}></Col>
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
