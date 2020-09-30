import React from 'react';
import { Checkbox, Input, Select } from 'antd';

const step2Form = props => {
  const { state, steps, current, handleInputsChange, handleChange } = props;
  const { nameError, phoneError, positionError, Name, position, phone } = state;
  return (
    <div className="com-steps-form">
      <div className="form-content">
        <h5 className="section-title">بيانات مسؤول التوظيف</h5>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">الإسم الأول والأخير </label>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="Name"
            value={Name}
          />
          <span style={{ color: 'red' }}>
            {nameError && !state.Name ? nameError : ''}
          </span>
          <label className="info-label">رقم الجوال</label>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="phone"
            value={phone}
          />
          <span style={{ color: 'red' }}>
            {phoneError && !state.phone ? phoneError : ''}
          </span>
          <label className="info-label">صفة المسؤول</label>
          <Select
            name="position"
            value={position}
            onChange={value => handleChange(value, 'position')}
            className="country-text"
          >
            <Select.Option value="صاحب المشروع">صاحب المشروع</Select.Option>
            <Select.Option value="مسؤول الموارد البشرية">
              مسؤول الموارد البشرية
            </Select.Option>
            <Select.Option value="مدير الموارد البشرية">
              مدير الموارد البشرية
            </Select.Option>
          </Select>
          <span style={{ color: 'red' }}>
            {positionError && !state.position ? positionError : ''}
          </span>

          <Checkbox className="signup-check ">
            بإنشاء حسابك معنا أنت توافق على سياسة الاستخدامو سياسة <br />
            الخصوصية للموقع.
          </Checkbox>

          <div>
            {' '}
            <img src={require('../../../../images/shield.svg')} />
            <span>معلوماتك سوف تستخدم لايجاد أفضل المرشحين لك.</span>
          </div>
          <br />
          {props.error && props.error.signupError && (
            <span style={{ color: 'red' }}>
              {props.error.signupError.response.data}
            </span>
          )}

          {current === steps && (
            <button
              type="primary"
              className="submit-btn"
              onClick={props.signup}
            >
              أنشر وظيفة
            </button>
          )}
          {current > 0 && (
            <div onClick={props.prev} className="prev">
              السابق
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default step2Form;
