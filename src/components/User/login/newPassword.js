import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Modal } from 'antd';
import queryString from 'query-string';
import Footer from '../../Footer';
import userFeatures from '../../../services/userServices';
const { setNewPassword } = userFeatures;

class UserResetPassword extends React.Component {
  state = {
    passwordMsg: false
  };
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
        console.log('Received values of form: ', values);
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
      <div className="user-login-container">
        <div className="form-container" style={{ marginTop: '-80px' }}>
          <h3 className="login-form-title">اعادة تعين كلمة المرور</h3>
          <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
            <label className="login-form-label">
              {' '}
              ادخل كلمة المرور الجديدة
            </label>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'الرجاء ادخال البريد الالكتروني' }
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
              <h2>تم ارسال لك بريد الكتروني لاعادة تعيين كلمة المرور</h2>
              <button onClick={() => this.props.history.push('/user/login')}>
                تم
              </button>
            </div>
          </Modal>
        </div>
        <div style={{ width: '100%', position: 'absolute', bottom: '0' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

const UserResetNewPassword = Form.create({ name: 'UserLoginForm' })(
  UserResetPassword
);

export default UserResetNewPassword;
