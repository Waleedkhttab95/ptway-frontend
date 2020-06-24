import React from 'react';
import './style.scss';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const { acceptUser } = applicants;

class Applicant extends React.Component {
  state = { user: '' };
  async componentDidMount() {
    const { user, userId, jobId } = this.props;
    this.setState({
      user,
      userId,
      jobId
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

  componentDidUpdate(prevProp) {
    const { user, userId } = this.props;
    if (prevProp !== this.props) {
      this.setState({
        user,
        userId
      });
    }
  }

  render() {
    const { user, userId, jobId } = this.state;
    return (
      <div className="applicant-info">
        <Link
          to={`/applicant-cv/id=${userId}&job_id=${jobId}`}
          style={{ textAlign: 'center', colo: '#009ad0' }}
        >
          مشاهدة كامل السيرة الذاتية
        </Link>
        <h3>{user.info && user.info.fullName}</h3>
        <h3 style={{ color: '#898989' }}>
          {user.info && user.info.country.countryName},{' '}
          {user.info && user.info.city.cityName}{' '}
        </h3>
        <h2 className="heading">الدراسات والشهادات</h2>
        <div className="applicant-degrees">
          <div>
            <div>
              <h4>الجامعة :</h4>
              <p>
                {(user.info && user.info.universty
                  ? user.info.universty.universtyName
                  : '') || ' '}{' '}
              </p>
            </div>
            <div>
              <h4>المرحلة الدراسية :</h4>
              <p>{(user.info && user.info.education_degree) || ''}</p>
            </div>
          </div>
          <div>
            <div>
              <h4>التخصص والقسم :</h4>
              <p>
                {
                  (user.info && user.info.public_Major
                    ? user.info.public_Major.majorName
                    : '',
                  (user.info && user.info.spMajor
                    ? user.info.spMajor.majorName
                    : '') || ' ')
                }{' '}
              </p>
            </div>
            <div>
              <h4>المستوى الدراسي :</h4>
              <p>{(user.info && user.info.study_degree) || ' '}</p>
            </div>
          </div>
        </div>
        <h2 className="h-title heading">معلومات عامة</h2>
        <div className="applicant-general">
          <div>
            <h3>المهارات العامة : </h3>
            {user.info && _.isArray(user.info.skills)
              ? user.info.skills.map(elm => {
                  return <p key={elm.id}>{elm.skillName}</p>;
                })
              : ''}
            <h3>اللغات : </h3>
            {user.info && _.isArray(user.info.languages)
              ? user.info.languages.map(elm => {
                  return <p key={elm}>{elm}</p>;
                })
              : ''}
          </div>
          <div>
            <h3>المهارات الشخصية : </h3>
            {user.info && _.isArray(user.info.personal_Skills)
              ? user.info.personal_Skills.map(elm => {
                  return <p key={elm._id}>{elm.skillName}</p>;
                })
              : ''}
          </div>
        </div>

        <div className="btns-container">
          <button className="accept-applicant" onClick={this.acceptUser}>
            قبول المتقدم
          </button>
          <button className="reject-applicant">رفض المتقدم</button>
        </div>
      </div>
    );
  }
}
export default Applicant;
