import React from 'react';
import { Select, Input, Radio, Modal } from 'antd';
import './style.scss';
import LoginNavbar from '../Header/LoginNavbar';
import Footer from '../Footer';
import TempForm from '../../services/newForm';
const { getCompanyNewJob } = TempForm;
export class CompanyNewJob extends React.Component {
  state = {
    visible: false,
    error: false,
    jobTitle: []
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      jobTitle: ids
    });
  };

  send = async e => {
    e.preventDefault();
    const { jobTitle } = this.state;
    if (jobTitle.length > 3) {
      this.setState({
        error: true
      });
    } else {
      await getCompanyNewJob(this.state);
      this.setState({
        visible: true
      });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const jobs = [
      'Engineering',
      'Product',
      'Design',
      'Data Analytics',
      'Marketing',
      'Sales',
      'Customer Success',
      'Support',
      'Operations',
      'Finance / Accounting',
      'People / HR / Talent',
      'Legal',
      'IT',
      'Quality Assurance',
      'Retail / Service'
    ];
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
            <Input onChange={this.handleChange} name="reemail" />
            {this.state.email !== this.state.reemail &&
              this.state.email &&
              this.state.reemail && (
                <span style={{ color: 'red' }}>
                  البريد الالكتروني غير متطابق
                </span>
              )}
            <h4>رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="mobile" />
            <h4>تأكيد رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="remobile" />
            {this.state.mobile !== this.state.remobile &&
              this.state.remobile &&
              this.state.mobile && (
                <span style={{ color: 'red' }}>رقم الجوال غير متطابق</span>
              )}
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
            <Select
              className="select"
              onChange={this.handleSelectChange}
              mode="multiple"
              showArrow={true}
            >
              {jobs.map(elm => {
                return (
                  <Select.Option value={elm} key={elm} name="jobTitle">
                    {' '}
                    {elm}
                  </Select.Option>
                );
              })}
            </Select>
            {this.state.jobTitle && this.state.jobTitle.length > 3 && (
              <span style={{ color: 'red' }}>يمكنك اختيار 3 خيارات فقط</span>
            )}
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
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={false}
        >
          <div className="success-modal">
            <h2>تم استلام طلبك، وسيتم التواصل معك في حال إيجاد مرشح مناسب.</h2>
            <br />
            <h3 style={{ color: '#049ad0' }}>
              في حال لم تكن مسجل معنا، سجل الآن!
            </h3>
            <br />
            <button>
              <a href="https://www.ptway.net/company/signup">
                <span className="coloor">سجل في PTway</span>
              </a>
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
