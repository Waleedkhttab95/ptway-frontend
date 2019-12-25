import React from 'react';
import { Input } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';

class step3Form extends React.Component {
  render() {
    return (
      <div className="steps-form">
        <div className="form-content" style={{ padding: '30px 53px 0 0' }}>
          <img src={personalInfoIcon} />
          <span className="f-title">معلومات شخصية</span>
          <span className="line"></span>
          <div className="form-fields">
            <div className="first-row">
              <div className="elements">
                <label className="info-label">الاسم الأول</label>
                <Input className="name-text" />
              </div>
              <div className="elements">
                <label className="info-label">الاسم الأخير</label>
                <Input className="name-text" />
              </div>
            </div>
            <label className="info-label">التخصص العام</label>
            <Input className="major-text" />
          </div>
        </div>
      </div>
    );
  }
}

export default step3Form;
