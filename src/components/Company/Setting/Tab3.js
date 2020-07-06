import React from 'react';
import './style.scss';
import { Input, Button } from 'antd';
const Tab3 = ({
  handleChange,
  ChangeSetting,
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

        <h3 className="heading">تعديل اسم الشركة</h3>
        <Input
          placeholder="اسم الشركة الجديد"
          onChange={handleChange}
          name="companyName"
        />

        <Button
          onClick={ChangeSetting}
          style={{
            width: '250px',
            backgroundColor: '#1f3f54',
            height: '40px',
            margin: '50px auto'
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
