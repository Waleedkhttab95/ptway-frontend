import React from 'react';
import { Row } from 'antd';
import './footer.scss';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import linkedIn from '../../images/Linkedin.svg';
import ptwayLogoFooter from '../../images/ptwayLogoFooter.png';

const Footer = () => {
  return (
    <Row>
      <div className="footer">
        <div className="footer-logo">
          <img src={ptwayLogoFooter} alt="ptwayLogoFooter" />
        </div>
        <div className="footer-menu">
          <a>كيف نعمل</a>
          <a>الأسئلة الأكثر شيوعاً</a>
          <a>من نحن </a>
          <a>عن الموقع</a>
          <a>تواصل معنا</a>
        </div>
        <div className="footer-social-media">
          <div className="sm-img-cont">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="sm-img-cont">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="sm-img-cont">
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div>
          <span>سياسة الخصوصية </span>
          <span>شروط الاستخدام</span>
        </div>
        <div>جميع الحقوق محفوظة لموقع PTWay</div>
        <div>By: 80.Design</div>
      </div>
    </Row>
  );
};
export default Footer;
