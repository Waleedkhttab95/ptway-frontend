import React from 'react';
import { Row } from 'antd';
import './partner.scss';
import google from '../../../../images/google.svg';
import amazon from '../../../../images/amazon.svg';
import microsoft from '../../../../images/microsoft.svg';
import uber from '../../../../images/uber.svg';
import starbucks from '../../../../images/starbucks.svg';
import { withTranslation } from 'react-i18next';

const Partners = props => {
  const { i18n } = props;
  return (
    <Row>
      <div className="partners">
        <h3 className="prt-title">{i18n.t('home.partners')}</h3>
        <div className="partners-names">
          <span className="navigator"> {'<'} </span>
          <img src={google} alt="google" />
          <img src={amazon} alt="amazon" />
          <img src={starbucks} alt="starbucks" />
          <img src={microsoft} alt="microsoft" />
          <img src={uber} alt="uber" />
          <span className="navigator" style={{ marginRight: '70px' }}>
            {'>'}{' '}
          </span>
        </div>
      </div>
    </Row>
  );
};

export default withTranslation()(Partners);
