import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';

const Notifications = () => {
  return (
    <div className="user-container">
      <Header />
      <div className="notifications">
        <div className="notification-container">
          <h6>اليوم</h6>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="notification-container">
          <h6>25/10/2019</h6>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="notification-container">
          <h6>27/10/2019</h6>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
          <div className="notification">
            <div className="notification-msg">
              <i
                className="fa fa-picture-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px 0 10px'
                }}
              ></i>
              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا هت للبيتزا
            </div>
            <i
              className="fa fa-times notification-close"
              aria-hidden="true"
            ></i>
          </div>
        </div>

        <button className="display-more-btn">عرض المزيد</button>
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;
