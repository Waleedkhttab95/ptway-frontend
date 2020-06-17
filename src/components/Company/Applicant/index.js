import React from 'react';
import './style.scss';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const { acceptUser } = applicants;

class Applicant extends React.Component {
  state = { user: '' };
  async componentDidMount() {
    const { user, userId } = this.props;
    this.setState({
      user,
      userId
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
    const { user, userId } = this.state;
    return (
      <div className="applicant-info">
        <Link
          to={`/applicant-cv/id=${userId}`}
          style={{ textAlign: 'center', colo: '#009ad0' }}
        >
          مشاهدة كامل السيرة الذاتية
        </Link>
        <h3>{user.fullName}</h3>
        <h3 style={{ color: '#898989' }}>
          {user.country}, {user.city}{' '}
        </h3>
        <h2 className="heading">الدراسات والشهادات</h2>
        <div className="applicant-degrees">
          <div>
            <div>
              <h4>الجامعة :</h4>
              <p>{user.university || ' '} </p>
            </div>
            <div>
              <h4>المرحلة الدراسية :</h4>
              <p>{user.education_degree || ''}</p>
            </div>
          </div>
          <div>
            <div>
              <h4>التخصص والقسم :</h4>
              <p>{(user.public_Major, user.spicifc_Major || ' ')} </p>
            </div>
            <div>
              <h4>المستوى الدراسي :</h4>
              <p>{user.study_degree || ' '}</p>
            </div>
          </div>
        </div>
        <h2 className="h-title heading">معلومات عامة</h2>
        <div className="applicant-general">
          <div>
            <h3>المهارات العامة : </h3>
            {_.isArray(user.skills)
              ? user.skills.map(elm => {
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
            <h3>المهارات الشخصية : </h3>
            {_.isArray(user.personal_Skills)
              ? user.personal_Skills.map(elm => {
                  return <p key={elm}>{elm}</p>;
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
