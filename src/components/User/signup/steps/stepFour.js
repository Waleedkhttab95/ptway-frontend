import React from 'react';
import { Input } from 'antd';

class step4Form extends React.Component {
  render() {
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
                <Input className="name-text" />
              </div>
              <div className="elements">
                <label className="info-label">تأكيد البريد الالكتروني</label>
                <Input className="name-text" />
              </div>
            </div>
            <div className="first-row">
              <div className="elements">
                <label className="info-label">كلمة المرور</label>
                <Input className="name-text" />
              </div>
              <div className="elements">
                <label className="info-label">تأكيد كلمة المرور</label>
                <Input className="name-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default step4Form;
