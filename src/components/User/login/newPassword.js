import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button } from 'antd';
import queryString from 'query-string';
import Footer from '../../Footer';
import userFeatures from '../../../services/userServices';
import LoginNavbar from '../../Header/LoginNavbar';
const { setNewPassword } = userFeatures;

class UserSetNewPassword extends React.Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({
      id: values.id
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { password } = values;
        const { id } = this.state;
        await setNewPassword({
          id,
          password
        });
        const { history } = this.props;
        history.push('/');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="user-login-container">
          <div className="form-container">
            <h3 className="login-form-title">اعادة تعين كلمة المرور</h3>
            <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
              <label className="login-form-label">
                {' '}
                ادخل كلمة المرور الجديدة
              </label>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'الرجاء ادخال كلمة المرور'
                    }
                  ]
                })(<Input prefix={<Icon />} type="password" />)}
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
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const SetNewPassword = Form.create({ name: 'UserLoginForm' })(
  UserSetNewPassword
);

export default SetNewPassword;
