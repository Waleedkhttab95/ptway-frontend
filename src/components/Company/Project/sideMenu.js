import React from 'react';
import { Modal, Menu } from 'antd';

const SideMenu = props => (
  <React.Fragment>
    <Menu
      className="project-options"
      // style= {props.deleteModal ?{ display:'none'} : ''}
    >
      {!props.isLock ? (
        <Menu.Item key="1" onClick={props.lockJobModal}>
          <i
            className="fa fa-pause"
            aria-hidden="true"
            style={{ marginLeft: '5px', color: '#3b96d9' }}
          ></i>
          إيقاف
        </Menu.Item>
      ) : (
        <Menu.Item key="1">تم قفل الاعلان</Menu.Item>
      )}

      <Menu.Item key="2" onClick={props.deleteJob}>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
          style={{ marginLeft: '5px', color: '#3b96d9' }}
        ></i>
        حذف
      </Menu.Item>
    </Menu>
    <Modal visible={props.lockModal} closable={false} footer={false}>
      <div className="lock-modal">
        <h2>هل انت متأكد من ايقاف هذا العرض الوظيفي؟</h2>
        <div className="modal-btns">
          <button className="lock-btn" onClick={props.lockConfirmation}>
            تأكيد
          </button>
          <button className="cancel-btn" onClick={props.cancel}>
            إلغاء
          </button>
        </div>
      </div>
    </Modal>
    <Modal visible={props.lockConfirmMsg} closable={false} footer={false}>
      <div className="success-modal">
        <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
        <h2>تم ايقاف العرض الوظيفي بنجاح</h2>
        <button onClick={props.CloseConfirmationMsg}>العودة</button>
      </div>
    </Modal>
    <Modal visible={props.deleteModal} closable={false} footer={false}>
      <div className="delete-modal">
        <i className="fa fa-trash-o delete-icon" aria-hidden="true"></i>
        <h3>هل أنت متأكد من حذف هذا العرض الوظيفي؟</h3>
        <p>لن يمكنك استرداد العرض الوظيفي او مشاهدة المتقدمين لهذا العرض</p>
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
        <h2>تم حذف العرض الوظيفي بنجاح</h2>
        <p>
          تم حذف الإعلان الوظيفي بشكل كامل من ضمن الإعلانات الوظيفية في المشروع
        </p>
        <button onClick={props.CloseConfirmationMsg}>العودة</button>
      </div>
    </Modal>
  </React.Fragment>
);

export default SideMenu;
