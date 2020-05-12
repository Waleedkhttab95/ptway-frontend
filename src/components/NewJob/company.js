import React from 'react';
import { Select, Input, Radio } from 'antd';
import './style.scss';
import LoginNavbar from '../Header/LoginNavbar';
import Footer from '../Footer';
import TempForm from '../../services/newForm';
const { getCompanyNewJob } = TempForm;
export class CompanyNewJob extends React.Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSelectChange = (value, option) => {
    this.setState({
      jobTitle: value
    });
  };

  send = async e => {
    e.preventDefault();
    await getCompanyNewJob(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <form className="new-job-form">
            <h2 className="title">سجل معنا</h2>
            <h4>الإسم الثلاثي:</h4>
            <Input onChange={this.handleChange} name="name" />
            <h4>البريد الإلكتروني:</h4>
            <Input onChange={this.handleChange} name="email" />
            <h4>تأكيد البريد الالكتروني:</h4>
            <Input onChange={this.handleChange} name="re-email" />
            <h4>رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="mobile" />
            <h4>تأكيد رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="remobile" />
            <h4>اسم الشركة:</h4>
            <Input onChange={this.handleChange} name="companyName" />
            <h4>
              موقع الشركة:{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
                مثال: مدينة الرياض، حي الملك فهد.
              </span>
            </h4>
            <Input onChange={this.handleChange} name="companyLocation" />
            <h4>القطاع:</h4>
            <Input onChange={this.handleChange} name="companySector" />
            <h4>المجال:</h4>
            <Input onChange={this.handleChange} name="companyType" />
            <h4>حجم الشركة:</h4>
            <Select className="select" onChange={this.handleSelectChange}>
              <Select.Option value="xx"> xx</Select.Option>
            </Select>
            <h4>وصف الشركة:</h4>
            <Input.TextArea
              row={4}
              onChange={this.handleChange}
              name="companyInfo"
            />

            <h4>موقع الشركة الالكتروني:</h4>
            <Input onChange={this.handleChange} name="companyWebsite" />

            <h4>
              المسمى الوظيفي المطلوب:{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
                يمكنك اختيار 3 فقط
              </span>
            </h4>
            <Select className="select" onChange={this.handleSelectChange}>
              <Select.Option value="xx" name="jobTitle">
                {' '}
                xx
              </Select.Option>
            </Select>
            <h4>عدد سنوات الخبرة؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="YearsOfExperience"
            >
              <Radio.Button value="0-1">0 - سنة</Radio.Button>
              <Radio.Button value="2-4">2 - 4 سنوات</Radio.Button>
              <Radio.Button value="5-7">5 - 7 سنوات</Radio.Button>
              <Radio.Button value="+8">8+</Radio.Button>
            </Radio.Group>

            <h4>نوع العقد: </h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="contract"
            >
              <Radio.Button value="full-time">Full-time</Radio.Button>
              <Radio.Button value="part-time">Part-time</Radio.Button>
            </Radio.Group>
            <button onClick={this.send}>ارسال</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
