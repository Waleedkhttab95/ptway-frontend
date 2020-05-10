import React from 'react';
import './style.scss';
import { Col, Input, Radio, Modal } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import {
  changePassword,
  changeEmailNotification
} from '../../../store/actions/user/setting';
class Setting extends React.Component {
  state = {
    status: 1,
    error: false,
    visible: false
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

  componentDidUpdate(prevProps) {
    const { history } = this.props;
    console.log(
      'prevProps.userSetting.emailNotification',
      prevProps.userSetting.emailNotification,
      this.props.userSetting.emailNotification
    );

    if (
      prevProps.userSetting.newPassword !==
        this.props.userSetting.newPassword ||
      prevProps.userSetting.emailNotification !==
        this.props.userSetting.emailNotification
    ) {
      // history.push('/user/home');
      this.setState({
        visible: true
      });
    } else {
      console.log('fail');
    }
  }
  // handleCancel = () => {
  //   this.setState({
  //     visible: false
  //   });
  // };
  render() {
    const { userSetting } = this.props;
    const { error, newPassword, rePassword } = this.state;
    return (
      <React.Fragment>
        <Header />
        {userSetting.newPassword === 'غيّرنا لك الرقم السري' ||
        userSetting.emailNotification === 'Done . ' ? (
          <Modal visible={this.state.visible} closable={false} footer={false}>
            <div className="success-modal">
              <h2>تم تغير الاعدادات بنجاح</h2>
              <br />
              <button onClick={() => this.props.history.push('/user/home')}>
                حسناً
              </button>
            </div>
          </Modal>
        ) : (
          ''
        )}
        <div className="user-container setting-mob">
          <div className="setting-body">
            <div className="setting-container">
              <Col className="account-info">
                <h4 className="heading">تعديل معلومات الحساب</h4>
                <div className="account-fields">
                  {/* <span>البريد الالكتروني</span>
                <Input className="account-input" type="email" /> */}
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
    updateEmailNotification: params => dispatch(changeEmailNotification(params))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
