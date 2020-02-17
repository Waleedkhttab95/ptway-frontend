import React from 'react';
import { Modal, Menu } from 'antd';

const SideMenu = props => (
  <React.Fragment>
    <Menu className="project-options">
      <Menu.Item key="1">
        <i
          className="fa fa-pause"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        إيقاف
      </Menu.Item>
      <Modal visible={props.pauseModal} closable={false} footer={false}></Modal>

      <Menu.Item key="2" onClick={this.editProject}>
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        تعديل
      </Menu.Item>
      <Modal visible={props.editModal} closable={false} footer={false}></Modal>
      <Menu.Item key="3" onClick={this.deletePoject}>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        حذف
      </Menu.Item>
    </Menu>
    <Modal visible={props.deleteModal} closable={false} footer={false}>
      <div className="delete-modal">
        <i className="fa fa-trash-o delete-icon" aria-hidden="true"></i>
        <h3>هل أنت متأكد من حذف الإعلان الوظيفي</h3>
        <p>لن يمكنك استرداد العرض الوظيفي او مشاهدة المتقدمين لهذا العرض</p>
        <div className="modal-btns">
          <button className="del-btn" onClick={this.deleteConfirmation}>
            تأكيد الحذف
          </button>
          <button className="cancel-btn">إلغاء</button>
        </div>
      </div>
    </Modal>

    <Modal visible={props.confirmMsg} closable={false} footer={false}>
      <div className="success-modal">
        <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
        <h2>تم حذف الإعلان الوظيفي بنجاح</h2>
        <p>
          تم حذف الإعلان الوظيفي بشكل كامل من ضمن الإعلانات الوظيفية في المشروع
        </p>
        <button
          onClick={e => {
            e.stopPropagation();
            this.setState({ confirmMsg: false });
          }}
        >
          العودة
        </button>
      </div>
    </Modal>
  </React.Fragment>
);

export default SideMenu;
