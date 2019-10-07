import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
// import history from '../../_core/history'
import './index.scss'
class Login extends Component {

  handleSubmit =  (e) => {
    e.preventDefault();
    const { history } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
        const {adminLogin}=this.props;
        adminLogin({
          email: values.email,
          password: values.password
        })  
        
    }); 
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (

        <Row className='login-form'>
          <Col md={8} xs={20}>  
      <Form onSubmit= {this.handleSubmit } > 
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'الرجاء ادخال اسم المستخدم' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="اسم المستخدم"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'الرجاء ادخال كلمة المرور' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="كلمة المرور"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>تذكرني</Checkbox>)} */}
          <a className="login-form-forgot" href="">
            نسيت كلمة المرور؟
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            تسجيل الدخول
          </Button>
           <a href="">سجل الآن!</a>
        </Form.Item>
      </Form>
      </Col>
          </Row>
    );
  }
}

export default Login = Form.create({ name: 'normal_login' })(Login);

