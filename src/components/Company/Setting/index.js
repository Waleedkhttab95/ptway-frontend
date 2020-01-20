import React from 'react';
import './style.scss';
import Header from '../../Header';
import { Col, Tabs } from 'antd';
import CompanyInfo from '../CompanyInfo';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Footer from '../../Footer';

const { TabPane } = Tabs;

const CompanySetting = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="company-container">
        <div className="company-setting">
          <Col md={6}>
            <CompanyInfo />
          </Col>
          <Col md={18} className="right-side">
            <Tabs type="card">
              <TabPane tab="بروفايل الشركة" key="1">
                <Tab1 />
              </TabPane>
              <TabPane tab="الحسابات الفرعية" key="2">
                <Tab2 />
              </TabPane>
              <TabPane tab="الإعدادات العامة" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
            ,
          </Col>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default CompanySetting;
