import React from 'react';
import './style.scss';

const CompanyInfo = props => {
  const { info } = props.companyInfo;
  return (
    <div className="company-info">
      <div className="company-pic-info">
        <img src={info ? info.imagePath : ''} alt="company" />
        <span className="company-name">
          {info ? info.company.companyName : ''}
        </span>
      </div>
      <div className="company-details-info">
        <span>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          {info ? info.info : ''}
        </span>
        <span>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          yasser.qahtani@gmail.com
        </span>
        <span>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {info ? info.country.countryName : ''},{' '}
          {info ? info.city.cityName : ''}, {info ? info.address : ''}
        </span>
      </div>
    </div>
  );
};
export default CompanyInfo;
