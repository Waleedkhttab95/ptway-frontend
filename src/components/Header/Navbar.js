import React from 'react';
import { Row } from 'antd';
import Select from 'react-select';
import ptwayLogo from '../../images/PTway_Logo.svg';
import { withTranslation } from 'react-i18next';
import history from '../../_core/history';
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
const Navbar = props => {
  const { i18n } = props;
  return (
    <Row className="navbar">
      <img
        src={ptwayLogo}
        alt="PTway_Logo"
        onClick={() => history.push('/')}
        style={{ cursor: 'pointer' }}
      />
      <div className="menu">
        <a> من نحن</a>
        <a>الأفراد</a>
        <a>الشركات</a>
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
        <button className="login">تسجيل الدخول</button>
      </div>
    </Row>
  );
};
export default withTranslation()(Navbar);
