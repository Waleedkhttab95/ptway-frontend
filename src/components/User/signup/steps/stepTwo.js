import React from 'react';
import { Select, DatePicker } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';

const { Option } = Select;
const step2Form = props => {
  const { handleChange, error, state } = props;
  return (
    <div className="steps-form">
      <div className="form-content">
        <img src={personalInfoIcon} />
        <span className="f-title">معلومات شخصية</span>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">الجنس</label>
          <Select
            onChange={value => handleChange(value, 'gender')}
            className="country-text"
          >
            <Option value="ذكر">ذكر</Option>
            <Option value="أنثى">أنثى</Option>
          </Select>
          <span style={{ color: 'red' }}>
            {error && !state.gender ? error : ''}
          </span>
          <label className="info-label">تاريخ الميلاد</label>
          <DatePicker
            className="user-signup-datepicker"
            placeholder="اختر التاريخ"
            onChange={value => handleChange(value, 'birthDate')}
          />
          <span style={{ color: 'red' }}>
            {error && !state.birthDate ? error : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default step2Form;
