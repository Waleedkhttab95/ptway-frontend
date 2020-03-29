import React from 'react';
import { Row, Col, Tabs } from 'antd';
import './style.scss';
import ads from '../../../../images/ads.svg';
import accept from '../../../../images/accept.svg';
import candidate from '../../../../images/candidate.svg';
import cv from '../../../../images/user1.svg';
import accAd from '../../../../images/user2.svg';
import task from '../../../../images/user3.svg';

import { withTranslation } from 'react-i18next';
const { TabPane } = Tabs;
const Contracts = props => {
  const { i18n } = props;
  return (
    <Row className="works-section" style={{ direction: 'initial' }}>
      <h2 className="title">كيف نعمل؟</h2>
      <Tabs defaultActiveKey="2" style={{ width: '70%' }}>
        <TabPane tab="للأفراد" key="1">
          <Row>
            <Col md={12} sm={24} className="tab-content">
              <h3 className="title">السيرة الذاتية</h3>
              <p className="desc">
                إكمال السيرة الذاتية هي الاساس لترشيحك للعديد من الوظائف
              </p>
            </Col>
            <Col md={12} sm={24}>
              <img src={cv} alt="user1" />
            </Col>
          </Row>
          <Row style={{ background: '#f8fbff' }}>
            <Col md={12} sm={24}>
              <img src={accAd} alt="user2" />
            </Col>
            <Col md={12} sm={24} className="tab-content">
              <h2 className="title">قبول العروض الوظيفية</h2>
              <p className="desc">
                قبول العروض الوظيفية هي الخطوة التالية لكي تبدأ بالعمل
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={24} className="tab-content">
              <h2 className="title">أنجز مهامك</h2>
              <p className="desc">
                بعد أن يتم قبولك بالوظيفة المرشحة إنجاز مهامك هي ماسيثبت مدى
                جدارتك
              </p>
            </Col>
            <Col md={12} sm={24}>
              <img src={task} alt="task" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="للشركات" key="2">
          <Row>
            <Col md={12} sm={24} className="tab-content">
              <h3 className="title">أضف العرض الوظيفي</h3>
              <p className="desc">
                إضافة العرض الوظيفي هي أول خطوة لإيجاد الموظف المناسب لشركتك!
              </p>
            </Col>
            <Col md={12} sm={24}>
              <img src={ads} alt="ads" />
            </Col>
          </Row>
          <Row style={{ background: '#f8fbff' }}>
            <Col md={12} sm={24}>
              <img src={candidate} alt="candidate" />
            </Col>
            <Col md={12} sm={24} className="tab-content">
              <h2 className="title">ظهور المرشحين</h2>
              <p className="desc">
                سيظهر لك العديد من المرشحين المناسبي للعمل لديك.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={24} className="tab-content">
              <h2 className="title">القبول</h2>
              <p className="desc">
                المرحلة الأخيره هي قبول الموظفين لتتمكن من التواصل معهم وحساب
                ساعات العمل.
              </p>
            </Col>
            <Col md={12} sm={24}>
              <img src={accept} alt="accept" />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Row>
  );
};

export default withTranslation()(Contracts);
