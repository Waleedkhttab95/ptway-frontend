import React from 'react';
import './style.scss';
import { Col } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
const { getUser, acceptUser } = applicants;

class Applicant extends React.Component {
  state = { user: '' };
  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { jobId } = this.props.match.params;
    const user = await getUser({ userId });
    this.setState({
      userId,
      jobId,
      user
    });
  }
  acceptUser = async () => {
    const { userId, jobId } = this.state;

    await acceptUser({
      jobId,
      userId
    });
    this.props.history.push(`/applicants/job/id=${jobId}`);
  };
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="applicant-profile">
            <Col
              md={6}
              lg={6}
              xl={6}
              xs={24}
              sm={24}
              className="applicant-right-section"
            >
              <div className="btns-container">
                <button className="accept-applicant" onClick={this.acceptUser}>
                  قبول المتقدم
                </button>
                <button className="reject-applicant">رفض المتقدم</button>
              </div>
              <div className="personal-info">
                <div className="user-pic-info">
                  {user.imagePath !== 'null' ? (
                    <img src={user.imagePath} alt="user" className="u-pic" />
                  ) : (
                    <i
                      className="fa fa-user-circle"
                      aria-hidden="true"
                      style={{ fontSize: '60px' }}
                    ></i>
                  )}
                  <span className="fullname">{user.fullName}</span>
                  {/* <span className="job-date">يعمل منذ 11/02/2018</span> */}
                  {/* <span className="job-type">{user.about}</span> */}
                </div>
                <div className="details-user-info">
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    {user.email}
                  </span>
                  <span>
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                    {user.mobile}
                  </span>
                  <span>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    {user.gender}
                  </span>
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {user.country}, {user.city}
                  </span>
                </div>
              </div>
              <div className="hour-work">
                <h3>عدد ساعات العمل</h3>
                <div className="hours-num">{user.work_Hours}</div>
              </div>
            </Col>
            <Col
              md={18}
              lg={18}
              xl={18}
              xs={24}
              sm={24}
              className="applicant-details"
            >
              <div>
                <h3 className="h-title heading">نبذة عامة</h3>
                <p>{user.about}</p>
              </div>
              <div className="cv-education">
                <h3 className="h-title heading">الدراسات والشهادات</h3>
                <div>
                  <p>
                    الدراسة الحالية :
                    {user.education_degree !== 'undefined'
                      ? user.education_degree
                      : ''}
                  </p>
                  <p>الشهادة الجامعية :{user.study_degree}</p>
                </div>
                <div>
                  <p>المستوى التعليمي : {user.Education_level} </p>
                  <p> الجامعة :{user.universty}</p>
                </div>
                <div>
                  <p>التخصص العام : {user.public_Major} </p>
                  <p>التخصص الدقيق : {user.spicifc_Major} </p>
                </div>
              </div>
              <div className="cv-skills-">
                <h3 className="h-title heading">المهارات واللغات</h3>
                <div>
                  <div>
                    <h3>المهارات العامة : </h3>
                    {_.isArray(user.skills)
                      ? user.skills.map(elm => {
                          return <p key={elm}>{elm}</p>;
                        })
                      : ''}
                  </div>
                  <div>
                    <h3>المهارات الشخصية : </h3>
                    {_.isArray(user.personal_Skills)
                      ? user.personal_Skills.map(elm => {
                          return <p key={elm}>{elm}</p>;
                        })
                      : ''}
                  </div>
                </div>
                <h3>اللغات : </h3>
                {_.isArray(user.languages)
                  ? user.languages.map(elm => {
                      return <p key={elm}>{elm}</p>;
                    })
                  : ''}
              </div>
              <div>
                <h3 className="h-title heading">التواصل الالكتروني</h3>
                <p>
                  الموقع الشخصي :{' '}
                  {user.personal_web ? user.personal_web : 'لا يوجد'}
                </p>
                <p>الفيسبوك : {user.facebook ? user.facebook : 'لا يوجد'} </p>
                <p>التويتر : {user.twitter ? user.twitter : 'لا يوجد'} </p>
                <p>لينكيد ان : {user.linkedin ? user.linkedin : 'لا يوجد'}</p>
              </div>
            </Col>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Applicant;
