import React from 'react';
import { Row } from 'antd';
import './contracts.scss';
import shContractIc from '../../../../images/short.svg';
import lngContract from '../../../../images/long.svg';
import cuntContract from '../../../../images/continue.svg';
import { withTranslation } from 'react-i18next';

const Contracts = props => {
  const { i18n } = props;
  return (
    <Row className="contracts">
      <h3 className="cont-title">{i18n.t('home.contracts.title')}</h3>
      <div className="contracts-container">
        <div>
          <div className="contract">
            <img src={shContractIc} alt="shContract" />
            <h4 className="cnt-sub-title">
              {' '}
              {i18n.t('home.contracts.types.short')}
            </h4>
            <p className="cnt-des"> {i18n.t('home.contracts.types.sDesc')} </p>
          </div>
        </div>
        <div md={7}>
          <div className="contract">
            <img src={lngContract} alt="lngContract" />
            <h4 className="cnt-sub-title">
              {i18n.t('home.contracts.types.long')}{' '}
            </h4>
            <p className="cnt-des">
              {' '}
              {i18n.t('home.contracts.types.longDesc')}{' '}
            </p>
          </div>
        </div>
        <div md={7}>
          <div className="contract">
            <img src={cuntContract} alt="cuntContract" />
            <h4 className="cnt-sub-title">
              {' '}
              {i18n.t('home.contracts.types.continuous')}
            </h4>
            <p className="cnt-des"> {i18n.t('home.contracts.types.cDesc')} </p>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default withTranslation()(Contracts);
