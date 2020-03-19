import React from 'react';
import { Row, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/ptwayLogoHeader.png';
import userLogo from '../../images/transparent-colored.png';
import { logout } from '../../store/actions/userAction';
import headerBack from '../../images/header.png';
import './header.scss';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';
import { loadState } from '../../_core/localStorage';
import { connect } from 'react-redux';
import { unreadJobOffers } from '../../store/actions/user/HomeActions';
import history from '../../_core/history';
import AddNewProjectModal from './AddNewProjectModal';
import AddNewAdModal from './AddNewAdModal';
import {
  addNewProject,
  allCotracts
} from '../../store/actions/company/projects';
const options = [
  { value: 'en', label: 'En' },
  { value: 'ar', label: 'Ar' }
];

const colourStyles = {
  input: () => ({
    width: '75px'
  }),
  placeholder: () => ({
    backgroundColor: 'white'
  }),
  control: styles => ({
    ...styles,
    background: 'none',
    minWidth: '75px',
    marginRight: '10px',
    border: 'solid 2px #fff',
    borderRadius: '5px',
    color: '#fff',
    ':focus': {
      borderColor: '#fff',
      boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    },
    ':hover': {
      borderColor: '#fff'
      // boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    },
    ':active': {
      borderColor: '#fff',
      boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    }
  }),
  singleValue: () => ({
    color: 'hsl(0, 0%, 80%)'
  })
};
class Header extends React.Component {
  state = {
    visible: false,
    notification: false,
    postJobPopup: false,
    newAdPopUp: false,
    addProject: false,
    userVisible: false,
    companyVisible: false
  };

  async componentDidMount() {
    const { unreadJobOffers, getContracts } = this.props;
    await unreadJobOffers();
    getContracts();
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
      postJobPopup: false
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
      postJobPopup: true
    });
  };

  newAd = () => {
    const { addProject } = this.props;
    const { projectName, projectDescription } = this.state;
    addProject({
      projectName,
      projectDescription
    });
    this.setState({
      postJobPopup: false,
      addProject: false,
      newAdPopUp: true
    });
  };

  render() {
    const { contracts } = this.props;
    const { i18n } = this.props;
    const { role, loggedIn } = loadState();
    const list = [1, 2, 3, 4];
    const { unreadOffers } = this.props.userS;
    return (
      <React.Fragment>
        {loggedIn && role === 'user' ? (
          <React.Fragment>
            <div className="user-header">
              <div className="user-right-side">
                <img src={userLogo} alt="logo" style={{ width: '140px' }} />
                <Link to="/user/home">سيرتي الذاتية </Link>
                <Link to="/user/jobs" style={{ position: 'relative' }}>
                  <span className="offers-notification">
                    {' '}
                    {unreadOffers.count}
                  </span>
                  <i className="fa fa-bell" aria-hidden="true"></i>
                  فرص العمل
                </Link>
              </div>
              <div className="user-left-side">
                <Button className="user-header-btn">
                  <Link to="/user/account/setting">حسابي</Link>
                </Button>
                <Button
                  className="user-header-btn"
                  onClick={this.notificationMenu}
                >
                  تنبيهات
                </Button>
                <div onBlur={this.close} tabIndex="0">
                  {this.state.notification && (
                    <div className="notifications-dropdown">
                      <h5>اليوم</h5>
                      {list.map(elm => {
                        return (
                          <div className="notification-drop-menu" key={elm}>
                            <i
                              className="fa fa-picture-o"
                              aria-hidden="true"
                              style={{
                                fontSize: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '10px'
                              }}
                            ></i>
                            <span>
                              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة
                              بيتزا هت للبيتزا
                            </span>
                          </div>
                        );
                      })}
                      <u className="more-notification-btn">
                        <Link
                          to="/user/notifications"
                          className="more-notification-btn"
                        >
                          مشاهدة الكل
                        </Link>
                      </u>
                    </div>
                  )}
                </div>
                <Button
                  className="user-header-btn"
                  onClick={async () => {
                    await this.props.logout();
                    history.push('/');
                  }}
                >
                  خروج
                </Button>
              </div>
            </div>
            <div className="menu-mobile">
              <div className="user-drawer-mobile">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  type="primary"
                  onClick={this.showUserDrawer}
                ></i>
                <Drawer
                  title={
                    <div className="drawer-title-con">
                      <i
                        className="fa fa-times drawer-close"
                        aria-hidden="true"
                        onClick={this.onClose}
                      ></i>
                      <img src={userLogo} alt="logo" style={{ width: '40%' }} />
                    </div>
                  }
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.userVisible}
                >
                  <div className="navbar-user-mobile">
                    <Link to="/user/home">سيرتي الذاتية </Link>
                    <Link to="/user/jobs">فرص العمل</Link>

                    <Link to="/user/account/setting">حسابي</Link>
                    <Link to="/user/notifications">تنبيهات</Link>
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
              </div>
              <div>
                <img
                  src={userLogo}
                  alt="logo"
                  style={{ width: '40%', float: 'left' }}
                />
              </div>
            </div>
          </React.Fragment>
        ) : loggedIn && role === 'company' ? (
          <React.Fragment>
            <div className="user-header">
              <div className="user-right-side">
                <img src={userLogo} alt="logo" style={{ width: '140px' }} />
                <Link to="/company/home">الرئيسية </Link>
                <Link to="/company/projects">المشاريع والعروض الوظيفية</Link>
                {/* <Link to="/company/applicants">المتقدمين</Link> */}
              </div>
              <div className="user-left-side">
                <Button
                  className="my-account-btn"
                  onClick={() =>
                    this.setState({ addProject: !this.state.addProject })
                  }
                >
                  <i
                    className="fa fa-plus plus-icon"
                    aria-hidden="true"
                    style={{ marginLeft: '7px' }}
                  ></i>
                  أضف
                </Button>
                {this.state.addProject && (
                  <div className="add-project-popup">
                    <div onClick={this.newAd}>
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
                <Button
                  className="user-header-btn"
                  // onClick={() => this.props.history.push('/user/account/setting')}
                >
                  <Link to="/company/setting">حسابي</Link>
                </Button>
                <Button
                  className="user-header-btn"
                  onClick={this.notificationMenu}
                >
                  تنبيهات
                </Button>
                <div onBlur={this.close} tabIndex="0">
                  {this.state.notification && (
                    <div className="notifications-dropdown">
                      <h5>اليوم</h5>
                      {list.map(elm => {
                        return (
                          <div className="notification-drop-menu" key={elm}>
                            <i
                              className="fa fa-picture-o"
                              aria-hidden="true"
                              style={{
                                fontSize: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '10px'
                              }}
                            ></i>
                            <span>
                              لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة
                              بيتزا هت للبيتزا
                            </span>
                          </div>
                        );
                      })}
                      <u className="more-notification-btn">
                        <Link className="more-notification-btn">
                          مشاهدة الكل
                        </Link>
                      </u>
                    </div>
                  )}
                </div>
                <Button
                  className="user-header-btn"
                  onClick={async () => {
                    await this.props.logout();
                    history.push('/');
                  }}
                >
                  خروج
                </Button>
              </div>
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
                  <Link to="/company/home">الرئيسية </Link>
                  <Link to="/company/projects">المشاريع والعروض الوظيفية</Link>
                  {/* <Link to="/company/applicants">المتقدمين</Link> */}
                </div>
                <div className="user-left-side">
                  <Button
                    className="my-account-btn"
                    onClick={() =>
                      this.setState({ addProject: !this.state.addProject })
                    }
                  >
                    <i
                      className="fa fa-plus plus-icon"
                      aria-hidden="true"
                      style={{ marginLeft: '7px' }}
                    ></i>
                    أضف
                  </Button>
                  {this.state.addProject && (
                    <div className="add-project-popup">
                      <div onClick={this.newAd}>
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
                  <Button
                    className="user-header-btn"
                    // onClick={() => this.props.history.push('/user/account/setting')}
                  >
                    <Link to="/company/setting">حسابي</Link>
                  </Button>
                  <Button
                    className="user-header-btn"
                    onClick={this.notificationMenu}
                  >
                    تنبيهات
                  </Button>
                  <div onBlur={this.close} tabIndex="0">
                    {this.state.notification && (
                      <div className="notifications-dropdown">
                        <h5>اليوم</h5>
                        {list.map(elm => {
                          return (
                            <div className="notification-drop-menu" key={elm}>
                              <i
                                className="fa fa-picture-o"
                                aria-hidden="true"
                                style={{
                                  fontSize: '45px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  paddingLeft: '10px'
                                }}
                              ></i>
                              <span>
                                لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة
                                بيتزا هت للبيتزا
                              </span>
                            </div>
                          );
                        })}
                        <u className="more-notification-btn">
                          <Link className="more-notification-btn">
                            مشاهدة الكل
                          </Link>
                        </u>
                      </div>
                    )}
                  </div>
                  <Button
                    className="user-header-btn"
                    onClick={async () => {
                      await this.props.logout();
                      history.push('/');
                    }}
                  >
                    خروج
                  </Button>
                </div>
              </Drawer>
            </div>
            <div className="menu-mobile">
              <div className="user-drawer-mobile">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  type="primary"
                  onClick={this.showUserDrawer}
                ></i>
                <Drawer
                  title={
                    <div className="drawer-title-con">
                      <i
                        className="fa fa-times drawer-close"
                        aria-hidden="true"
                        onClick={this.onClose}
                      ></i>
                      <img src={userLogo} alt="logo" style={{ width: '40%' }} />
                    </div>
                  }
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.userVisible}
                >
                  <div className="navbar-user-mobile">
                    <Link to="/company/home">الرئيسية </Link>
                    <Link to="/company/projects">
                      المشاريع والعروض الوظيفية
                    </Link>
                    {/* <Link to="/company/applicants">المتقدمين</Link> */}

                    <Link to="/company/setting">حسابي</Link>
                    <Link to="/user/notifications">تنبيهات</Link>
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
              </div>
              <div>
                <img
                  src={userLogo}
                  alt="logo"
                  style={{ width: '40%', float: 'left' }}
                />
              </div>
            </div>
          </React.Fragment>
        ) : (
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
                    <div className="drawer-title-con">
                      <i
                        className="fa fa-times drawer-close"
                        aria-hidden="true"
                        onClick={this.onClose}
                      ></i>
                      <img src={userLogo} alt="logo" style={{ width: '50%' }} />
                    </div>
                  }
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                  <div className="navbar-mobile">
                    <a>{i18n.t('home.howWorks')}</a>
                    <a>{i18n.t('home.comQuestions')}</a>
                    <a>{i18n.t('home.comQuestions')}</a>
                    <a onClick={this.postJob}>{i18n.t('home.postJob')}</a>
                    <a>
                      <Link
                        className="employeer-login-btn-mob"
                        to="/user/login"
                      >
                        {' '}
                        {i18n.t('home.employeeLogin')}
                      </Link>
                    </a>
                    <a>
                      {' '}
                      <Link
                        className="company-login-btn-mob"
                        to="/company/login"
                      >
                        {' '}
                        {i18n.t('home.companyLogin')}
                      </Link>
                    </a>
                  </div>
                </Drawer>
              </div>
              <img src={headerLogo} alt="logo" />
              <div className="navbar">
                <a>{i18n.t('home.howWorks')}</a>
                <a>{i18n.t('home.comQuestions')}</a>
                <a>{i18n.t('home.comQuestions')}</a>
                <a onClick={this.postJob}>{i18n.t('home.postJob')}</a>
              </div>
            </div>
            <div className="left-side">
              <Link className="employeer-login-btn" to="/user/login">
                {i18n.t('home.employeeLogin')}
              </Link>
              <Link className="employeer-login-btn" to="/company/login">
                {i18n.t('home.companyLogin')}
              </Link>
              <Select
                className="basic-single"
                styles={colourStyles}
                classNamePrefix="select"
                isSearchable={false}
                isClearable={false}
                value={options.filter(option => option.value === i18n.language)}
                onChange={() =>
                  i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
                }
                options={options}
              />
            </div>
            <div className="middle-side">
              <h3 className="title"> {i18n.t('home.title')}</h3>
              <p className="description">{i18n.t('home.description')}</p>
              <button className="start-now-btn">
                <Link to="/user/signup" className="start-now-btn">
                  {i18n.t('home.startBtn')}
                </Link>
              </button>
            </div>
          </Row>
        )}
        <AddNewProjectModal
          postJobPopup={this.state.postJobPopup}
          newAd={this.newAd}
          onChange={e => {
            this.setState({ [e.target.name]: e.target.value });
          }}
          closable={this.onClose}
        />
        <AddNewAdModal
          newAdPopUp={this.state.newAdPopUp}
          contractsTypes={contracts}
          history={history}
        />
      </React.Fragment>
    );
  }
}

const mapPropsToState = ({ user, userS, companyProjects }) => {
  return {
    user,
    userS,
    contracts: companyProjects
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
