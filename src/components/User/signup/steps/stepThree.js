import React from 'react';
import { Input, Select } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';
import _ from 'lodash';

const { Option } = Select;

const step3Form = props => {
  const {
    handleChange,
    handleSelect,
    majors,
    categories,
    state,
    current,
    steps
  } = props;
  const { firstNameError, lastNameError, majorError, categoryError } = state;
  return (
    <div className="steps-form steps-form-user-signin">
      <div className="form-content signupf">
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

          <label className="info-label">الإهتمامات الوظيفية</label>
          <Select
            onChange={value => handleSelect(value, 'jobCategory')}
            className="major-text"
            value={state.jobCategory}
          >
            {_.isArray(categories)
              ? categories.map(elm => {
                  return (
                    <Option value={elm._id} key={elm._id}>
                      {elm.jobName}
                    </Option>
                  );
                })
              : ''}
          </Select>
          <span style={{ color: 'red' }}>
            {categoryError && !state.jobCategory ? categoryError : ''}
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

export default step3Form;
