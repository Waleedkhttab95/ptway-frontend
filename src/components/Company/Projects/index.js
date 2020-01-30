import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Collapse, Dropdown, Menu, Modal, Button } from 'antd';
import Project from '../Project';
import FilterAndSearch from '../../Filter';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class Projects extends React.Component {
  state = {
    expandIconPosition: 'left',
    deleteModal: false,
    confirmMsg: false
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  deletePoject = () => {
    this.setState({
      deleteModal: true
    });
  };
  deleteConfirmation = event => {
    event.stopPropagation();
    this.setState({
      deleteModal: false,
      confirmMsg: true
    });
  };
  render() {
    const menu = (
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
          <Modal
            visible={this.state.pauseModal}
            closable={false}
            footer={false}
          ></Modal>

          <Menu.Item key="2" onClick={this.editProject}>
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              style={{ marginLeft: '5px', color: '#3b96d9' }}
            ></i>
            تعديل
          </Menu.Item>
          <Modal
            visible={this.state.editModal}
            closable={false}
            footer={false}
          ></Modal>
          <Menu.Item key="3" onClick={this.deletePoject}>
            <i
              className="fa fa-trash-o"
              aria-hidden="true"
              style={{ marginLeft: '5px', color: '#3b96d9' }}
            ></i>
            حذف
          </Menu.Item>
        </Menu>
        <Modal visible={this.state.deleteModal} closable={false} footer={false}>
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

        <Modal visible={this.state.confirmMsg} closable={false} footer={false}>
          <div className="success-modal">
            <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
            <h2>تم حذف الإعلان الوظيفي بنجاح</h2>
            <p>
              تم حذف الإعلان الوظيفي بشكل كامل من ضمن الإعلانات الوظيفية في
              المشروع
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
    const { expandIconPosition } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="company-projects">
            <FilterAndSearch />
            <div className="projects-header">
              <h2>اسم المشروع</h2>
              <h2>عدد العروض الوظيفية</h2>
              <div></div>
            </div>
            <Button
              className="new-job-btn-mob"
              onClick={() => this.props.history.push('/comany/new/project')}
            >
              <i
                className="fa fa-plus plus-icon"
                aria-hidden="true"
                style={{ marginLeft: '7px' }}
              ></i>
              أضف عرض وظيفي جديد
            </Button>

            <Collapse
              // defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={expandIconPosition}
              className="projects-collapse"
            >
              <Panel
                header={
                  <div className="panel-title">
                    <div className="panel-mob">
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <span className="applicant-num-mob">
                        {' '}
                        عدد المتقدمين :
                      </span>
                      <div className="offers-num">294</div>
                    </div>
                    <Dropdown
                      overlay={menu}
                      placement="bottomCenter"
                      trigger="hover"
                    >
                      <span className="options-menu">...</span>
                    </Dropdown>
                  </div>
                }
                key="1"
                // extra={genExtra()}
              >
                <Project />
              </Panel>
              <br />
              <Panel
                header={
                  <div className="panel-title">
                    <div className="panel-mob">
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <span className="applicant-num-mob">
                        {' '}
                        عدد المتقدمين :
                      </span>
                      <div className="offers-num">294</div>
                    </div>
                    <Dropdown
                      overlay={menu}
                      placement="bottomCenter"
                      trigger="hover"
                    >
                      <span className="options-menu">...</span>
                    </Dropdown>
                  </div>
                }
                key="2"
              >
                <Project />
              </Panel>
              <br />
              <Panel
                header={
                  <div className="panel-title">
                    <div className="panel-mob">
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <span className="applicant-num-mob">
                        {' '}
                        عدد المتقدمين :
                      </span>
                      <div className="offers-num">294</div>
                    </div>
                    <Dropdown
                      overlay={menu}
                      placement="bottomCenter"
                      trigger="hover"
                    >
                      <span className="options-menu">...</span>
                    </Dropdown>
                  </div>
                }
                key="3"
              >
                <Project />
              </Panel>
            </Collapse>
            <br />
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
