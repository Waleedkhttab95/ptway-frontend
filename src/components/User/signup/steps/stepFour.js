import React from 'react';
import { Input } from 'antd';

const step4Form = props => {
  const { handleChange, state, current, steps } = props;

  const {
    emailError,
    passwordError,
    // emailMatchError,
    passwordMatchError
  } = state;
  return (
    <div className="steps-form steps-form-user-signin">
      <div className="form-content signupf">
        <span className="f-title">معلومات الحساب</span>
        <span className="line"></span>
        <div className="form-fields">
          <div className="first-row">
            <div className="elements">
              <label className="info-label">البريد الالكتروني</label>
              <Input
                className="name-text"
                name="email"
                onChange={handleChange}
                type="email"
                value={state.email}
              />
              <span style={{ color: 'red' }}>
                {emailError && !state.email ? emailError : ''}
              </span>
            </div>
          </div>
          <div className="first-row">
            <div className="elements">
              <label className="info-label">كلمة المرور</label>
              <Input
                className="name-text"
                name="password"
                onChange={handleChange}
                type="password"
                value={state.password}
              />
              <span style={{ color: 'red' }}>
                {passwordError && !state.password ? passwordError : ''}
              </span>
            </div>
            <div className="elements">
              <label className="info-label">تأكيد كلمة المرور</label>
              <Input
                className="name-text"
                name="rePassword"
                onChange={handleChange}
                type="password"
              />
              <span style={{ color: 'red' }}>
                {state.password !== state.rePassword || !state.rePassword
                  ? passwordMatchError
                  : ''}
              </span>
            </div>
          </div>
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
                // onClick={() => this.props.history.push('/user/home')}
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

export default step4Form;
