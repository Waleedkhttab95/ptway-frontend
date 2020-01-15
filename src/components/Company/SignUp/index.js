import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import statatisticsService from '../../../services/statisticsService';

const { getAllCompanyMajors, getCompanySMajor } = statatisticsService;
const { Option } = Select;

class CompanySignupForm extends React.Component {
  state = {
    sectors: [],
    jobTypes: []
  };
  componentDidMount = async () => {
    const sectors = await getAllCompanyMajors();
    const jobTypes = await getCompanySMajor();
    this.setState({
      sectors,
      jobTypes
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { history } = this.props;
        history.push('/company/home');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { jobTypes, sectors } = this.state;
    return (
      <div className="company-signup-container">
        <div className="form-container">
          <h3 className="login-form-title">انشاء حساب جديد</h3>
          <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
            <label className="login-form-label">اسم الجهة</label>
            <Form.Item>
              {getFieldDecorator('companyname', {
                rules: [{ required: true, message: 'الرجاء ادخال اسم الجهة' }]
              })(<Input prefix={<Icon />} />)}
            </Form.Item>
            <label className="login-form-label">البريد الالكتروني</label>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'الرجاء ادخال البريد الالكتروني' }
                ]
              })(<Input prefix={<Icon />} />)}
            </Form.Item>
            <label className="login-form-label">نشاط العمل</label>
            <Form.Item>
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'الرجاء ادخال نشاط العمل' }]
              })(
                <Select style={{ width: '402px' }}>
                  {jobTypes.map(elm => {
                    return (
                      <Option value={elm.id} key={elm.id}>
                        {elm.value}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Form.Item>
            <label className="login-form-label">القطاع</label>
            <Form.Item>
              {getFieldDecorator('sector', {
                rules: [{ required: true, message: 'الرجاء ادخال قطاع العمل' }]
              })(
                <Select style={{ width: '402px' }}>
                  {sectors.map(elm => {
                    return (
                      <Option value={elm.id} key={elm.id}>
                        {elm.value}
                      </Option>
                    );
                  })}
                </Select>
              )}
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
              })(<Checkbox>الموافقة على الشروط والأحكام</Checkbox>)}
            </Form.Item>
            <div className="login-btn-cont">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login-form-btn"
              >
                ابدأ الآن
              </Button>
            </div>
            <div className="create-new-account">
              لديك حساب؟ <Link to="/company/login">تسجيل دخول</Link>
            </div>
          </Form>
        </div>
        <div style={{ width: '100%' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

const CompanyRegistration = Form.create({ name: 'CompanySignupForm' })(
  CompanySignupForm
);
export default CompanyRegistration;
