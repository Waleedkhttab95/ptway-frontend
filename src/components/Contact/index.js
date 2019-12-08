import React from 'react';
import { Row, Col, Radio, Input } from 'antd';
import './contact.scss';
import Illustration_Digital from '../../images/Illustration_Digital.svg';

const { TextArea } = Input;
const ContactUs = () => {
  return (
    <Row className="contact-container">
      <h3 className="contact-title">تواصل معنا </h3>
      <div className="contact-us">
        <Col md={12}>
          <img
            style={{ marginTop: '100px' }}
            src={Illustration_Digital}
            alt="Illustration_Digital"
            className="contact-us-img"
          />
        </Col>
        <Col md={12}>
          <div className="element">
            <h4 className="element-title">سبب التواصل معنا</h4>
            <Radio.Group value={'مساعدة مالية'} className="radio-options">
              <Radio value={1}>مساعدة عامة</Radio>
              <Radio value={2}>تبليغ عن مشكلة</Radio>
              <Radio value={3}>تواصل إعلاني</Radio>
            </Radio.Group>
            <form className="contact-form">
              <Input placeholder="الاسم الكامل" className="contact-input" />
              <Input
                placeholder="البريد الالكتروني"
                className="contact-input"
              />
              <Input placeholder="عنوان الرسالة" className="contact-input" />
              <TextArea
                rows={4}
                className="contact-input"
                placeholder="نص الرسالة"
              />
              <button className="contact-btn">ارسل الرسالة</button>
            </form>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default ContactUs;
