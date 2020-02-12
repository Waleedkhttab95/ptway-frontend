import React from 'react';
import './style.scss';

const CompanyInfo = props => {
  const { companyInfo } = props;
  return (
    <div className="company-info">
      <div className="company-pic-info">
        <img src={companyInfo.imagePath} alt="company" />
        <span className="company-name">شركة بيتزا هت للبيتزا</span>
      </div>
      <div className="company-details-info">
        <span>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          {companyInfo.info}
        </span>
        <span>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          yasser.qahtani@gmail.com
        </span>
        <span>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {companyInfo.country}, {companyInfo.city}, {companyInfo.address}
        </span>
      </div>
    </div>
  );
};
export default CompanyInfo;
