import React from 'react';
import './style.scss';
import { Col, Input, Radio, Modal, Button, message } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import {
  changePassword,
  changeEmailNotification,
  closeSuccessModal
} from '../../../store/actions/user/setting';
import setting from '../../../services/user/setting.js';
import { logout } from '../../../store/actions/userAction';
const { deactivateAccount } = setting;
class Setting extends React.Component {
  state = {
    status: 1,
    error: false,
    visible: false,
    deacivateVisible: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  submitChanges = async () => {
    const { updatePassword, updateEmailNotification } = this.props;
    const { prevPassword, newPassword, status, rePassword } = this.state;
    const data = {
      prevPassword,
      newPassword
    };
    if (newPassword !== rePassword) {
      this.setState({
        error: true
      });
    } else if (prevPassword && newPassword && rePassword) {
      updatePassword(data);
    } else {
      updateEmailNotification({
        status: status === 'نعم' ? 'true' : 'false'
      });
    }
  };

  activateModal = () => {
    this.setState({
      deacivateVisible: true
    });
  };
  deactiveAccount = async () => {
    await this.setState({
      deacivateVisible: false
    });
    await deactivateAccount();
    await message.success(
      'تم ايقاف حسابك، تستيطع التواصل مع الموقع لإعادة تفعيله'
    );
    await this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const { userSetting } = this.props;
    const { error, newPassword, rePassword, deacivateVisible } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Modal
          visible={
            userSetting.changeNotificationSuccess.showSuccessMsg ||
            userSetting.changePasswordSuccess.showSuccessMsg
          }
          closable={false}
          footer={false}
          onCancel={() => {
            this.props.closeSuccessModal();
          }}
        >
          <div className="success-modal">
            <h2>تم تغير الاعدادات بنجاح</h2>
            <br />
            <button onClick={() => this.props.history.push('/user/home')}>
              حسناً
            </button>
          </div>
        </Modal>
        <div className="user-container setting-mob">
          <div className="setting-body">
            <div className="setting-container">
              <div className="top-section">
                <Col className="account-info">
                  <h4 className="heading">تعديل معلومات الحساب</h4>
                  <div className="account-fields">
                    <span> كلمة المرور القديمة</span>

                    <Input
                      className="account-input"
                      type="password"
                      name="prevPassword"
                      onChange={this.handleChange}
                    />
                    <span style={{ color: 'red', marginTop: '5px' }}>
                      {userSetting.passwordError && this.state.prevPassword
                        ? userSetting.passwordError.response.data
                        : ''}
                    </span>
                    <span>كلمة المرور الجديدة</span>
                    <Input
                      className="account-input"
                      type="password"
                      name="newPassword"
                      onChange={this.handleChange}
                    />
                    <span>تأكيد كلمة المرور الجديدة</span>
                    <Input
                      className="account-input"
                      type="password"
                      name="rePassword"
                      onChange={this.handleChange}
                    />
                    {error && newPassword !== rePassword && (
                      <span style={{ color: 'red' }}>
                        كلمة المرور غير متطابقة
                      </span>
                    )}
                  </div>
                </Col>
                <Col className="account-options">
                  <h4 className="heading">خيارات الحساب</h4>
                  <div className="email-setting">
                    <h6>ارسال الاشعارات عن طريق الايميل</h6>
                    <div className="checkbox-options">
                      <Radio.Group
                        onChange={this.handleChange}
                        value={this.state.status}
                        name="status"
                        options={['نعم', 'لا']}
                        className="check-option"
                      />
                    </div>
                  </div>
                </Col>
              </div>
              <button className="save-setting-btn" onClick={this.submitChanges}>
                حفظ التعديلات
              </button>
              <div style={{ marginTop: '30px' }}>
                <h4 className="heading"> ايقاف الحساب</h4>
                <p>اذا كنت ترغب في ايفاف تفعيل حسابك</p>
                <Button
                  className="deactivate-account"
                  onClick={this.activateModal}
                >
                  ايقاف الحساب
                </Button>
              </div>
              <Modal
                visible={deacivateVisible}
                closable={false}
                footer={false}
                onCancel={() =>
                  this.setState({
                    deacivateVisible: false
                  })
                }
              >
                <div className="deactivate-modal">
                  <h3>هل أنت متأكد من ايقاف الحساب؟ </h3>
                  <div>
                    <Button
                      onClick={() =>
                        this.setState({
                          deacivateVisible: false
                        })
                      }
                    >
                      لا
                    </Button>
                    <Button onClick={this.deactiveAccount}>نعم</Button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ userSetting }) => {
  return {
    userSetting
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePassword: params => dispatch(changePassword(params)),
    updateEmailNotification: params =>
      dispatch(changeEmailNotification(params)),
    closeSuccessModal: () => dispatch(closeSuccessModal()),
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
