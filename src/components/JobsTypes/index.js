import React from 'react';
import { Row } from 'antd';
import './jobs.scss';
import client from '../../images/Clients.svg';
import entry from '../../images/entry.svg';
import develop from '../../images/Develop.svg';
import money from '../../images/Money.svg';
import data from '../../images/Data.svg';
import security from '../../images/Security.svg';
const JobsTypes = () => {
  return (
    <Row>
      <div className="jobs">
        <h4 className="title">أنواع الوظائف</h4>
        <Row className="types">
          <div className="item">
            <img src={client} alt="client" />
            <h5 className="sub-title">خدمة العملاء</h5>
          </div>
          <div className="item">
            <img src={security} alt="security" />
            <h5 className="sub-title">أمن المعلومات</h5>
          </div>
          <div className="item">
            <img src={data} alt="data" />
            <h5 className="sub-title">تحليل البيانات</h5>
          </div>
        </Row>
        <Row className="types">
          <div className="item">
            <img src={develop} alt="develop" />
            <h5 className="sub-title">تطوير التطبيقات</h5>
          </div>
          <div className="item">
            <img src={entry} alt="entry" />
            <h5 className="sub-title">ادخال البيانات</h5>
          </div>
          <div className="item">
            <img src={money} alt="money" />
            <h5 className="sub-title">المحاسبة</h5>
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default JobsTypes;
