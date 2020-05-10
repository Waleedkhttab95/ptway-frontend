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
import settings from '../../../services/company/setting';
import Footer from '../../Footer';

const { changePassword } = settings;
const { TabPane } = Tabs;

class CompanySetting extends React.Component {
  state = {
    error: false
  };
  async componentDidMount() {
    const { getCompanyInfo } = this.props;
    getCompanyInfo();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  ChangePassword = async () => {
    const { newPassword, rePassword, prevPassword } = this.state;
    if (newPassword !== rePassword) {
      this.setState({
        error: true
      });
    } else {
      await changePassword({
        prevPassword,
        newPassword
      });
      alert('تم تغير كلمة المرور');
      window.location.reload();
    }
  };
  render() {
    const { company } = this.props;
    console.log('state', this.state);

    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="company-setting">
            <Col md={6} sm={24} xs={24}>
              <CompanyInfo {...company} />
              <button
                className="update-profile-btn"
                onClick={() =>
                  this.props.history.push('/company/profile/update')
                }
              >
                تعديل المعلومات
              </button>
            </Col>
            <Col md={18} sm={24} xs={24} className="right-side">
              <Tabs type="card" className="settings-tab">
                <TabPane tab="حساب الشركة" key="1">
                  <br />
                  <Tab1 {...company} />
                </TabPane>
                <TabPane tab="الحسابات الفرعية" key="2">
                  <Tab2 />
                </TabPane>
                <TabPane tab="الإعدادات العامة" key="3">
                  <Tab3
                    handleChange={this.handleChange}
                    ChangePassword={this.ChangePassword}
                    {...this.state}
                  />
                </TabPane>
              </Tabs>
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
