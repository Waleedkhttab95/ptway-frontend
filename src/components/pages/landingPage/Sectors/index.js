import React from 'react';
import { Row } from 'antd';
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
    </Row>
  );
};

export default withTranslation()(JobsTypes);
