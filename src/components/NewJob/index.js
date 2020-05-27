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
            <h3 className="main-title">هل أنت..</h3>
            <div className="user-type">
              <div
                onClick={() => {
                  history.push('/user-new-job');
                }}
              >
                <img src={userJob} alt="userJob" />
                باحث عن عمل
              </div>
              <div
                onClick={() => {
                  history.push('/company-new-job');
                }}
              >
                <img src={companyJob} alt="companyJob" />
                شركة
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}