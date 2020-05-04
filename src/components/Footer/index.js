import React from 'react';
import { Row } from 'antd';
import './style.scss';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
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
            <a
              href="https://www.facebook.com/ptway.net/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/ptway"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/ptwayy/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-menu">
          <Link to="/home/about-us">من نحن </Link>
          <Link to="/user/signup">الأفراد</Link>
          <Link to="/company/signup">الشركات</Link>
          <Link to="/home/common-questions">الأسئلة الشائعة</Link>
          <Link to="/policy-and-privacy">السياسة والخصوصية</Link>
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
    </Row>
  );
};
export default Footer;
