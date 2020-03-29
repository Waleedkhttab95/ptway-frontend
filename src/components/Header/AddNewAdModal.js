import React from 'react';
import { Modal, Col } from 'antd';
import shContractIc from '../../images/short.svg';
import lngContract from '../../images/long.svg';
import cuntContract from '../../images/continue.svg';

const AddNewAds = props => {
  const { cotracts } = props.contractsTypes;
  const { history } = props;
  return (
    <Modal
      visible={props.newAdPopUp}
      closable={false}
      footer={false}
      className="ad-modal"
    >
      <div className="new-ad">
        <h2 className="p-heading">إضافة إعلان جديد</h2>
        <p className="p-description">
          ثانياً قم باختيار نوع عقد العمل للإعلان الوظيفي الجديد الذي سوف تضيفه
        </p>
        <div className="ad-contract">
          <Col
            md={8}
            className="cont-type"
            onClick={() =>
              history.push(
                `/company/new/short/ad/${cotracts[0]._id}`,
                props.newAdPopUp
              )
            }
          >
            <img src={shContractIc} alt="shContract" />
            <h4 className="cnt-sub-title">عقود قصيرة</h4>
            <p className="cnt-des"> مهمات لاتزيد عن 30 يوم </p>
          </Col>
          <Col
            md={8}
            className="cont-type"
            onClick={() =>
              history.push(
                `/company/new/long/ad/${cotracts[1]._id}`,
                props.newAdPopUp
              )
            }
          >
            <img src={lngContract} alt="shContract" />
            <h4 className="cnt-sub-title">عقود طويلة</h4>
            <p className="cnt-des"> مهمات لا تزيد عن 6 أشهر </p>
          </Col>
          <Col
            md={8}
            className="cont-type"
            onClick={() =>
              history.push(
                `/company/new/continuous/ad/${cotracts[2]._id}`,
                props.newAdPopUp
              )
            }
          >
            <img src={cuntContract} alt="shContract" />
            <h4 className="cnt-sub-title">عقود مستمرة</h4>
            <p className="cnt-des"> مهمات بعقود سنوية وتجدد </p>
          </Col>
        </div>
      </div>
      {/* <button className="ad-next-btn">
        <Link to="/company/new/ad" style={{ color: '#fff' }}>
          التالي
        </Link>
      </button> */}
    </Modal>
  );
};

export default AddNewAds;
