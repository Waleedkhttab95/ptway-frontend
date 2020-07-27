import React from 'react';
import './style.scss';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const { acceptUser, rejectUser, addToFavList } = applicants;

let array = [];
class Applicant extends React.Component {
  state = { user: '', status: '', addedToFav: false };
  async componentDidMount() {
    const { user, userId, jobId, status, applicantId, isFavorite } = this.props;
    this.setState({
      user,
      userId,
      jobId,
      status,
      applicantId,
      isFavorite
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
        status: 'Accepted'
      },
      () => {
        message.success('تم قبول المرشح');
      }
    );
  };

  componentDidUpdate(prevProp) {
    const { user, userId, status, applicantId, isFavorite } = this.props;
    if (prevProp !== this.props) {
      this.setState({
        user,
        userId,
        status,
        applicantId,
        isFavorite
      });
    }
  }

  rejectUser = async id => {
    await rejectUser({ id });
    // window.location.reload();
  };

  addToFavourite = async id => {
    await addToFavList({ id });
    array.push(id);
    this.setState({
      addedToFav: true
    });
  };
  render() {
    const {
      user,
      userId,
      jobId,
      status,
      applicantId,
      addedToFav,
      isFavorite
    } = this.state;
    return (
      <div className="applicant-info">
        <div className="title">
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

          <img
            src={
              array.includes(applicantId) || isFavorite
                ? require('../../../images/fav2.svg')
                : require('../../../images/fav.svg')
            }
            onClick={() => this.addToFavourite(applicantId)}
          />
        </div>
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
          <div>
            <button className="accept-applicant" onClick={this.acceptUser}>
              قبول المتقدم
            </button>
            <button
              className="reject-applicant"
              onClick={() => this.rejectUser(applicantId)}
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
