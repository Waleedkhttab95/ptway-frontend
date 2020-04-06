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
      <Tabs defaultActiveKey="2" className="w-tabs">
        <TabPane tab="للأفراد" key="1">
          <Row className="tab-row">
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h3 className="title">السيرة الذاتية</h3>
              <p className="desc">
                إكمال السيرة الذاتية هي الاساس لترشيحك <br />
                للعديد من الوظائف
              </p>
            </Col>
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={cv} alt="user1" className="tab-img" />
            </Col>
          </Row>
          <Row style={{ background: '#f8fbff' }} className="tab-row">
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={accAd} alt="user2" className="tab-img" />
            </Col>
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h2 className="title">قبول العروض الوظيفية</h2>
              <p className="desc">
                قبول العروض الوظيفية هي الخطوة التالية
                <br /> لكي تبدأ بالعمل
              </p>
            </Col>
          </Row>
          <Row className="tab-row">
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h2 className="title">أنجز مهامك</h2>
              <p className="desc">
                بعد أن يتم قبولك بالوظيفة المرشحة <br />
                إنجاز مهامك هي ماسيثبت مدى جدارتك
              </p>
            </Col>
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={task} alt="task" className="tab-img" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="للشركات" key="2">
          <Row className="tab-row">
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h3 className="title">أضف العرض الوظيفي</h3>
              <p className="desc">
                إضافة العرض الوظيفي هي أول خطوة لإيجاد <br />
                !الموظف المناسب لشركتك
              </p>
            </Col>
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={ads} alt="ads" className="tab-img" />
            </Col>
          </Row>
          <Row style={{ background: '#f8fbff' }} className="tab-row">
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={candidate} alt="candidate" className="tab-img" />
            </Col>
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h2 className="title">ظهور المرشحين</h2>
              <p className="desc">
                .سيظهر لك العديد من المرشحين المناسبي للعمل لديك
              </p>
            </Col>
          </Row>
          <Row className="tab-row">
            <Col md={12} sm={12} xs={12} className="tab-content">
              <h2 className="title">القبول</h2>
              <p className="desc">
                المرحلة الأخيره هي قبول الموظفين لتتمكن <br /> من التواصل معهم
                وحساب ساعات العمل
              </p>
            </Col>
            <Col
              md={12}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={accept} alt="accept" className="tab-img" />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Row>
  );
};

export default withTranslation()(Contracts);
