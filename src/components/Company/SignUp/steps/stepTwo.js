import React from 'react';
import { Input } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';

const step2Form = props => {
  const { state, steps, current, handleInputsChange } = props;
  const { error, Name, position, phone } = state;
  return (
    <div className="steps-form">
      <div className="form-content">
        <img src={personalInfoIcon} />
        <span className="f-title">معلومات شخصية</span>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">اسم المشرف </label>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="Name"
            value={Name}
          />
          <span style={{ color: 'red' }}>
            {error && !state.Name ? error : ''}
          </span>
          <label className="info-label" style={{ marginTop: '0px' }}>
            رقم التواصل
          </label>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="phone"
            value={phone}
          />
          <span style={{ color: 'red' }}>
            {error && !state.phone ? error : ''}
          </span>
          <label className="info-label" style={{ marginTop: '0px' }}>
            المركز الوظيفي
          </label>
          <Input
            className="single-input"
            onChange={handleInputsChange}
            name="position"
            value={position}
          />
          <span style={{ color: 'red' }}>
            {error && !state.position ? error : ''}
          </span>
          <div className="steps-btns">
            {current > 0 && (
              <button
                // style={{ marginLeft: 8 }}
                onClick={props.prev}
                className="prev-btn prev-btn-mob"
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
