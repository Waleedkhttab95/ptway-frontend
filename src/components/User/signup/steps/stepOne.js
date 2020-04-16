import React from 'react';
import { Select } from 'antd';
import countryIcon from '../../../../images/home-country-icon.svg';
import _ from 'lodash';
const { Option } = Select;
const step1Form = props => {
  const { handleChange, cities, state, steps, current } = props;
  const { cityError } = state;

  return (
    <div className="steps-form">
      <div className="form-content">
        <img src={countryIcon} />
        <span className="f-title">المدينة ومكان السكن</span>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">
            لتحديد وظائف مناسبة لك الرجاء تحديد المدينة التي تسكن فيها
          </label>
          <Select
            name="city"
            onChange={value => handleChange(value, 'city')}
            className="country-text"
          >
            {_.isArray(cities)
              ? cities.map(elm => {
                  return (
                    <Option value={elm.id} key={elm.id}>
                      {elm.value}
                    </Option>
                  );
                })
              : ''}
          </Select>
          <span style={{ color: 'red' }}>
            {cityError && !state.city ? cityError : ''}
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
