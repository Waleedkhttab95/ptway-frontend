import React from 'react';
import { Input, Select } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';
import _ from 'lodash';

const { Option } = Select;

const step3Form = props => {
  const { handleChange, handleSelect, majors, state, current, steps } = props;
  const { firstNameError, lastNameError, majorError } = state;
  return (
    <div className="steps-form ">
      <div
        className="form-content signupf"
        //  style={{ padding: '30px 53px 0 0' }}
      >
        <img src={personalInfoIcon} />
        <span className="f-title">معلومات شخصية</span>
        <span className="line"></span>
        <div className="form-fields">
          <div className="first-row">
            <div className="elements">
              <label className="info-label">الاسم الأول</label>
              <Input
                className="name-text"
                name="firstName"
                onChange={handleChange}
                value={state.firstName}
              />
              <span style={{ color: 'red' }}>
                {firstNameError && !state.firstName ? firstNameError : ''}
              </span>
            </div>
            <div className="elements">
              <label className="info-label">الاسم الأخير</label>
              <Input
                className="name-text"
                name="lastName"
                onChange={handleChange}
                value={state.lastName}
              />
              <span style={{ color: 'red' }}>
                {lastNameError && !state.lastName ? lastNameError : ''}
              </span>
            </div>
          </div>
          <label className="info-label">التخصص العام</label>
          <Select
            onChange={value => handleSelect(value, 'major')}
            className="major-text"
            value={state.major}
          >
            {_.isArray(majors)
              ? majors.map(elm => {
                  return (
                    <Option value={elm.id} key={elm.id}>
                      {elm.value}
                    </Option>
                  );
                })
              : ''}
          </Select>
          <span style={{ color: 'red' }}>
            {majorError && !state.major ? majorError : ''}
          </span>
          {/* <Input  name="major" onChange={handleChange} /> */}
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

export default step3Form;
