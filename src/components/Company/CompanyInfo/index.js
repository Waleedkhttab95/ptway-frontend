import React from 'react';
import './style.scss';

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="company-pic-info">
        <i className="fa fa-user c-pic" aria-hidden="true"></i>
        {/* <img /> */}
        <span className="company-name">شركة بيتزا هت للبيتزا</span>
      </div>
      <div className="company-details-info">
        <span>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          تقدم شركة بيتزا هت انواع البيتزا الفاخرة والتي تقدمها عبر آلاف الأفرع
          حول العالم لتصلك البيتزا ساحنة
        </span>
        <span>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          yasser.qahtani@gmail.com
        </span>
        <span>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          المملكة العربية السعودية، مدينة الرياض الأخضر، شارع الفرقان، بناء 21
          مكتب 421
        </span>
      </div>
    </div>
  );
};
export default CompanyInfo;
