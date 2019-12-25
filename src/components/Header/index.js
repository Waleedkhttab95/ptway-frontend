import React from 'react';
import { Row, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/ptwayLogoHeader.png';
import headerBack from '../../images/header.png';
import './header.scss';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';

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
    const { i18n } = this.props;
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
                <a>{i18n.t('home.howWorks')}</a>
                <a>{i18n.t('home.comQuestions')}</a>
                <a>{i18n.t('home.comQuestions')}</a>
                <a>{i18n.t('home.contact')}</a>
                <a className="employeer-login-btn-mob">
                  {i18n.t('home.employeeLogin')}
                </a>
                <a className="company-login-btn-mob">
                  {' '}
                  {i18n.t('home.companyLogin')}
                </a>
              </div>
            </Drawer>
          </div>
          <img src={headerLogo} alt="logo" />
          <div className="navbar">
            <a>{i18n.t('home.howWorks')}</a>
            <a>{i18n.t('home.comQuestions')}</a>
            <a>{i18n.t('home.comQuestions')}</a>
            <a>{i18n.t('home.contact')}</a>
          </div>
        </div>
        <div className="left-side">
          <Link className="employeer-login-btn" to="/user/signup/step1">
            {i18n.t('home.employeeLogin')}
          </Link>
          <button className="company-login-btn">
            {' '}
            {i18n.t('home.companyLogin')}
          </button>
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
          <button className="start-now-btn">{i18n.t('home.startBtn')}</button>
        </div>
      </Row>
    );
  }
}

export default withTranslation()(Header);
