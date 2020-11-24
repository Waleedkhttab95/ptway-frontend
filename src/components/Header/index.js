import React from 'react';
import { Row, Drawer, Button, Col, Badge, Modal, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import userLogo from '../../images/transparent-colored.png';
import header from '../../images/Page1_header.svg';
import { logout } from '../../store/actions/userAction';
import './style.scss';
import { withTranslation } from 'react-i18next';
import { loadState } from '../../_core/localStorage';
import { connect } from 'react-redux';
import { unreadJobOffers } from '../../store/actions/user/HomeActions';
import history from '../../_core/history';
import AddNewProjectModal from './AddNewProjectModal';
import AddNewAdModal from './AddNewAdModal';
import Navbar from './Navbar';
import LoginNavbar from './LoginNavbar';
import ptwayLogo from '../../images/PTway_Logo.svg';

import {
  addNewProject,
  allCotracts
} from '../../store/actions/company/projects';
import { UserMenuSetting, CompanyMenuSetting } from './setting_menu';

class Header extends React.Component {
  state = {
    visible: false,
    notification: false,
    postJobPopup: false,
    newAdPopUp: false,
    addProject: false,
    userVisible: false,
    companyVisible: false,
    nonProjectsExistModal: false
  };

  async componentDidMount() {
    const { unreadJobOffers, getContracts } = this.props;
    if (loadState().role === 'user') {
      unreadJobOffers();
    }

    if (loadState().role === 'company') {
      getContracts();
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  showCompanyDrawer = () => {
    this.setState({
      companyVisible: true
    });
  };
  showUserDrawer = () => {
    this.setState({
      userVisible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
      userVisible: false,
      companyVisible: false,
      postJobPopup: false,
      newAdPopUp: false,
      nonProjectsExistModal: false
    });
  };

  notificationMenu = () => {
    this.setState({
      notification: !this.state.notification
    });
  };

  close = () => {
    this.setState({ notification: false });
  };

  postJob = () => {
    this.setState({
      addProject: false,
      nonProjectsExistModal: false,
      postJobPopup: true
    });
  };

  NonExistProjectNewAd = () => {
    const { addProject, company } = this.props;
    const { projectName, projectDescription } = this.state;

    addProject({
      projectName,
      projectDescription
    });
    if (company.companyInfo && company.companyStatistic.projects !== 0) {
      this.setState({
        postJobPopup: false,
        addProject: false,
        newAdPopUp: true
      });
    } else {
      this.setState({
        addProject: false,
        postJobPopup: false,
        nonProjectsExistModal: true
      });
    }
  };

  newAd = () => {
    const { addProject } = this.props;
    const { projectName, projectDescription } = this.state;
    if (!projectName || !projectDescription) {
      this.setState({
        error: true
      });
    } else {
      addProject({
        projectName,
        projectDescription
      });
      this.setState({
        postJobPopup: false,
        addProject: false,
        newAdPopUp: true
      });
    }
  };

  render() {
    const { contracts } = this.props;
    const { nonProjectsExistModal, error } = this.state;
    // const { i18n } = this.props;
    const { role, loggedIn } = loadState();
    const { unreadOffers } = this.props.userS;
    return (
      <React.Fragment>
        {loggedIn && role === 'user' ? (
          <React.Fragment>
            <Row className="header">
              <div className="header-container">
                <div>
                  <img
                    src={userLogo}
                    alt="logo"
                    style={{ width: '140px', cursor: 'pointer' }}
                    onClick={() => history.push('/user/home')}
                  />
                </div>
                <div className="menu">
                  <Link
                    to="/user/home"
                    className={
                      window.location.href.includes('/user/home')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    سيرتي الذاتية
                  </Link>

                  <Link
                    to="/user/jobs"
                    className={
                      window.location.href.includes('/user/jobs')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    <Badge
                      count={unreadOffers.count !== 0 ? unreadOffers.count : ''}
                      showZero
                      style={{
                        marginBottom: '20px',
                        direction: 'ltr',
                        marginLeft: '-7px'
                      }}
                    />
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    فرص العمل
                  </Link>

                  <Link
                    to="/user/interviews"
                    className={
                      window.location.href.includes('/user/interviews')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    المقابلات
                  </Link>

                  <div
                    className={
                      window.location.href.includes('/user/account/setting')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    <Dropdown
                      overlay={<UserMenuSetting logout={this.props.logout} />}
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}
                      >
                        حسابي <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Row>

            <Row className="drawer-mobile">
              <i
                className="fa fa-bars"
                aria-hidden="true"
                type="primary"
                onClick={this.showUserDrawer}
                style={{ color: '#059ad0' }}
              ></i>
              <img
                src={ptwayLogo}
                alt="logo"
                style={{ width: '30%' }}
                onClick={() => history.push('/')}
              />
              <Drawer
                title={
                  <div className="drawer-title-con">
                    <i
                      className="fa fa-times drawer-close"
                      aria-hidden="true"
                      onClick={this.onClose}
                    ></i>
                    <img src={userLogo} alt="logo" style={{ width: '45%' }} />
                  </div>
                }
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.userVisible}
              >
                <div className="navbar-user-mobile">
                  <Link to="/user/home">سيرتي الذاتية </Link>
                  <Link to="/user/jobs" style={{ position: 'relative' }}>
                    <Badge
                      count={unreadOffers.count}
                      showZero
                      style={{ marginBottom: '10px', direction: 'ltr' }}
                    />
                    فرص العمل
                  </Link>

                  <Link to="/user/account/setting">حسابي</Link>
                  {/* <Link to="/user/notifications">تنبيهات</Link> */}
                  <div onBlur={this.close} tabIndex="0"></div>
                  <a
                    onClick={async () => {
                      await this.props.logout();
                      history.push('/');
                    }}
                  >
                    تسجيل الخروج
                  </a>
                </div>
              </Drawer>
            </Row>
          </React.Fragment>
        ) : loggedIn && role === 'company' ? (
          <React.Fragment>
            <Row className="header">
              <div className="header-container">
                <div className="h-company-left-section">
                  <img
                    src={userLogo}
                    alt="logo"
                    style={{ width: '140px', cursor: 'pointer' }}
                    onClick={() => history.push('/company/home')}
                  />
                  <Button
                    className="my-account-btn"
                    onClick={() =>
                      this.setState({ addProject: !this.state.addProject })
                    }
                  >
                    <i className="fa fa-plus plus-icon" aria-hidden="true"></i>
                    أضف وظيفة
                  </Button>
                  {this.state.addProject && (
                    <div className="add-project-popup">
                      <div onClick={this.NonExistProjectNewAd}>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        إضافة إعلان بمشروع سابق
                      </div>
                      <div onClick={this.postJob}>
                        <i
                          className="fa fa-plus-circle"
                          aria-hidden="true"
                          style={{ marginLeft: '7px' }}
                        ></i>
                        إضافة إعلان بمشروع جديد
                      </div>
                    </div>
                  )}
                </div>
                <div className="menu">
                  <Link
                    to="/company/home"
                    className={
                      window.location.href.includes('/company/home')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    الرئيسية
                  </Link>

                  <Link
                    to="/company/projects"
                    className={
                      window.location.href.includes('/company/projects')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    المشاريع والعروض الوظيفية
                  </Link>

                  <div
                    className={
                      window.location.href.includes('/company/setting')
                        ? 'navbar-elm-active'
                        : ''
                    }
                  >
                    <Dropdown
                      overlay={
                        <CompanyMenuSetting logout={this.props.logout} />
                      }
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}
                      >
                        حسابي <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Row>
            <Row className="drawer-mobile">
              <i
                className="fa fa-bars"
                aria-hidden="true"
                type="primary"
                onClick={this.showUserDrawer}
                style={{ color: '#059ad0' }}
              ></i>
              <img
                src={ptwayLogo}
                alt="logo"
                style={{ width: '30%' }}
                onClick={() => history.push('/')}
              />
              <Drawer
                title={
                  <div className="drawer-title-con">
                    <i
                      className="fa fa-times drawer-close"
                      aria-hidden="true"
                      onClick={this.onClose}
                    ></i>
                    <img src={userLogo} alt="logo" style={{ width: '45%' }} />
                  </div>
                }
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.userVisible}
              >
                <div className="navbar-user-mobile">
                  <Link to="/company/home">الرئيسية </Link>
                  <Link to="/company/projects">المشاريع والعروض الوظيفية</Link>
                  <Link to="/company/setting">حسابي</Link>
                  {/* <Link to="/user/notifications">تنبيهات</Link> */}
                  <div onBlur={this.close} tabIndex="0"></div>
                  <a
                    onClick={async () => {
                      await this.props.logout();
                      history.push('/');
                    }}
                  >
                    تسجيل الخروج
                  </a>
                </div>
              </Drawer>
            </Row>
          </React.Fragment>
        ) : window.location.href.includes('/signup') ||
          window.location.href.includes('/login') ? (
          <LoginNavbar />
        ) : (
          <React.Fragment>
            <Navbar />
            <div className="home-header">
              <Col md={12} sm={24}>
                <img src={header} alt="Page1_header" />
              </Col>
              <Col md={12} sm={24} className="brief">
                <h2 className="brief-title">
                  سر النجاح والتقدم في العمل، <br /> هو أن تبدأ العمل!
                </h2>
                <p className="brief-desc">
                  نحن أول منصة للعمل الجزئي في السعودية، <br />
                  نلبي جميع احتياجات الشركات والباحثين عن فرص عمل جزئية.
                </p>
                <button
                  className="log-btn"
                  onClick={() => history.push('/company/signup')}
                >
                  سجل شركتك الأن
                </button>
                <br />
                <br />
                <button
                  className="log-btn"
                  onClick={() => history.push('/user/signup')}
                >
                  سجل كباحث عن عمل
                </button>
              </Col>
            </div>
          </React.Fragment>
        )}
        <AddNewProjectModal
          postJobPopup={this.state.postJobPopup}
          newAd={this.newAd}
          onChange={e => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          closable={this.onClose}
          error={error}
        />
        <Modal
          visible={nonProjectsExistModal}
          closable={true}
          footer={false}
          className="ad-modal"
          onCancel={this.onClose}
        >
          <div className="non-exist-project-modal">
            <h3> يجب عليك اضافة مشروع أولا</h3>
            <h3>هل ترغب في اضافة مشروع جديد؟</h3>
            <button onClick={this.postJob}>اضافة مشروع جديد</button>
          </div>
        </Modal>

        <AddNewAdModal
          newAdPopUp={this.state.newAdPopUp}
          contractsTypes={contracts}
          history={history}
          closable={this.onClose}
        />
      </React.Fragment>
    );
  }
}

const mapPropsToState = ({ user, userS, companyProjects, companySection }) => {
  return {
    user,
    userS,
    contracts: companyProjects,
    company: companySection
  };
};
const mapPropsToDispatch = dispatch => {
  return {
    logout: () => dispatch(logout()),
    unreadJobOffers: () => dispatch(unreadJobOffers()),
    addProject: params => dispatch(addNewProject(params)),
    getContracts: () => dispatch(allCotracts())
  };
};

const HeaderWrapper = connect(mapPropsToState, mapPropsToDispatch)(Header);

export default withTranslation()(HeaderWrapper);
