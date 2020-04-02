import React from 'react';
import 'antd/dist/antd.css';
import { Row } from 'antd';
import './style.scss';
import Carousel from './Carousel';
import { withTranslation } from 'react-i18next';

const Sectors = props => {
  const { i18n } = props;
  return (
    <React.Fragment>
      <Row className="sectors">
        <h2 className="title">القطاعات</h2>
        <p className="desc">
          نغطي معظم مدن المملكة، ونتوسع يومياً. نعمل في قطاعات ومجالات مختلفة في
          السوق السعودي، كالضيافة، قطاع التجزئة، القطاع الصحي والمزيد...
        </p>
      </Row>
      <Carousel />
    </React.Fragment>
  );
};

export default withTranslation()(Sectors);
