import React from 'react';
import './style.scss';
import { Col } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
const { getUser, acceptUser } = applicants;

class WholeCV extends React.Component {
  state = { user: '' };
  async componentDidMount() {
    const userId = this.props.match.params.userId;
    const { jobId } = this.props.match.params;
    const user = await getUser({ userId, jobId });
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
    const data = this.state.user;
    const user = data.info ? data.info : data;
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
                <button
                  className="accept-applicant"
                  onClick={this.acceptUser}
                  style={{ maxWidth: '280px', height: '50px' }}
                >
                  قبول المتقدم
                </button>
                {/* <button className="reject-applicant">رفض المتقدم</button> */}
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
                </div>
                <div className="details-user-info">
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    {data.email}
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
                    {user.country && user.country.countryName},{' '}
                    {user.city && user.city.cityName}
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
                <div className="applicant-degrees">
                  <div>
                    <div>
                      <h4>الجامعة :</h4>
                      <p>
                        {(user.universty && user.universty.universtyName) ||
                          ' '}{' '}
                      </p>
                    </div>
                    <div>
                      <h4>المرحلة الدراسية :</h4>
                      <p>{user.education_degree || ''}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4>التخصص والقسم :</h4>
                      <p>
                        {
                          (user.public_Major && user.public_Major.majorName,
                          (user.spMajor && user.spMajor.majorName) || ' ')
                        }{' '}
                      </p>
                    </div>
                    <div>
                      <h4>المستوى الدراسي :</h4>
                      <p>{user.study_degree || ' '}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cv-skills-">
                <h3 className="h-title heading">المهارات واللغات</h3>
                <div>
                  <div>
                    <h3>المهارات العامة : </h3>
                    {_.isArray(user.skills)
                      ? user.skills.map(elm => {
                          return <p key={elm._id}>{elm.skillName}</p>;
                        })
                      : ''}
                  </div>
                  <div>
                    <h3>المهارات الشخصية : </h3>
                    {_.isArray(user.personal_Skills)
                      ? user.personal_Skills.map(elm => {
                          return <p key={elm._id}>{elm.skillName}</p>;
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
export default WholeCV;
