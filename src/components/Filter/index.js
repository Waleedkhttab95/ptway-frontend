import React from 'react';
import './style.scss';
import { Select } from 'antd';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';

const options = [
  { key: 'new', value: 'الأحدث' },
  { key: 'old', value: 'الأقدم' }
];
const FilterAndSearch = ({ allProjects, handleChange, handleFilter }) => {
  console.log('allProjects', allProjects);
  return (
    <div className="jobs-actions">
      <div className="action-right-side">
        <div style={{ position: 'relative' }}>
          <Autocomplete
            options={
              _.isArray(allProjects.proj)
                ? allProjects.proj.map(elm => elm.projectName)
                : ''
            }
            renderInput={params => (
              <TextField
                {...params}
                label="بحث"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />

          {/* <input className="jobs-search" placeholder="بحث" />
          <i className="fa fa-search jobs-search-icon" aria-hidden="true"></i> */}
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
        <button className="filter-btn" onClick={handleFilter}>
          فلترة
        </button>
      </div>
    </div>
  );
};

export default FilterAndSearch;
