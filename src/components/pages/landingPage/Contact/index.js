import React from 'react';
import { Row, Input } from 'antd';
import './style.scss';
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
      </form>
      <h3> ابدأ الآن</h3>
      <div className="btns">
        <button>سجل شركتك الأن</button>
        <button>سجل كباحث عن عمل</button>
      </div>
    </Row>
  );
};

export default withTranslation()(ContactUs);
