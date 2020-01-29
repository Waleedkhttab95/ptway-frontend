import React from 'react';
import { Row, Drawer, Button, Modal, Input, Col } from 'antd';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/ptwayLogoHeader.png';
import userLogo from '../../images/transparent-colored.png';
import { logout } from '../../store/actions/userAction';
import headerBack from '../../images/header.png';
import './header.scss';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';
import { loadState } from '../../_core/localStorage';
import shContractIc from '../../images/short.svg';
import lngContract from '../../images/long.svg';
import cuntContract from '../../images/continue.svg';
import { connect } from 'react-redux';
import history from '../../_core/history';

const options = [
  { value: 'en', label: 'En' },
  { value: 'ar', label: 'Ar' }
];
const { TextArea } = Input;
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
      companyVisible: false
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
    this.setState({
      postJobPopup: false,
      addProject: false,
      newAdPopUp: true
    });
  };

  render() {
    const { i18n } = this.props;
    const { role, loggedIn } = loadState();
    const list = [1, 2, 3, 4];
    return (
      <React.Fragment>
        {loggedIn && role === 'user' ? (
          <div className="user-header">
            <div className="user-right-side">
              <img src={userLogo} alt="logo" style={{ width: '140px' }} />
              <Link to="/user/home">سيرتي الذاتية </Link>
              <Link to="/user/jobs">فرص العمل</Link>
            </div>
            <div className="user-drawer-mobile">
              <i
                className="fa fa-bars"
                aria-hidden="true"
                type="primary"
                onClick={this.showUserDrawer}
              ></i>
              <Drawer
                title={
                  <img src={userLogo} alt="logo" style={{ width: '90%' }} />
                }
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.userVisible}
              >
                <div className="navbar-user-mobile">
                  <div>
                    {/* <img src={userLogo} alt="logo" style={{ width: '140px' }} /> */}
                    <Link to="/user/home">سيرتي الذاتية </Link>
                    <Link to="/user/jobs">فرص العمل</Link>
                  </div>
                  <div>
                    <div

                    // onClick={() => this.props.history.push('/user/account/setting')}
                    >
                      <Link to="/user/account/setting">حسابي</Link>
                    </div>
                    <div onClick={this.notificationMenu}>تنبيهات</div>
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
                    <div
                      onClick={async () => {
                        await this.props.logout();
                        history.push('/');
                      }}
                    >
                      خروج
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>

            <div className="user-left-side">
              <Button
                className="user-header-btn"
                // onClick={() => this.props.history.push('/user/account/setting')}
              >
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
                            لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا
                            هت للبيتزا
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
        ) : loggedIn && role === 'company' ? (
          <div className="user-header">
            <div className="user-right-side">
              <img src={userLogo} alt="logo" style={{ width: '140px' }} />
              <Link to="/company/home">الرئيسية </Link>
              <Link to="/company/projects">المشاريع والعروض الوظيفية</Link>
              <Link to="/company/applicants">المتقدمين</Link>
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
                            لقد تم قبول طلب تقدمك لعرض وظيفة محاسب في شركة بيتزا
                            هت للبيتزا
                          </span>
                        </div>
                      );
                    })}
                    <u className="more-notification-btn">
                      <Link className="more-notification-btn">مشاهدة الكل</Link>
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
                <Link to="/company/applicants">المتقدمين</Link>
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
                    <img src={headerLogo} alt="logo" style={{ width: '90%' }} />
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
                    <a>{i18n.t('home.contact')}</a>
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
        <Modal
          visible={this.state.postJobPopup}
          closable={false}
          footer={false}
        >
          <div className="new-project">
            <h2 className="p-heading">انشئ مشروع جديد</h2>
            <p className="p-description">
              أولاً قم بانشاء مشروع جديد الذي سيندرج تحته عدة إعلانات وظيفية
              مختلفة
            </p>
            <div className="new-project-form">
              <label>اسم المشروع</label>
              <Input />
              <label>وصف المشروع</label>
              <TextArea row={4} />
              <button className="new-project-btn" onClick={this.newAd}>
                انشاء مشروع جديد
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          visible={this.state.newAdPopUp}
          closable={false}
          footer={false}
          className="ad-modal"
        >
          <div className="new-ad">
            <h2 className="p-heading">إضافة إعلان جديد</h2>
            <p className="p-description">
              ثانياً قم باختيار نوع عقد العمل للإعلان الوظيفي الجديد الذي سوف
              تضيفه
            </p>
            <div className="ad-contract">
              <Col md={8} className="cont-type">
                <img src={shContractIc} alt="shContract" />
                <h4 className="cnt-sub-title">عقود قصيرة</h4>
                <p className="cnt-des"> مهمات لاتزيد عن 30 يوم </p>
              </Col>
              <Col md={8} className="cont-type">
                <img src={lngContract} alt="shContract" />
                <h4 className="cnt-sub-title">عقود طويلة</h4>
                <p className="cnt-des"> مهمات لا تزيد عن 6 أشهر </p>
              </Col>
              <Col md={8} className="cont-type">
                <img src={cuntContract} alt="shContract" />
                <h4 className="cnt-sub-title">عقود مستمرة</h4>
                <p className="cnt-des"> مهمات بعقود سنوية وتجدد </p>
              </Col>
            </div>
          </div>
          <button className="ad-next-btn">
            <Link to="/company/new/ad" style={{ color: '#fff' }}>
              التالي
            </Link>
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapPropsToState = ({ user }) => {
  return {
    user
  };
};
const mapPropsToDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const HeaderWrapper = connect(mapPropsToState, mapPropsToDispatch)(Header);

export default withTranslation()(HeaderWrapper);
