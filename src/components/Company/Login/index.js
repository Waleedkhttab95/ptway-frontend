import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { companyLogin } from '../../../store/actions/userAction';
import Footer from '../../Footer';
class CompanyLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { login } = this.props;
        const { email, password } = values;
        await login({
          email,
          password
        });
        const { history } = this.props;
        history.push('/company/home');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { company } = this.props;

    return (
      <div className="company-login-container">
        <div className="form-container">
          <h3 className="login-form-title">تسجيل دخول</h3>
          <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
            {company.error && (
              <Alert type="error" message={company.error.response.data} />
            )}
            <label className="login-form-label">البريد الالكتروني</label>
            <Form.Item>
              {getFieldDecorator('email', {
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
              ليس لديك حساب؟ <Link to="/company/signup">انشئ حساب جديد</Link>
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
const mapStateToProps = ({ user }) => {
  return {
    company: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: params => dispatch(companyLogin(params))
  };
};
const CompanyLogin = Form.create({ name: 'CompanyLoginForm' })(
  CompanyLoginForm
);
export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogin);
