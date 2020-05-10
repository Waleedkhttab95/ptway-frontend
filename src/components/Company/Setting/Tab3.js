import React from 'react';
import './style.scss';
import { Input, Button } from 'antd';
const Tab3 = ({
  handleChange,
  ChangePassword,
  error,
  newPassword,
  rePassword
}) => {
  return (
    <div className="account-setting">
      <div className="account-info">
        <h3 className="heading">تغير كلمة المرور</h3>
        <label className="sub-title">كلمة المرور القديمة</label>
        <Input onChange={handleChange} name="prevPassword" type="password" />
        <label className="sub-title"> كلمة المرور الجديدة</label>
        <Input onChange={handleChange} name="newPassword" type="password" />
        <label className="sub-title"> تأكيد كلمة المرور الجديدة</label>
        <Input onChange={handleChange} name="rePassword" type="password" />
        {error && newPassword !== rePassword && (
          <span style={{ color: 'red', marginTop: '-20px' }}>
            {' '}
            كلمة المرور غير متطابقة
          </span>
        )}
        <Button
          onClick={ChangePassword}
          style={{
            width: '250px',
            backgroundColor: '#1f3f54',
            height: '40px',
            marginBottom: '20px'
          }}
        >
          {' '}
          حفظ التعديلات
        </Button>
      </div>
    </div>
  );
};

export default Tab3;
