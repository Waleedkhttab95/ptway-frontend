import React from 'react';
import './style.scss';
import { Select } from 'antd';
import _ from 'lodash';

const options = [
  { key: 'new', value: 'الأحدث' },
  { key: 'old', value: 'الأقدم' }
];
const FilterAndSearch = ({ handleSearch, handleChange }) => {
  return (
    <div className="jobs-actions">
      <div className="action-right-side">
        <div style={{ position: 'relative' }}>
          <input
            className="jobs-search"
            placeholder="بحث"
            onChange={handleSearch}
          />
          {/* <i className="fa fa-search jobs-search-icon" aria-hidden="true"></i> */}
        </div>
      </div>
      <div className="action-left-side">
        <span className="filter-title">الترتيب :</span>
        <Select
          className=" filter-options web-select"
          placeholder="الأحدث"
          onChange={handleChange}
        >
          {_.isArray(options)
            ? options.map(elm => {
                return (
                  <Select.Option
                    value={elm.value}
                    key={elm.key}
                    name="filterOption"
                  >
                    {elm.value}
                  </Select.Option>
                );
              })
            : ''}
        </Select>
        <select
          className=" filter-options mobile-select"
          placeholder="الأحدث"
          onChange={handleChange}
          name="filterOption"
        >
          {_.isArray(options)
            ? options.map(elm => {
                return (
                  <option value={elm.value} key={elm.key} name="filterOption">
                    {elm.value}
                  </option>
                );
              })
            : ''}
        </select>
      </div>
    </div>
  );
};

export default FilterAndSearch;
