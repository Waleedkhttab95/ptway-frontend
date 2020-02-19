import React from 'react';
import './style.scss';
import Header from '../../Header';
import { Col, Tabs } from 'antd';
import CompanyInfo from '../CompanyInfo';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { connect } from 'react-redux';

import { companyInfo } from '../../../store/actions/company/home';
import Footer from '../../Footer';

const { TabPane } = Tabs;

class CompanySetting extends React.Component {
  componentDidMount() {
    const { getCompanyInfo } = this.props;
    getCompanyInfo();
  }

  render() {
    const { company } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="company-setting">
            <Col md={6}>
              <CompanyInfo {...company} />
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
                  <Tab3 />
                </TabPane>
              </Tabs>
              ,
            </Col>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ companySection }) => {
  return {
    company: companySection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanyInfo: () => dispatch(companyInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySetting);
