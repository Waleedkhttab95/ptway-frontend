import React from 'react';
import { Select } from 'antd';
import countryIcon from '../../../../images/home-country-icon.svg';
import _ from 'lodash';
const { Option } = Select;
const step1Form = props => {
  console.log('props', props);
  const { handleChange, countries, cities, state } = props;
  const { countryError, cityError } = state;

  return (
    <div className="steps-form">
      <div className="form-content">
        <img src={countryIcon} />
        <span className="f-title">الدولة ومكان السكن</span>
        <span className="line"></span>
        <div className="form-fields">
          <label className="info-label">الدولة</label>
          <Select
            onChange={value => handleChange(value, 'country')}
            name="country"
            className="country-text"
          >
            {_.isArray(countries)
              ? countries.map(elm => {
                  return (
                    <Option value={elm.id} key={elm.id}>
                      {elm.value}
                    </Option>
                  );
                })
              : null}
          </Select>
          <span style={{ color: 'red' }}>
            {countryError && !state.country ? countryError : ''}
          </span>
          <label className="info-label">المدينة</label>
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
        </div>
      </div>
    </div>
  );
};

export default step1Form;
