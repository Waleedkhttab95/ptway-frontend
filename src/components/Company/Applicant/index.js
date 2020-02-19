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
    window.location.reload();
  };
  render() {
    console.log('------', window.localStorage);

    const { user } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="applicant-profile">
            <Col md={6} className="applicant-right-section">
              <div className="btns-container">
                <button className="accept-applicant" onClick={this.acceptUser}>
                  قبول المتقدم
                </button>
                <button className="reject-applicant">رفض المتقدم</button>
              </div>
              <div className="personal-info">
                <div className="user-pic-info">
                  <i className="fa fa-user u-pic" aria-hidden="true"></i>
                  {/* <img /> */}
                  <span className="fullname">{user.fullName}</span>
                  <span className="job-date">يعمل منذ 11/02/2018</span>
                  <span className="job-type">مصمم جرافيك</span>
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
            <Col md={18} className="applicant-details">
              <div>
                <h3 className="h-title heading">نبذة عامة</h3>
                <p>{user.about}</p>
              </div>
              <div>
                <h3 className="h-title heading">الدراسات والشهادات</h3>
                <p>الشهادة الجامعية :{user.study_degree}</p>
                <p>
                  الدراسة الحالية :
                  {user.education_degree !== 'undefined'
                    ? user.education_degree
                    : ''}
                </p>
                <p> الجامعة :{user.universty}</p>
                <p>المستوى التعليمي : {user.Education_level} </p>
                <p>التخصص العام : {user.public_Major} </p>
                <p>التخصص الدقيق : {user.spicifc_Major} </p>
              </div>
              <div>
                <h3 className="h-title heading">المهارات واللغات</h3>
                <h3>المهارات العامة : </h3>
                {_.isArray(user.skills)
                  ? user.skills.map(elm => {
                      return <p key={elm}>{elm}</p>;
                    })
                  : ''}
                <h3>المهارات الشخصية : </h3>
                {_.isArray(user.personal_Skills)
                  ? user.personal_Skills.map(elm => {
                      return <p key={elm}>{elm}</p>;
                    })
                  : ''}
                <h3>اللغات : </h3>
                {_.isArray(user.languages)
                  ? user.languages.map(elm => {
                      return <p key={elm}>{elm}</p>;
                    })
                  : ''}
              </div>
              <div>
                <h3 className="h-title heading">التواصل الالكتروني</h3>
                <p>الموقع الشخصي : {user.personal_web}</p>
                <p>
                  الفيسبوك
                  {user.facebook}{' '}
                </p>
                <p>
                  التويتر
                  {user.twitter}{' '}
                </p>
                <p>
                  لينكيد ان
                  {user.linkedin}
                </p>
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
