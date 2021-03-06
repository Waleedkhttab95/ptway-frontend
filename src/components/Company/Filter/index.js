import React from 'react';
import '../../User/Filter/style.scss';
import { Select } from 'antd';
import _ from 'lodash';

const options = [
  { key: 'new', value: 'الأحدث' },
  { key: 'old', value: 'الأقدم' }
];
const FilterAndSearch = ({ handleSearch, handleFilter, handleChange }) => {
  return (
    <div className="jobs-actions">
      <div className="action-right-side">
        <div style={{ position: 'relative' }}>
          <input
            className="jobs-search"
            placeholder="بحث"
            onChange={handleSearch}
          />
          <i className="fa fa-search jobs-search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div className="action-left-side">
        <span className="filter-title">الترتيب</span>
        <Select
          className=" filter-options"
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
        {/* <button className="filter-btn" onClick={handleFilter}>
          فلترة
        </button> */}
      </div>
    </div>
  );
};

export default FilterAndSearch;
