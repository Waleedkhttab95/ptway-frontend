import React from 'react';
import { Input } from 'antd';

const step3Form = props => {
  const { handleChange, state, current, steps } = props;
  const { emailError, passwordError } = state;

  return (
    <div className="steps-form">
      <div className="form-content signupf">
        {/* <img src={personalInfoIcon} /> */}
        {/* <span className="f-title">معلومات الحساب</span> */}
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">البريد الالكتروني</label>
          <Input
            className="single-input"
            name="email"
            onChange={handleChange}
            type="email"
            value={state.email}
          />
          <span style={{ color: 'red' }}>
            {emailError && !state.email ? emailError : ''}
          </span>
          <label className="info-label">كلمة المرور</label>
          <Input
            className="single-input"
            name="password"
            onChange={handleChange}
            type="password"
            value={state.password}
          />
          <span style={{ color: 'red' }}>
            {passwordError && !state.password ? passwordError : ''}
          </span>
          <label className="info-label">تأكيد كلمة المرور</label>
          <Input
            className="single-input"
            name="rePassword"
            onChange={handleChange}
            type="password"
          />
          <span style={{ color: 'red' }}>
            {state.password !== state.rePassword || !state.rePassword
              ? 'كلمة المرور غير متطابقة'
              : ''}
          </span>

          {props.error && props.error.signupError && (
            <span style={{ color: 'red' }}>
              {props.error.signupError.response.data}
            </span>
          )}

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
            {current === steps && (
              <button
                type="primary"
                className="first-step-btn"
                onClick={props.signup}
              >
                الانتقال للرئيسية
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default step3Form;
