import React from 'react';
import { Row } from 'antd';
import './howItWorks.scss';
import certified from '../../images/certified-badge.svg';
import line1 from '../../images/Line1.svg';
import handShake from '../../images/handshake.svg';
import line2 from '../../images/Line2.svg';
import group from '../../images/group.svg';
import laptopChart from '../../images/laptop-chart.svg';
import signing from '../../images/signing.svg';
// import cloud1 from '../../images/Cloud1.png';
const HowItWorks = () => {
  return (
    <Row style={{ marginTop: '37px' }}>
      {/* <img src={cloud1} className="how-works-cloud" alt="cloud1" /> */}
      <div className="it-works-container">
        <h3 className="title"> كيف نعمل</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <img src={signing} alt="certified" />
            <h4 className="step-title">انشيء حساب جديد</h4>
            <img src={line1} alt="line" className="step-line" />
          </div>
          <div className="step-2">
            <img src={line2} alt="line" className="step2-line" />
            <img
              // style={{ paddingTop: '17px' }}
              src={laptopChart}
              alt="certified"
              className="step2-img"
            />
            <h4 className="step-title">أضف إعلان توظيف</h4>
            <span className="step-number">2</span>
          </div>
          <div className="step-3">
            <span className="step-number">3 </span>
            <img className="step3-img" src={group} alt="group" />
            <h4 className="step-title">ستصلك سير الموظفين الذاتية</h4>
            <img src={line1} alt="line" className="step3-line" />
          </div>
          <div className="step">
            <img
              src={line2}
              alt="line"
              className="step4-line"
              style={{ paddingRight: '50px', marginTop: '50px' }}
            />
            <img src={handShake} alt="certified" className="step4-img" />
            <h4 className="step-title">اختر مايناسبك لتبدأ</h4>
            <span className="step-number step4-number">4</span>
          </div>
          <div className="step-5">
            <span className="step-number">5</span>
            <img className="step5-img" src={certified} alt="certified" />
            <h4 className="step-title">انجز عملك بمرونة</h4>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default HowItWorks;
