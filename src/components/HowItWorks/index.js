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
const HowItWorks = () => {
  return (
    <Row>
      <div className="it-works-container">
        <h3 className="title"> كيف نعمل</h3>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <img src={signing} alt="certified" />
          </div>
          <div className="step">
            <img src={line2} alt="line" />
            <img
              // style={{ paddingTop: '17px' }}
              src={laptopChart}
              alt="certified"
              style={{
                paddingTop: '17px',
                // position: 'absolute',
                left: '100px',
                top: '200px'
              }}
            />
            <h4 className="step-title">اختر مايناسبك لتبدأ</h4>
            <span className="step-number">2</span>
          </div>
          <div className="step">
            <span className="step-number">3 </span>
            <img style={{ paddingTop: '17px' }} src={group} alt="group" />
            <h4 className="step-title">ستصلك سير الموظفين الذاتية</h4>
            <img
              src={line1}
              alt="line"
              style={{
                // position: 'absolute',
                right: '50px',
                top: '185px'
              }}
            />
          </div>
          <div className="step">
            <img src={line2} alt="line" />
            <img
              // style={{ paddingTop: '17px' }}
              src={handShake}
              alt="certified"
              style={{
                paddingTop: '17px',
                // position: 'absolute',
                left: '100px',
                top: '200px',
                width: '146px',
                height: '89px'
              }}
            />
            <h4 className="step-title">اختر مايناسبك لتبدأ</h4>
            <span className="step-number">4</span>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <img
              style={{ paddingTop: '17px' }}
              src={certified}
              alt="certified"
            />
            <h4 className="step-title">انجز عملك بمرونة</h4>
            <img
              src={line1}
              alt="line"
              style={{
                // position: 'absolute',
                right: '50px',
                top: '185px',
                width: '146px',
                height: '89px'
              }}
            />
          </div>
        </div>
      </div>
    </Row>
  );
};

export default HowItWorks;
