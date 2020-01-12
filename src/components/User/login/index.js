import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
class UserLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      const { history } = this.props;
      history.push('/user/home');
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user-login-container">
        <div className="form-container">
          <h3 className="login-form-title">تسجيل دخول</h3>
          <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
            <label className="login-form-label">البريد الالكتروني</label>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'الرجاء ادخال البريد الالكتروني' }
                ]
              })(<Input prefix={<Icon />} />)}
            </Form.Item>
            <label className="login-form-label">كلمة المرور</label>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'الرجاء ادخال كلمة المرور' }]
              })(<Input prefix={<Icon />} type="password" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>تذكرني</Checkbox>)}
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
        <div style={{ width: '100%' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

const UserLogin = Form.create({ name: 'UserLoginForm' })(UserLoginForm);
export default UserLogin;
