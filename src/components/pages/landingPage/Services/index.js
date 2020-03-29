import React from 'react';
import { Row, Col, Tabs } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';
const { TabPane } = Tabs;

const HowItWorks = () => {
  // const { i18n } = props;
  return (
    <Row className="services">
      <Col md={12} sm={24} style={{ direction: 'initial' }}>
        <Tabs
          defaultActiveKey="4"
          // animated={false}
          className="works-tab"
        >
          <TabPane tab=" تطوعي" key="1">
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج.
          </TabPane>
          <TabPane tab=" عقود" key="2">
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج.
          </TabPane>
          <TabPane tab="جزئي" key="3">
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج.
          </TabPane>
          <TabPane tab="يومي" key="4">
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج.
          </TabPane>
        </Tabs>
      </Col>
      <Col md={12} sm={24} className="services-tabs">
        <h2 className="title">خدماتنا</h2>
        <p className="desc">
          ضغط الوقت يمكن في الواقع أن يكون مفيداً، فهو يساعد على تركيز الذهن
          وعدم التفكير في التسويف، وخفض عدد البدائل التي يمكن التفكير بها
        </p>
      </Col>
    </Row>
  );
};

export default withTranslation()(HowItWorks);
