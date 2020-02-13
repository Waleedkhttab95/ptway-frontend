import React from 'react';
import { Modal, Input } from 'antd';
const { TextArea } = Input;

const AddNewProjectModal = props => {
  return (
    <Modal
      visible={props.postJobPopup}
      onCancel={props.closable}
      footer={false}
    >
      <div className="new-project">
        <h2 className="p-heading">انشئ مشروع جديد</h2>
        <p className="p-description">
          أولاً قم بانشاء مشروع جديد الذي سيندرج تحته عدة إعلانات وظيفية مختلفة
        </p>
        <div className="new-project-form">
          <label>اسم المشروع</label>
          <Input onChange={props.onChange} name="projectName" />
          <label>وصف المشروع</label>
          <TextArea
            row={4}
            onChange={props.onChange}
            name="projectDescription"
          />
          <button className="new-project-btn" onClick={props.newAd}>
            انشاء مشروع جديد
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewProjectModal;
