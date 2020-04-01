import React from 'react';
import 'antd/dist/antd.css';
import { Row, Carousel } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';

const JobsTypes = props => {
  const { i18n } = props;
  return (
    <Row className="sectors">
      <h2 className="title">القطاعات</h2>
      <p className="desc">
        نغطي معظم مدن المملكة، ونتوسع يومياً. نعمل في قطاعات ومجالات مختلفة في
        السوق السعودي، كالضيافة، قطاع التجزئة، القطاع الصحي والمزيد...
      </p>
      <Row>
        {/* <Carousel autoplay={false} className="sector-carousel">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel> */}
      </Row>
    </Row>
  );
};

export default withTranslation()(JobsTypes);
