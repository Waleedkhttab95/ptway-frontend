import React from 'react';
import { DatePicker, Radio } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';

const step2Form = props => {
  const { handleChange, state, steps, current, handleRadioChange } = props;
  const { genderError, dateError } = state;
  return (
    <div className="steps-form">
      <div className="form-content">
        <img src={personalInfoIcon} />
        <span className="f-title">معلومات شخصية</span>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">الجنس</label>
          <div className="checkbox-options">
            <Radio.Group
              onChange={handleRadioChange}
              className="country-text"
              name="gender"
              options={['ذكر', 'أنثى']}
              value={state.gender}
            />
            {/* <Checkbox className="check-option">نعم</Checkbox>
                <Checkbox className="check-option">لا</Checkbox> */}
          </div>
          {/* <Select
            onChange={value => handleChange(value, 'gender')}
            className="country-text"
          >
            <Option value="ذكر">ذكر</Option>
            <Option value="أنثى">أنثى</Option>
          </Select> */}
          <span style={{ color: 'red' }}>
            {genderError && !state.gender ? genderError : ''}
          </span>
          <label className="info-label" style={{ marginTop: '0px' }}>
            تاريخ الميلاد
          </label>
          <DatePicker
            className="user-signup-datepicker"
            placeholder="اختر التاريخ"
            onChange={value => handleChange(value, 'birthDate')}
            value={state.birthDate}
          />
          <span style={{ color: 'red' }}>
            {dateError && !state.birthDate ? dateError : ''}
          </span>
          <div className="steps-btns">
            {current > 0 && (
              <button
                // style={{ marginLeft: 8 }}
                onClick={props.prev}
                className="prev-btn"
              >
                السابق
              </button>
            )}
            {current < steps && (
              <button
                className="first-step-btn"
                type="primary"
                onClick={props.next}
              >
                التالي
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default step2Form;
