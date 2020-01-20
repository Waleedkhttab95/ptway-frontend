import React from 'react';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const Tab2 = () => {
  return (
    <React.Fragment>
      <div className="sub-accounts">
        <div>
          <div style={{ position: 'relative' }}>
            <input
              className="jobs-search"
              placeholder="بحث"
              style={{ marginRight: '0', width: '250px' }}
            />
            <i className="fa fa-search jobs-search-icon" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <span className="filter-title">الترتيب :</span>
          <input placeholder="الاحدث" className="filter-input" />
        </div>
        <button className="sub-account-btn">أضف حساب فرعي</button>
      </div>
      <div className="sub-accounts-header">
        <h3>الرقم التسلسلي</h3>
        <h3>الاسم الأول والأخير</h3>
        <h3>المنصب الوظيفي</h3>
        <h3>البريد الالكتروني</h3>
        <h3>كلمة المرور</h3>
        <h3></h3>
      </div>
      {array.map((elm, index) => {
        return (
          <div
            className={index % 2 == 0 ? 'sub-account' : 'sub-account-odd'}
            key={elm}
          >
            <h3>0231</h3>
            <h3>هاشم القحطاني</h3>
            <h3>مدير مبيعات</h3>
            <h3>hashem@ptway.com</h3>
            <h3>********</h3>
            <h3>...</h3>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default Tab2;
