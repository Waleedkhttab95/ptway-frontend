import React from 'react';
import './style.scss';
import { Col, Input, Radio } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';

const Setting = () => {
  return (
    <div className="user-container">
      <Header />
      <div className="setting-body">
        <div className="setting-container">
          <Col className="account-info">
            <h4 className="heading">معلومات الحساب</h4>
            <div className="account-fields">
              <span>البريد الالكتروني</span>
              <Input className="account-input" type="email" />
              <span>كلمة المرور</span>
              <Input className="account-input" type="password" />
              <span>تأكيد كلمة المرور</span>
              <Input className="account-input" type="password" />
            </div>
          </Col>
          <Col className="account-options">
            <h4 className="heading">خيارات الحساب</h4>
            <div className="email-setting">
              <h6>ارسال الاشعارات عن طريق الايميل</h6>
              <div className="checkbox-options">
                <Radio.Group options={['نعم', 'لا']} className="check-option" />
                {/* <Checkbox className="check-option">نعم</Checkbox>
                <Checkbox className="check-option">لا</Checkbox> */}
              </div>
            </div>
          </Col>
        </div>
        <button className="save-setting-btn">حفظ التعديلات</button>
      </div>
      <Footer />
    </div>
  );
};
export default Setting;
