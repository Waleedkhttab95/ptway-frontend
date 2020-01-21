import React from 'react';
import './style.scss';

const Tab1 = () => {
  return (
    <React.Fragment>
      <h4 className="heading" style={{ paddingTop: '50px' }}>
        <i
          className="fa fa-envelope-o"
          aria-hidden="true"
          style={{ marginLeft: '5px' }}
        ></i>
        معلومات التواصل
      </h4>
      <div className="contact-info">
        <div>
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
        </div>
        <div>
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
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
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
        </div>
        <div>
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
        </div>
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
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
        </div>
        <div>
          <h5 className="sub-title">البريد الالكتروني</h5>
          <p className="sub-desc">info@pizzahutforpizza.com</p>
          <h5 className="sub-title">لينكيد ان</h5>
          <p className="sub-desc">www.linkedin.com/pizzahutforpizza</p>
        </div>
      </div>
      <h4 className="heading">معلومات إضافية</h4>
      <div className="extra-info">
        <h3 className="sub-title">نبذة مفصلة عن الشركة</h3>
        <p className="sub-desc">
          تأسست الشركة عام 1965 وكانت من أولى الشركات التي تقدم بيتزا في المملكة
          العربية السعودية وبعد ذلك توسعت الشركة لتفتتح عدة أفرع في جميع مدن
          المملكة لتصل الآن لتصبح أكبر شركة منتجة للبيتزا في جميع أنحاء المملكة
          العربية السعودية وتنافس أكبر الشركات العالمية
        </p>
        <h3 className="sub-title">نبذة مفصلة عن الشركة</h3>
        <p className="sub-desc">
          تأسست الشركة عام 1965 وكانت من أولى الشركات التي تقدم بيتزا في المملكة
          العربية السعودية وبعد ذلك توسعت الشركة لتفتتح عدة أفرع في جميع مدن
          المملكة لتصل الآن لتصبح أكبر شركة منتجة للبيتزا في جميع أنحاء المملكة
          العربية السعودية وتنافس أكبر الشركات العالمية
        </p>
      </div>
    </React.Fragment>
  );
};

export default Tab1;
