import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Input } from 'antd';
import {
  searchById,
  searchByEmail,
  searchByName
} from '../../store/actions/adminSearch/userSearchAction';
import {
  deleteUser,
  updateUser,
  confirmUser,
  blockUser
} from '../../store/actions/adminCRUD/userCRUDAction';
import search from '../../images/search-icon.svg';
import delete_icon from '../../images/delete.svg';
import update_icon from '../../images/edit.svg';
import confirm_icon from '../../images/confirmation.svg';
import block_icon from '../../images/block.svg';

import _ from 'lodash';
class UserSearch extends Component {
  state = {
    userId: '',
    username: '',
    name: '',
    type: '',
    visible: false,
    editVisible: false,
    editedUser: '',
    confirmVisible: false,
    blockVisible: false
  };

  handleChange = e => {
    this.setState(
      {
        userId: e.target.value
      },
      () => {
        this.props.searchBId({ id: this.state.userId });
      }
    );
  };

  handleEmailChange = e => {
    this.setState(
      {
        username: e.target.value
      },
      () => {
        this.props.searchBMail({ email: this.state.username });
      }
    );
  };

  handleNameChange = e => {
    this.setState(
      {
        name: e.target.value
      },
      () => {
        this.props.searchBName({ name: this.state.name });
      }
    );
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  showEditModal = type => {
    this.setState({
      editVisible: true,
      type
    });
  };

  handleOk = async id => {
    await this.props.deleteUser({ id });
    this.setState({
      userId: '',
      username: '',
      name: '',
      visible: false
    });
  };

  handleEditOk = async id => {
    const { type } = this.state;
    const { updateUser } = this.props;
    await updateUser({
      id,
      value: this.state.editedUser,
      type
    });
    this.setState({
      userId: '',
      username: '',
      name: '',
      editVisible: false
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
      editVisible: false,
      confirmVisible: false,
      blockVisible: false
    });
  };
  handleInputChange = e => {
    this.setState({
      editedUser: e.target.value
    });
  };
  showConfirmationModal = () => {
    this.setState({
      confirmVisible: true
    });
  };
  handleConfirmOk = async id => {
    await this.props.confirmUser({ id });
    this.setState({
      userId: '',
      username: '',
      name: '',
      confirmVisible: false
    });
  };
  showBlockModal = () => {
    this.setState({
      blockVisible: true
    });
  };
  handleBlockOk = async id => {
    await this.props.blockUser({ id });
    this.setState({
      userId: '',
      username: '',
      name: '',
      blockVisible: false
    });
  };

  render() {
    const { userById, userByMail, userByName } = this.props.search;

    return (
      <React.Fragment>
        <div style={{ display: 'flex' }}>
          {/* <Row className="user-search"> */}
          <Col md={8}>
            <div className="input-container search-container">
              <Input
                placeholder="ادخل رقم المستخدم"
                onChange={this.handleChange}
              />
              <img className="search" src={search} alt="" />
            </div>
            {userById && this.state.userId !== '' && (
              <Row className="user-information">
                <div className="du-images">
                  <img
                    className="delete-user"
                    src={delete_icon}
                    alt=""
                    onClick={this.showModal}
                  />
                  <Modal
                    title="هل أنت متأكد؟"
                    visible={this.state.visible}
                    onOk={() => {
                      this.handleOk(userById._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                  </Modal>
                  <img
                    className="confirmation"
                    src={confirm_icon}
                    alt=""
                    onClick={this.showConfirmationModal}
                  />
                  <Modal
                    title="رسالة تأكيد"
                    visible={this.state.confirmVisible}
                    onOk={() => {
                      this.handleConfirmOk(userById._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                  </Modal>
                  <img
                    className="block"
                    src={block_icon}
                    alt=""
                    onClick={this.showBlockModal}
                  />
                  <Modal
                    title="رسالة تأكيد"
                    visible={this.state.blockVisible}
                    onOk={() => {
                      this.handleBlockOk(userById._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                  </Modal>
                </div>
                <Modal
                  title="تعديل بيانات المستخدم"
                  visible={this.state.editVisible}
                  onOk={() => {
                    this.handleEditOk(userById._id);
                  }}
                  onCancel={this.handleCancel}
                >
                  <Input
                    placeholder="ادخل القيمة "
                    onChange={this.handleInputChange}
                  />
                </Modal>
                <div className="user-name">
                  <span> اسم المستخدم الأول : </span>
                  <span>{userById ? userById.firstName : null}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('firstName')}
                  />
                </div>
                <div className="user-name">
                  <span> اسم المستخدم الاخير : </span>
                  <span>{userById ? userById.lastName : null}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('lastName')}
                  />
                </div>

                <div className="user-name">
                  <span>البريد الالكتروني : </span>
                  <span>{userById ? userById.email : ''}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('email')}
                  />
                </div>
                <div className="user-name">
                  <span> حالة التفعيل :</span>
                  <span>
                    {userById
                      ? userById.isConfirmed
                        ? 'مفعل'
                        : 'غير مفعل'
                      : null}
                  </span>
                </div>
                <div className="user-name">
                  <span> تاريخ الانشاء : </span>
                  <span>{userById ? userById.createDate : null}</span>
                </div>
              </Row>
            )}
          </Col>
          {/* </Row> */}
          {/* <Row className="user-search"> */}
          <Col md={8}>
            <div className="input-container search-container">
              <Input
                placeholder="ادخل البريد الالكتروني للمستخدم"
                onChange={this.handleEmailChange}
              />
              <img className="search" src={search} alt="" />
            </div>
            {userByMail && this.state.username !== '' && (
              <Row className="user-information">
                <div className="du-images">
                  <img
                    className="delete-user"
                    src={delete_icon}
                    alt=""
                    type="primary"
                    onClick={this.showModal}
                  />
                  <Modal
                    title="هل أنت متأكد"
                    visible={this.state.visible}
                    onOk={() => {
                      this.handleOk(userByMail._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                  </Modal>
                  <img
                    className="confirmation"
                    src={confirm_icon}
                    alt=""
                    onClick={this.showConfirmationModal}
                  />
                  <Modal
                    title="رسالة تأكيد"
                    visible={this.state.confirmVisible}
                    onOk={() => {
                      this.handleConfirmOk(userByMail._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                  </Modal>
                  <img
                    className="block"
                    src={block_icon}
                    alt=""
                    onClick={this.showBlockModal}
                  />
                  <Modal
                    title="رسالة تأكيد"
                    visible={this.state.blockVisible}
                    onOk={() => {
                      this.handleBlockOk(userByMail._id);
                    }}
                    onCancel={this.handleCancel}
                  >
                    <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                  </Modal>
                </div>
                <Modal
                  title="تعديل بيانات المستخدم"
                  visible={this.state.editVisible}
                  onOk={() => {
                    this.handleEditOk(userByMail._id);
                  }}
                  onCancel={this.handleCancel}
                >
                  <Input
                    placeholder="ادخل القيمة "
                    onChange={this.handleInputChange}
                  />
                </Modal>
                <div className="user-name">
                  <span> اسم المستخدم الأول : </span>
                  <span>{userByMail ? userByMail.firstName : null}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('firstName')}
                  />
                </div>
                <div className="user-name">
                  <span> اسم المستخدم الاخير :</span>
                  <span>{userByMail ? userByMail.lastName : null}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('lastName')}
                  />
                </div>

                <div className="user-name">
                  <span>البريد الالكتروني : </span>
                  <span>{userByMail ? userByMail.email : ''}</span>
                  <img
                    className="update-user"
                    src={update_icon}
                    alt=""
                    onClick={() => this.showEditModal('email')}
                  />
                </div>
                <div className="user-name">
                  <span>حالة التفعيل : </span>
                  <span>
                    {userByMail
                      ? userByMail.isConfirmed
                        ? 'مفعل'
                        : 'غير مفعل'
                      : ''}
                  </span>
                </div>
                <div className="user-name">
                  <span>تاريخ الانشاء : </span>
                  <span>{userByMail ? userByMail.createDate : ''}</span>
                </div>
              </Row>
            )}
          </Col>
          {/* </Row> */}
          {/* <Row className="user-search"> */}
          <Col md={8}>
            <div className="input-container search-container">
              <Input
                placeholder="ادخل اسم المستخدم"
                onChange={this.handleNameChange}
              />
              <img className="search" src={search} alt="" />
            </div>
            {(_.isArray(userByName) || _.isObject(userByName)) &&
            this.state.name !== ''
              ? userByName.map(elm => {
                  return (
                    <Row className="user-information" key={elm.id}>
                      <div className="du-images">
                        <img
                          className="delete-user"
                          src={delete_icon}
                          alt=""
                          onClick={this.showModal}
                        />
                        <Modal
                          title="هل أنت متأكد"
                          visible={this.state.visible}
                          onOk={() => {
                            this.handleOk(elm._id);
                          }}
                          onCancel={this.handleCancel}
                        >
                          <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                        </Modal>

                        <Modal
                          title="تعديل بيانات المستخدم"
                          visible={this.state.editVisible}
                          onOk={() => {
                            this.handleEditOk(elm._id);
                          }}
                          onCancel={this.handleCancel}
                        >
                          <Input
                            placeholder="ادخل القيمة "
                            onChange={this.handleInputChange}
                          />
                        </Modal>
                        <img
                          className="confirmation"
                          src={confirm_icon}
                          alt=""
                          onClick={this.showConfirmationModal}
                        />
                        <Modal
                          title="رسالة تأكيد"
                          visible={this.state.confirmVisible}
                          onOk={() => {
                            this.handleConfirmOk(elm._id);
                          }}
                          onCancel={this.handleCancel}
                        >
                          <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                        </Modal>
                        <img
                          className="block"
                          src={block_icon}
                          alt=""
                          onClick={this.showBlockModal}
                        />
                        <Modal
                          title="رسالة تأكيد"
                          visible={this.state.blockVisible}
                          onOk={() => {
                            this.handleBlockOk(elm._id);
                          }}
                          onCancel={this.handleCancel}
                        >
                          <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                        </Modal>
                      </div>
                      <div className="user-name">
                        <span> اسم المستخدم الأول : </span>
                        <span>{elm.firstName}</span>
                        <img
                          className="update-user"
                          src={update_icon}
                          alt=""
                          onClick={() => this.showEditModal('firstName')}
                        />
                      </div>
                      <div className="user-name">
                        <span> اسم المستخدم الاخير : </span>
                        <span>{elm.lastName}</span>
                        <img
                          className="update-user"
                          src={update_icon}
                          alt=""
                          onClick={() => this.showEditModal('lastName')}
                        />
                      </div>
                      <div className="user-name">
                        <span>البريد الالكتروني : </span>
                        <span>{elm.email}</span>
                        <img
                          className="update-user"
                          src={update_icon}
                          alt=""
                          onClick={() => this.showEditModal('email')}
                        />
                      </div>
                      <div className="user-name">
                        <span>حالة التفعيل : </span>
                        <span>{elm.isConfirmed ? 'مفعل' : 'غير مفعل'}</span>
                      </div>
                      <div className="user-name">
                        <span>تاريخ الانشاء : </span>
                        <span>{elm.createDate}</span>
                      </div>
                    </Row>
                  );
                })
              : null}
          </Col>
          {/* </Row> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ search, adminSer }) => {
  return {
    search,
    adminSer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchBId: params => dispatch(searchById(params)),
    searchBMail: params => dispatch(searchByEmail(params)),
    searchBName: params => dispatch(searchByName(params)),
    deleteUser: params => dispatch(deleteUser(params)),
    updateUser: params => dispatch(updateUser(params)),
    confirmUser: params => dispatch(confirmUser(params)),
    blockUser: params => dispatch(blockUser(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
