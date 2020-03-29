import React from 'react';
import { Row } from 'antd';
import './style.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { withTranslation } from 'react-i18next';
import c1 from '../../../../images/c1.svg';
import c2 from '../../../../images/c2.svg';
import c3 from '../../../../images/c3.svg';
import c4 from '../../../../images/c4.svg';
import c5 from '../../../../images/c5.svg';
import c6 from '../../../../images/c6.svg';

const Partners = props => {
  const { i18n } = props;
  const galleryItems = [c1, c2, c3, c4, c5, c6].map(i => (
    <img key={i} src={i} alt={i} />
  ));
  const responsive = { 0: { items: 4 }, 1024: { items: 5 } };
  return (
    <Row className="clients-section">
      <h2 className="title">عملائنا</h2>
      <div className="images">
        <AliceCarousel
          items={galleryItems}
          responsive={responsive}
          duration={250}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay={true}
          mouseTrackingEnabled={true}
          playButtonEnabled={false}
        />
      </div>
    </Row>
  );
};

export default withTranslation()(Partners);
