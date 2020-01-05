import React from 'react';
import { Row } from 'antd';
import './jobs.scss';
import client from '../../../../images/Clients.svg';
import entry from '../../../../images/entry.svg';
import develop from '../../../../images/Develop.svg';
import money from '../../../../images/Money.svg';
import data from '../../../../images/Data.svg';
import security from '../../../../images/Security.svg';
import { withTranslation } from 'react-i18next';

const JobsTypes = props => {
  const { i18n } = props;
  return (
    <Row>
      <div className="jobs">
        <h4 className="title">{i18n.t('home.jobs.title')}</h4>
        <Row className="types">
          <div className="item">
            <img src={client} alt="client" />
            <h5 className="sub-title">{i18n.t('home.jobs.types.services')}</h5>
          </div>
          <div className="item">
            <img src={security} alt="security" />
            <h5 className="sub-title">{i18n.t('home.jobs.types.security')}</h5>
          </div>
          <div className="item">
            <img src={data} alt="data" />
            <h5 className="sub-title">{i18n.t('home.jobs.types.analysis')}</h5>
          </div>
        </Row>
        <Row className="types">
          <div className="item">
            <img src={develop} alt="develop" />
            <h5 className="sub-title">
              {i18n.t('home.jobs.types.development')}
            </h5>
          </div>
          <div className="item">
            <img src={entry} alt="entry" />
            <h5 className="sub-title">{i18n.t('home.jobs.types.entry')}</h5>
          </div>
          <div className="item">
            <img src={money} alt="money" />
            <h5 className="sub-title">
              {i18n.t('home.jobs.types.accounting')}
            </h5>
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default withTranslation()(JobsTypes);
