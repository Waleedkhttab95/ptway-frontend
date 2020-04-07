import React from 'react';
import { Row } from 'antd';
import ptwayLogo from '../../images/PTway_Logo.svg';
import { withTranslation } from 'react-i18next';
import history from '../../_core/history';

const LoginNavbar = () => {
  return (
    <React.Fragment>
      <Row
        className="navbar"
        style={{
          justifyContent: 'flex-start ',
          paddingLeft: '50px'
        }}
      >
        <img
          src={ptwayLogo}
          alt="PTway_Logo"
          onClick={() => history.push('/')}
          style={{
            cursor: 'pointer'
          }}
        />
      </Row>
      <Row className="drawer-mobile">
        <img
          src={ptwayLogo}
          alt="PTway_Logo"
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer' }}
        />
      </Row>
    </React.Fragment>
  );
};
export default withTranslation()(LoginNavbar);
