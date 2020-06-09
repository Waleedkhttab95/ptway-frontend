import React from 'react';
import userJob from '../../images/job1.svg';
import companyJob from '../../images/job2.svg';
import './style.scss';
import LoginNavbar from '../Header/LoginNavbar';
import Footer from '../Footer';
import history from '../../_core/history';

export class GetNewJob extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <div className="sub-container">
            <h2 className="sub-title">
              معاً لنجعل التحديات المتمثلة في كوفيد-١٩ <br />
              محفزاً لتحقيق التنمية المستدامة!
            </h2>
            <h3 className="main-title">هل أنت..</h3>
            <div className="user-type">
              <div
                onClick={() => {
                  history.push('/user-new-job');
                }}
              >
                <img src={userJob} alt="userJob" />
                مستعد للتحدي
                <p>الأفراد</p>
              </div>
              <div
                onClick={() => {
                  history.push('/company-new-job');
                }}
              >
                <img src={companyJob} alt="companyJob" />
                ميدان التحدي
                <p>الشركات</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
