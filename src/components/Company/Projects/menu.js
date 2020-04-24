import React from 'react';
import { Modal, Menu, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const SideMenu = props => (
  <React.Fragment>
    <Menu
      className={
        props.editModal || props.deleteModal
          ? 'project-options dropdown-custom-style'
          : 'project-options'
      }
      // style= {props.deleteModal ?{ display:'none'} : ''}
    >
      {/* <Menu.Item key="1">
        <i
          className="fa fa-pause"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        إيقاف
      </Menu.Item>
      <Modal visible={props.pauseModal} closable={false} footer={false}></Modal> */}

      <Menu.Item key="1" onClick={props.editProjectModal}>
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        تعديل
      </Menu.Item>
      <Modal
        visible={props.editModal}
        closable={true}
        footer={false}
        onCancel={props.cancel}
        onClick={e => e.preventDefault()}
      >
        <div className="new-project-form">
          <h2 className="p-heading" style={{ paddingTop: '0px' }}>
            تعديل المشروع
          </h2>
          <label>اسم المشروع</label>
          <Input onChange={props.onChange} name="projectName" />
          <label>وصف المشروع</label>
          <TextArea
            row={4}
            onChange={props.onChange}
            name="projectDescription"
          />
          <button className="new-project-btn" onClick={props.updateProject}>
            حفظ
          </button>
        </div>
      </Modal>
      <Menu.Item key="2" onClick={props.deletePoject}>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        حذف
      </Menu.Item>
    </Menu>
    <Modal
      visible={props.deleteModal}
      closable={true}
      footer={false}
      onCancel={props.cancel}
    >
      <div className="delete-modal">
        <i className="fa fa-trash-o delete-icon" aria-hidden="true"></i>
        <h3>هل أنت متأكد من حذف المشروع</h3>
        <p> عند حذف المشروع لا يمكنك استرداده</p>
        <div className="modal-btns">
          <button className="del-btn" onClick={props.deleteConfirmation}>
            تأكيد الحذف
          </button>
          <button className="cancel-btn" onClick={props.cancel}>
            إلغاء
          </button>
        </div>
      </div>
    </Modal>

    <Modal visible={props.confirmMsg} closable={false} footer={false}>
      <div className="success-modal">
        <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
        <h2>تم حذف المشروع بنجاح</h2>
        {/* <p>
          تم حذف الإعلان الوظيفي بشكل كامل من ضمن الإعلانات الوظيفية في المشروع
        </p> */}
        <button onClick={props.CloseConfirmationMsg}>العودة</button>
      </div>
    </Modal>
  </React.Fragment>
);

export default SideMenu;
