import React from 'react';
import { Row, Col } from 'antd';
import './style.scss';
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { withTranslation } from 'react-i18next';
import c1 from '../../../../images/clients/pl2.svg';
import c2 from '../../../../images/clients/pl4.svg';
import c3 from '../../../../images/clients/pl6.svg';
import c4 from '../../../../images/clients/pl8.svg';
import c5 from '../../../../images/clients/pl10.svg';
import c6 from '../../../../images/clients/pl12.svg';
import c7 from '../../../../images/clients/pl14.svg';
import c8 from '../../../../images/clients/pl16.svg';
import c9 from '../../../../images/clients/pl18.svg';
import c10 from '../../../../images/clients/pl20.svg';
import c11 from '../../../../images/clients/pl22.svg';
import c12 from '../../../../images/clients/pl24.svg';
import c13 from '../../../../images/clients/pl26.svg';
import c14 from '../../../../images/clients/pl28.svg';
import c15 from '../../../../images/clients/pl30.svg';
import c16 from '../../../../images/clients/pl32.svg';
import c17 from '../../../../images/clients/pl34.svg';
import c18 from '../../../../images/clients/pl36.svg';
import c19 from '../../../../images/clients/pl38.svg';
import c20 from '../../../../images/clients/pl40.svg';
import c21 from '../../../../images/clients/pl42.svg';
import c22 from '../../../../images/clients/pl43.svg';
import c23 from '../../../../images/clients/pl44.svg';
import cmob from '../../../../images/clients/mobile/cmob.svg';
import cmob1 from '../../../../images/clients/mobile/cmob1.svg';
import cmob2 from '../../../../images/clients/mobile/cmob2.svg';
import cmob3 from '../../../../images/clients/mobile/cmob3.svg';
import cmob4 from '../../../../images/clients/mobile/cmob4.svg';
import cmob5 from '../../../../images/clients/mobile/cmob5.svg';
import cmob6 from '../../../../images/clients/mobile/cmob6.svg';
import cmob7 from '../../../../images/clients/mobile/cmob7.svg';
import cmob8 from '../../../../images/clients/mobile/cmob8.svg';
import cmob9 from '../../../../images/clients/mobile/cmob9.svg';
import cmob10 from '../../../../images/clients/mobile/cmob10.svg';
import cmob11 from '../../../../images/clients/mobile/cmob11.svg';
import cmob12 from '../../../../images/clients/mobile/cmob12.svg';
import cmob13 from '../../../../images/clients/mobile/cmob13.svg';
import cmob14 from '../../../../images/clients/mobile/cmob14.svg';
import cmob15 from '../../../../images/clients/mobile/cmob15.svg';
import cmob16 from '../../../../images/clients/mobile/cmob16.svg';
import cmob17 from '../../../../images/clients/mobile/cmob17.svg';
import cmob18 from '../../../../images/clients/mobile/cmob18.svg';
import cmob19 from '../../../../images/clients/mobile/cmob19.svg';
import cmob20 from '../../../../images/clients/mobile/cmob20.svg';
import cmob21 from '../../../../images/clients/mobile/cmob21.svg';
import cmob22 from '../../../../images/clients/mobile/cmob22.svg';

const Clients = props => {
  // const { i18n } = props;
  const images = [
    c3,
    c2,
    c7,
    c1,
    c5,
    c4,
    c6,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15
  ];
  const galerry2 = [c16, c17, c18, c19, c20, c21, c22, c23];
  const mobileImages = [
    cmob,
    cmob1,
    cmob6,
    cmob2,
    cmob3,
    cmob4,
    cmob5,
    cmob7,
    cmob8,
    cmob9,
    cmob10,
    cmob11,
    cmob12,
    cmob13,
    cmob14,
    cmob15
  ];
  const mobileImages2 = [
    cmob16,
    cmob17,
    cmob18,
    cmob19,
    cmob20,
    cmob21,
    cmob22
  ];

  return (
    <Row className="clients-section">
      <h2 className="title">وثقوا بنا</h2>
      <div className="clients-logos-web">
        <div className="images">
          {images.map(elm => (
            <img src={elm} alt="elm" key={elm} />
          ))}
        </div>
        <div className="images-second-row">
          {galerry2.map(elm => (
            <img src={elm} alt="elm" key={elm} />
          ))}
        </div>
      </div>
      <div className="clients-logos-mobile">
        <div className="images">
          {mobileImages.map((elm, index) =>
            index <= 7 ? <img src={elm} alt="elm" key={elm} /> : ''
          )}
        </div>
        <div className="images">
          {mobileImages.map((elm, index) =>
            index > 7 ? <img src={elm} alt="elm" key={elm} /> : ''
          )}
          {mobileImages2.map((elm, index) =>
            index <= 1 ? <img src={elm} alt="elm" key={elm} /> : ''
          )}
        </div>
        <div className="images-second-row">
          {mobileImages2.map((elm, index) =>
            index > 1 ? <img src={elm} alt="elm" key={elm} /> : ''
          )}
        </div>
      </div>
    </Row>
  );
};

export default withTranslation()(Clients);
