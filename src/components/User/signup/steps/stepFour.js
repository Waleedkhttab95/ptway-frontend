import React from 'react';
import { Input } from 'antd';

const step4Form = props => {
  const { handleChange } = props;
  return (
    <div className="steps-form">
      <div className="form-content" style={{ padding: '30px 53px 0 0' }}>
        {/* <img src={personalInfoIcon} /> */}
        <span className="f-title">معلومات الحساب</span>
        <span className="line"></span>
        <div className="form-fields">
          <div className="first-row">
            <div className="elements">
              <label className="info-label">البريد الالكتروني</label>
              <Input
                className="name-text"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="elements">
              <label className="info-label">تأكيد البريد الالكتروني</label>
              <Input
                className="name-text"
                name="re-email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="first-row">
            <div className="elements">
              <label className="info-label">كلمة المرور</label>
              <Input
                className="name-text"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="elements">
              <label className="info-label">تأكيد كلمة المرور</label>
              <Input
                className="name-text"
                name="re-password"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default step4Form;
