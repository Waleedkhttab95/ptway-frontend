import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import { userLogin } from '../../../store/actions/userAction';
import Header from '../../Header';

class UserLoginForm extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;

        const { login } = this.props;
        await login({
          username,
          password
        });
        const { history } = this.props;
        history.push('/user/home');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header />

        <div className="user-login-container">
          <div className="form-container">
            <h3 className="login-form-title">تسجيل دخول</h3>
            <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
              <label className="login-form-label">البريد الالكتروني</label>
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
              <label className="login-form-label">كلمة المرور</label>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'الرجاء ادخال كلمة المرور' }
                  ]
                })(<Input prefix={<Icon />} type="password" />)}
                <Link to="/user/resetPassword">نسيت كلمة المرور؟</Link>
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>تذكرني</Checkbox>)}
                {user.loginError && user.loginError.response && (
                  <Alert message={user.loginError.response.data} type="error" />
                )}
              </Form.Item>
              {/* <Form.Item className="check-user-existance"> */}
              <div className="login-btn-cont">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button login-form-btn"
                >
                  تسجيل دخول
                </Button>
              </div>
              <div className="create-new-account">
                ليس لديك حساب؟ <Link to="/user/signup">انشئ حساب جديد</Link>
              </div>
              {/* </Form.Item> */}
            </Form>
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
    login: params => {
      return dispatch(userLogin(params));
    }
  };
};

const UserLogin = Form.create({ name: 'UserLoginForm' })(UserLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
