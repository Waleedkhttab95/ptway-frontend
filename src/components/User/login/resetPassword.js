import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import Footer from '../../Footer';
import { resetPassword } from '../../../store/actions/userAction';
import LoginNavbar from '../../Header/LoginNavbar';

class UserResetPassword extends React.Component {
  state = {
    passwordMsg: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username } = values;
        const { userResetPassword } = this.props;
        await userResetPassword({
          email: username
        });
        await this.setState({
          passwordMsg: true
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;

    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="user-login-container">
          <div className="form-container">
            <h3 className="login-form-title">اعادة تعين كلمة المرور</h3>
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
                {user.response && (
                  <span style={{ color: 'red' }}>{user.response.data}</span>
                )}
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
                <h2>تم ارسال لك بريد الكتروني لاعادة تعيين كلمة المرور</h2>
                <button onClick={() => this.props.history.push('/user/login')}>
                  تم
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

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userResetPassword: params => dispatch(resetPassword(params))
  };
};

const ResetPassword = Form.create({ name: 'UserLoginForm' })(UserResetPassword);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
