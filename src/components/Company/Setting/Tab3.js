import React from 'react';
import './style.scss';
import { Input, Button } from 'antd';
const Tab3 = props => {
  return (
    <div className="account-setting">
      <div className="account-info">
        <h3 className="heading">تغير كلمة المرور</h3>
        <label className="sub-title">كلمة المرور القديمة</label>
        <Input
          onChange={props.handleChange}
          name="prevPassword"
          type="password"
        />
        <label className="sub-title">كلمة المرور</label>
        <Input
          onChange={props.handleChange}
          name="newPassword"
          type="password"
        />
        <Button onClick={props.ChangePassword} style={{ width: '250px' }}>
          {' '}
          حفظ
        </Button>
      </div>
    </div>
  );
};

export default Tab3;
