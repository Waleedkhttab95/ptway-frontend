import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Modal, message } from 'antd';
import Footer from '../Footer';
import LoginNavbar from '../Header/LoginNavbar';
import services from '../../services/user/setting';

const { reactivateAccount } = services;
class UserReactivateAccount extends React.Component {
  state = {
    passwordMsg: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username } = values;
        try {
          await reactivateAccount({
            email: username
          });
          await this.setState({
            passwordMsg: true
          });
        } catch (error) {
          message.error(error);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="user-login-container">
          <div className="form-container" style={{ height: 'auto' }}>
            <h3 className="login-form-title">اعادة تفعيل الحساب</h3>
            <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
              <label className="login-form-label">
                {' '}
                ادخل البريد الالكتروني
              </label>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'الرجاء ادخال البريد الالكتروني'
                    }
                  ]
                })(<Input prefix={<Icon />} />)}
              </Form.Item>
              <div className="login-btn-cont">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button login-form-btn"
                >
                  ارسال
                </Button>
              </div>
            </Form>
            <Modal
              visible={this.state.passwordMsg}
              closable={false}
              footer={false}
            >
              <div className="success-modal">
                <i
                  className="fa fa-check-circle check-icon"
                  aria-hidden="true"
                ></i>
                <h2>تم ارسال لك بريد الكتروني لاعادة تفعيل الحساب</h2>
                <button onClick={() => this.props.history.push('/user/login')}>
                  حسناً
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const ReactivateAccount = Form.create({ name: 'UserLoginForm' })(
  UserReactivateAccount
);

export default ReactivateAccount;
