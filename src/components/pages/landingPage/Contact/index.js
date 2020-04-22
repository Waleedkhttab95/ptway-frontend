import React from 'react';
import { Row, Input } from 'antd';
import './style.scss';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const { TextArea } = Input;
const ContactUs = props => {
  const { i18n } = props;
  return (
    <Row className="contact-us">
      <h2 className="title">تواصل معنا</h2>
      <form>
        <div className="inputs">
          <Input placeholder="الاسم" />
          <Input placeholder="الإيميل" />
        </div>
        <TextArea rows={4} placeholder="أكتب رسالتك هنا" />
        <button className="send-btn">ارسال</button>
      </form>
      <h3> ابدأ الآن</h3>
      <div className="btns">
      <Link to="/company/signup"><button>سجل شركتك الأن</button></Link>

      <Link to="/user/signup"><button>سجل كباحث عن عمل</button></Link>

        
      </div>
    </Row>
  );
};

export default withTranslation()(ContactUs);
