import React from 'react';
import { Row } from 'antd';
import './contracts.scss';
import shContractIc from '../../images/short.svg';
import lngContract from '../../images/long.svg';
import cuntContract from '../../images/continue.svg';
const Contracts = () => {
  return (
    <Row className="contracts">
      <h3 className="cont-title">أنواع العقود</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div className="contract">
            <img src={shContractIc} alt="shContract" />
            <h4 className="cnt-sub-title"> عقود قصيرة</h4>
            <p className="cnt-des">
              {' '}
              هي عقود يتم الاتفاق عليها على أساس العمل لأيام إلى حد أقصى 30 يوم{' '}
            </p>
          </div>
        </div>
        <div md={7}>
          <div className="contract">
            <img src={lngContract} alt="lngContract" />
            <h4 className="cnt-sub-title"> عقود طويلة</h4>
            <p className="cnt-des">
              {' '}
              هي عقود يتم الاتفاق عليها على أساس العمل لعدة اشهر إلى أن تصل كحد
              أقصى ل6 اشهر{' '}
            </p>
          </div>
        </div>
        <div md={7}>
          <div className="contract">
            <img src={cuntContract} alt="cuntContract" />
            <h4 className="cnt-sub-title"> عقود مستمرة</h4>
            <p className="cnt-des">
              {' '}
              هي العقود يتم الاتفاق عليها على اساس العمل بشكل سنوي ولايوجد حد
              اقصى{' '}
            </p>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Contracts;
