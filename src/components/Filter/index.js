import React from 'react';
import './style.scss';

const FilterAndSearch = () => {
  return (
    <div className="jobs-actions">
      <div className="action-right-side">
        {/* <div className="grid-option">
          <i className="fa fa-th-large" aria-hidden="true"></i>
        </div>
        <i className="fa fa-th-list list-option" aria-hidden="true"></i> */}
        <div style={{ position: 'relative' }}>
          <input className="jobs-search" placeholder="بحث" />
          <i className="fa fa-search jobs-search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div className="action-left-side">
        <span className="filter-title">الترتيب :</span>
        <input placeholder="الاحدث" className="filter-options" />
        <button className="filter-btn">فلترة</button>
      </div>
    </div>
  );
};

export default FilterAndSearch;
