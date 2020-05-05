import React from 'react';
import { Row, Drawer, Select as RSelect } from 'antd';
import Select from 'react-select';
import ptwayLogo from '../../images/PTway_Logo.svg';
import { withTranslation } from 'react-i18next';
import history from '../../_core/history';
import { Link } from 'react-router-dom';
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
    minWidth: '55px',
    marginRight: '10px',
    border: 'solid 1.5px #18233d',
    borderRadius: '4px',
    color: '#18233d',
    ':focus': {
      borderColor: '#18233d',
      boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    },
    ':hover': {
      borderColor: '#18233d'
      // boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    },
    ':active': {
      borderColor: '#18233d',
      boxShadow: '0 0 0 1px hsl(0,0%,80%)'
    }
  }),
  singleValue: () => ({
    color: '#00263e'
  })
};
class Navbar extends React.Component {
  state = {
    visible: false
  };
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
    const { i18n } = this.props;
    return (
      <React.Fragment>
        <Row className="navbar fixed-navbar">
          <div className="navbar-cont">
            <img
              src={ptwayLogo}
              alt="PTway_Logo"
              onClick={() => history.push('/')}
              style={{ cursor: 'pointer' }}
            />
            <div className="menu">
              <Link to="/about-us"> من نحن</Link>
              <Link to="/user/signup">الأفراد</Link>
              <Link to="/company/signup">الشركات</Link>
            </div>
            <div className="options">
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
              <RSelect
                defaultValue="تسجيل الدخول"
                className="login"
                dropdownClassName="popup-dropdown"
              >
                <RSelect.Option
                  value="companyLogin"
                  onClick={() => history.push('/company/login')}
                >
                  شركة
                </RSelect.Option>
                <RSelect.Option
                  value="userLogin"
                  onClick={() => {
                    history.push('/user/login');
                  }}
                >
                  باحث عن عمل
                </RSelect.Option>
              </RSelect>
            </div>
          </div>
        </Row>
        <Row className="drawer-mobile fixed-navbar">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            type="primary"
            onClick={this.showDrawer}
          ></i>
          <img
            src={ptwayLogo}
            alt="PTway_Logo"
            onClick={() => history.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </Row>
        <Drawer
          title={
            <div className="drawer-title-con">
              <i
                className="fa fa-times drawer-close"
                aria-hidden="true"
                onClick={this.onClose}
              ></i>
              <img
                src={ptwayLogo}
                alt="logo"
                style={{ width: '30%' }}
                onClick={() => history.push('/')}
              />
            </div>
          }
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div className="navbar-mobile">
            <Link to="/about-us"> من نحن</Link>
            <Link to="/user/login">الأفراد</Link>
            <Link to="/company/login">الشركات</Link>
            <a>
              <Link className="employeer-login-btn-mob" to="/user/login">
                {' '}
                تسجيل دخول المستخدم
              </Link>
            </a>
            <a>
              {' '}
              <Link className="company-login-btn-mob" to="/company/login">
                {' '}
                تسجيل دخول الشركات
              </Link>
            </a>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
export default withTranslation()(Navbar);
