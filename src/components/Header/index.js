import React from 'react';
import { Row, Drawer } from 'antd';
import headerLogo from '../../images/ptwayLogoHeader.png';
import headerBack from '../../images/header.png';
import './header.scss';

class Header extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <Row className="home-page-header">
        <img src={headerBack} alt="header" className="img" />
        <div className="right-side">
          <div className="drawer-mobile">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              type="primary"
              onClick={this.showDrawer}
            ></i>
            <Drawer
              title={
                <img src={headerLogo} alt="logo" style={{ width: '90%' }} />
              }
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <div className="navbar-mobile">
                <a>كيف نعمل</a>
                <a>الأسئلة الأكثر شيوعاً</a>
                <a>الأسئلة الشائعة</a>
                <a>تواصل معنا</a>
              </div>
            </Drawer>
          </div>
          <img src={headerLogo} alt="logo" />
          <div className="navbar">
            <a>كيف نعمل</a>
            <a>الأسئلة الأكثر شيوعاً</a>
            <a>الأسئلة الشائعة</a>
            <a>تواصل معنا</a>
          </div>
        </div>
        <div className="left-side">
          <button className="employeer-login-btn">تسجيل دخول موظف</button>
          <button className="company-login-btn"> تسجيل دخول شركة</button>
        </div>
        <div className="middle-side">
          <h3 className="title">مازلت تعمل بالطريقة الاعتيادية؟</h3>
          <p className="description">
            كل ما عليك فعله هو التسجيل في المنصة لكي تجد العمل الذي يناسبك أو
            لكي تجد الموظف الذي يناسبك بكل بساطة
          </p>
          <button className="start-now-btn">ابدأ معنا الآن</button>
        </div>
      </Row>
    );
  }
}

export default Header;
