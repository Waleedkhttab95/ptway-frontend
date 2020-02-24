import React from 'react';
import './style.scss';

const Tab1 = props => {
  console.log('props', props);

  const { info } = props.companyInfo;
  return (
    <React.Fragment>
      <h4 className="heading">معلومات عامة</h4>
      <div className="extra-info">
        <h3 className="sub-title">نبذة مفصلة عن الشركة</h3>
        <p className="sub-desc">{info ? info.info : ''}</p>
        <h3 className="sub-title">رؤية الشركة</h3>
        <p className="sub-desc">{info ? info.vision : ''}</p>
        <h3 className="sub-title">رسالة الشركة</h3>
        <p className="sub-desc">{info ? info.message : ''}</p>
      </div>

      <h4 className="heading">
        <i
          className="fa fa-map-marker"
          aria-hidden="true"
          style={{ marginLeft: '5px' }}
        ></i>
        الدولة وموقع الشركة
      </h4>
      <div className="comp-location-info">
        <div>
          <h5 className="sub-title">الدولة</h5>
          <p className="sub-desc">{info ? info.country.countryName : ''}</p>
          <h5 className="sub-title">العنوان</h5>
          <p className="sub-desc">{info ? info.address : ''} </p>
        </div>
        <div>
          <h5 className="sub-title">المدينة</h5>
          <p className="sub-desc">{info ? info.city.cityName : ''} </p>
        </div>
      </div>
      <h4 className="heading">
        <i
          className="fa fa-globe"
          aria-hidden="true"
          style={{ marginLeft: '5px' }}
        ></i>
        حسابات مواقع التواصل
      </h4>
      <div className="social-info">
        <div>
          <h5 className="sub-title">الموقع الشخصي</h5>
          <p className="sub-desc">
            {info
              ? info.personal_web !== 'null'
                ? info.personal_web
                : ''
              : ''}
          </p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">
            {info ? (info.linkedin !== 'null' ? info.linkedin : '') : ''}{' '}
          </p>
        </div>
        <div>
          <h5 className="sub-title">الفيسبوك</h5>
          <p className="sub-desc">
            {info ? (info.facebook !== 'null' ? info.facebook : '') : ''}
          </p>
          <h5 className="sub-title">تويتر</h5>
          <p className="sub-desc">
            {info ? (info.twitter !== 'null' ? info.twitter : '') : ''}{' '}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tab1;
