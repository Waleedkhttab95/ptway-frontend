import React from 'react';
import { Select, Input } from 'antd';
const { Option } = Select;
const step1Form = props => {
  const { handleChange, handleInputsChange, state, steps, current } = props;
  const {
    jobTypeError,
    sectorError,
    companyNameError,
    jobTypes,
    sectors,
    companyName,
    emailError,
    passwordError
  } = state;

  return (
    <div className="com-steps-form">
      <div className="form-content">
        <h5 className="section-title">معلومات الشركة</h5>
        <div className="form-fields">
          <span className="info-label">إسم المجموعة أو الشركة</span>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="companyName"
            value={companyName}
          />
          <span style={{ color: 'red' }}>
            {companyNameError && !state.companyName ? companyNameError : ''}
          </span>
          <label className="info-label">البريد الالكتروني</label>
          <Input
            className="single-input"
            name="email"
            onChange={handleInputsChange}
            type="email"
            value={state.email}
          />
          <span style={{ color: 'red' }}>
            {emailError && !state.email ? emailError : ''}
          </span>
          <span className="info-label">نشاط العمل</span>
          <Select
            name="jobType"
            onChange={value => handleChange(value, 'jobType')}
            className="country-text"
            value={state.jobType}
          >
            {jobTypes.map(elm => {
              return (
                <Option value={elm.id} key={elm.id}>
                  {elm.value}
                </Option>
              );
            })}
          </Select>
          <span style={{ color: 'red' }}>
            {jobTypeError && !state.jobType ? jobTypeError : ''}
          </span>
          <span className="info-label">القطاع</span>
          <Select
            name="sector"
            onChange={value => handleChange(value, 'sector')}
            className="country-text"
            value={state.sector}
          >
            {sectors.map(elm => {
              return (
                <Option value={elm.id} key={elm.id}>
                  {elm.value}
                </Option>
              );
            })}
          </Select>
          <span style={{ color: 'red' }}>
            {sectorError && !state.sector ? sectorError : ''}
          </span>
          <label className="info-label">كلمة المرور</label>
          <Input
            className="single-input"
            name="password"
            onChange={handleInputsChange}
            type="password"
            value={state.password}
          />
          <span style={{ color: 'red' }}>
            {passwordError && !state.password ? passwordError : ''}
          </span>
          {current < steps && (
            <button
              className="first-step-btn"
              type="primary"
              onClick={props.next}
            >
              التالي - مسؤول التوظيف
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default step1Form;
