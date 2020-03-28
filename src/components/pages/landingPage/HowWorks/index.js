import React from 'react';
import { Row, Col, Tabs } from 'antd';
import './style.scss';

import { withTranslation } from 'react-i18next';
const { TabPane } = Tabs;
const Contracts = props => {
  const { i18n } = props;
  return (
    <Row className="works-section" style={{ direction: 'initial' }}>
      <h2 className="title">كيف نعمل؟</h2>
      <Tabs defaultActiveKey="1" animated={false}>
        <TabPane tab=" للأفراد" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="للشركات" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Row>
  );
};

export default withTranslation()(Contracts);
