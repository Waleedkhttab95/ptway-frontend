import React from 'react';
import './style.scss';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const { acceptUser, rejectUser } = applicants;

class Applicant extends React.Component {
  state = { user: '', status: false };
  async componentDidMount() {
    const { user, userId, jobId, status } = this.props;
    this.setState({
      user,
      userId,
      jobId,
      status
    });
  }
  acceptUser = async () => {
    const { userId, jobId } = this.state;

    await acceptUser({
      jobId,
      userId
    });
    this.setState(
      {
        status: true
      },
      () => {
        message.success('تم قبول المرشح');
      }
    );
  };

  componentDidUpdate(prevProp) {
    const { user, userId, status } = this.props;
    if (prevProp !== this.props) {
      this.setState({
        user,
        userId,
        status
      });
    }
  }


  rejectUser = async id => {
    await rejectUser({ id });
    window.location.reload();
  };
  render() {
    const { user, userId, jobId, status } = this.state;
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
        <h2 className="heading">
          <i
            style={{ marginLeft: '10px' }}
            className="fa fa-graduation-cap"
            aria-hidden="true"
          ></i>
          الدراسات والشهادات
        </h2>

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
              <p>{(user.info && user.education_degree) || ''}</p>
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
              <p>{(user.info && user.Education_level) || ' '}</p>
            </div>
          </div>
        </div>
        <h2 className="heading">
          <i
            style={{ marginLeft: '10px' }}
            className="fa fa-lightbulb-o"
            aria-hidden="true"
          ></i>
          الدراسات والشهادات
        </h2>
        <div className="applicant-general">
          <div>
            <h3>المهارات العامة : </h3>
            {user.info && _.isArray(user.info.skills)
              ? user.skills.map(elm => {
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
              ? user.personal_Skills.map(elm => {
                  return <p key={elm._id}>{elm.skillName}</p>;
                })
              : ''}
          </div>
        </div>

        {status !== 'Accepted' && (
          <div
            className={
              this.state.status
                ? 'btns-container btns-hidden'
                : 'btns-container'
            }
          >
            <button className="accept-applicant" onClick={this.acceptUser}>
              قبول المتقدم
            </button>
            <button
              className="reject-applicant"
              onClick={() => this.rejectUser(user.info._id)}
            >
              رفض المتقدم
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Applicant;
