import React from 'react';
import './style.scss';
import { Input, Checkbox } from 'antd';
const Tab3 = () => {
  return (
    <div className="account-setting">
      <div className="account-info">
        <h3 className="heading">معلومات الحساب</h3>
        <label className="sub-title">البريد الالكتروني</label>
        <Input />
        <label className="sub-title">كلمة المرور</label>
        <Input />
        <label className="sub-title">تعديل رقم الجوال المرتبط</label>
        <Input />
      </div>
      <div className="contact-way">
        <h3 className="heading">خيارات الحساب</h3>
        <h4 className="sub-title">التواصل معي على الإيميل</h4>
        <Checkbox>نعم</Checkbox>
        <Checkbox>لا</Checkbox>
      </div>
    </div>
  );
};

export default Tab3;
