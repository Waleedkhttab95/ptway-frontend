import React from 'react';
import { Row } from 'antd';
import './style.scss';
import facebook from '../../images/Facebook.svg';
import twitter from '../../images/Twitter.svg';
import linkedIn from '../../images/linked.svg';
import ptwayLogo from '../../images/PTway_Logo.svg';

import { Link } from 'react-router-dom';
import history from '../../_core/history';
const Footer = () => {
  return (
    <Row className="footer-container">
      <div className="footer">
        <div className="footer-social-media">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
        <div className="footer-menu">
          <Link to="/home/about-us">من نحن </Link>
          <a>الأفراد</a>
          <a>الشركات</a>
          <Link to="/home/common-questions">الأسئلة الشائعة</Link>
          <a>السياسة والخصوصية</a>
        </div>
        <div className="footer-logo">

          <img
            src={ptwayLogo}
            alt="logo"
            className="footer-logo"
            onClick={() => history.push('/')}
          />
        </div>
      </div>

      {/* <div className="sub-footer">
        <div>
          <span>سياسة الخصوصية </span>
          <span>شروط الاستخدام</span>
        </div>
        <div>جميع الحقوق محفوظة لموقع PTWay</div>
        <div>By: 80.Design</div>
      </div> */}
    </Row>
  );
};
export default Footer;
