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
    companyName
  } = state;

  return (
    <div className="steps-form">
      <div className="form-content">
        <div className="form-fields">
          <span className="info-label">اسم الجهة</span>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="companyName"
            value={companyName}
          />
          <span style={{ color: 'red' }}>
            {companyNameError && !state.companyName ? companyNameError : ''}
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
  );
};

export default step1Form;
