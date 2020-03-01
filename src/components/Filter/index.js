import React from 'react';
import './style.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';

const FilterAndSearch = ({ allProjects }) => {
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
        <input placeholder="الاحدث" className="filter-options" />
        <button className="filter-btn">فلترة</button>
      </div>
    </div>
  );
};

export default FilterAndSearch;
