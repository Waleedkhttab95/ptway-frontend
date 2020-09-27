import React from 'react';
import './style.scss';
import { Input, Button, Select } from 'antd';
const Tab3 = ({
  handleChange,
  handleSelectChange,
  ChangeSetting,
  error,
  newPassword,
  rePassword,
  Name,
  position,
  phone
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
        <label className="sub-title">اسم الشركة الجديد</label>
        <Input onChange={handleChange} name="companyName" />

        <h3 className="heading">تعديل معلومات المشرف</h3>
        <label className="sub-title">الاسم</label>
        <Input onChange={handleChange} name="Name" value={Name} />
        <label className="sub-title">رقم الجوال</label>
        <Input onChange={handleChange} name="phone" value={phone} />
        <label className="sub-title">صفة المشرف</label>
        <Select
          name="position"
          onChange={handleSelectChange}
          className="select-text"
          value={position}
        >
          <Select.Option
            value="صاحب المشروع
          "
          >
            صاحب المشروع
          </Select.Option>
          <Select.Option value="مسؤول الموارد البشرية">
            مسؤول الموارد البشرية
          </Select.Option>
          <Select.Option value="مدير الموارد البشرية">
            مدير الموارد البشرية
          </Select.Option>
        </Select>
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
