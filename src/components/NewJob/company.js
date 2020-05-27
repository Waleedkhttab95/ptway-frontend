import React from 'react';
import { Select, Input, Radio, Modal } from 'antd';
import './style.scss';
import LoginNavbar from '../Header/LoginNavbar';
import Footer from '../Footer';
import TempForm from '../../services/newForm';
import statatisticsService from '../../services/statisticsService';
import _ from 'lodash';
const { allCities } = statatisticsService;

const { getCompanyNewJob } = TempForm;
export class CompanyNewJob extends React.Component {
  state = {
    visible: false,
    error: false,
    cities: '',
    jobTitle: []
  };
  async componentDidMount() {
    const cities = await allCities();
    this.setState({
      cities
    });

  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = (value, option) => {
    this.setState({
      [option.props.name]: option.key
    });
  };

  handleMultiSelectChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      jobTitle: ids
    });
  };

  send = async e => {
    e.preventDefault();
    const {
      jobTitle,
      city,
      name,
      email,
      mobile,
      companySize,
      companyName,
      companySector,
      companyType,
      companyInfo,
      companyWebsite,
      YearsOfExperience,
      contract
    } = this.state;
    if (
      jobTitle.length == 0 ||
      jobTitle.length > 3 ||
      !city ||
      !name ||
      !email ||
      !mobile ||
      !companySize ||
      !companyName ||
      !companySector ||
      !companyType ||
      !companyInfo ||
      !YearsOfExperience ||
      !contract
    ) {
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
    const CompanySize = [
      '1-10',
      '11-50',
      '101-250',
      '251-500',
      '501-1000',
      '1000+'
    ];
    const {
      cities,
      city,
      error,
      name,
      email,
      mobile,
      remobile,
      jobTitle,
      companySize,
      companyName,
      companySector,
      companyType,
      companyInfo,
      companyWebsite,
      YearsOfExperience,
      contract
    } = this.state;
    const sectors = ['حكومي', ' خاص', ' غير  ربحي'];
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <form className="new-job-form">
            <h2 className="title">سجل معنا</h2>
            
            <h4>اسم الشركة:</h4>
            <Input onChange={this.handleChange} name="companyName" />
            {error && !companyName && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            {/* <h4>
              موقع الشركة:{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
                مثال: مدينة الرياض، حي الملك فهد.
              </span>
            </h4>
            <Input onChange={this.handleChange} name="companyLocation" />
            {error && !companyLocation && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )} */}
            <h4>القطاع:</h4>
            <Select className="select" onChange={this.handleSelectChange}>
              {sectors.map(elm => (
                <Select.Option value={elm} key={elm} name="companySector">
                  {' '}
                  {elm}
                </Select.Option>
              ))}
            </Select>
            {error && !companySector && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>
              المجال :{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
               مثال : تقني , موارد بشرية , تجزئة 
              </span>
            </h4>

            <Input onChange={this.handleChange} name="companyType" />
            {error && !companyType && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>حجم الشركة:</h4>
            <Select className="select" onChange={this.handleSelectChange}>
              {CompanySize.map(elm => (
                <Select.Option value={elm} key={elm} name="companySize">
                  {' '}
                  {elm}
                </Select.Option>
              ))}
            </Select>
            {error && !companySize && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
         
         <h4>
              موقع الشركة الإلكتروني :{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
               (URL) 
              </span>
            </h4>
            <Input onChange={this.handleChange} name="companyWebsite" />
         
            <h4>

            <h4>اسم المسؤول الثلاثي :</h4>
            <Input onChange={this.handleChange} name="name" />
            {error && !name && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>البريد الإلكتروني:</h4>
            <Input onChange={this.handleChange} name="email" />
            {error && !email && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
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
            {error && !mobile && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>تأكيد رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="remobile" />
            {mobile !== remobile && remobile && mobile && (
              <span style={{ color: 'red' }}>رقم الجوال غير متطابق</span>
            )}
            <h4>المدينة:</h4>
            <Select className="select" onChange={this.handleSelectChange}>
              {_.isArray(cities)
                ? cities.map(elm => {
                    return (
                      <Select.Option value={elm.value} key={elm.id} name="city">
                        {elm.value}
                      </Select.Option>
                    );
                  })
                : ''}
            </Select>
            {error && !city && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
              المسمى الوظيفي المطلوب:{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
                يمكنك اختيار 3 فقط
              </span>

              <Select
              className="select"
              onChange={this.handleMultiSelectChange}
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
            {jobTitle && jobTitle.length > 3 && (
              <span style={{ color: 'red' }}>يمكنك اختيار 3 خيارات فقط</span>
            )}
            {error && jobTitle.length == 0 && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            </h4>

            <h4>الوصف الوظيفي :</h4>
            <Input.TextArea
              row={6}
              onChange={this.handleChange}
              name="companyInfo"
            />
            {error && !companyInfo && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}

         
            <h4>عدد سنوات الخبرة؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="YearsOfExperience"
            >
              <Radio.Button value="0-1">0 - 1 سنة </Radio.Button>
              <Radio.Button value="2-4">2 - 4 سنوات</Radio.Button>
              <Radio.Button value="5-7">5 - 7 سنوات</Radio.Button>
              <Radio.Button value="+8">8+</Radio.Button>
            </Radio.Group>
            {error && !YearsOfExperience && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>نوع العقد: </h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="contract"
            >
              <Radio.Button value="full-time">Full-time</Radio.Button>
              <Radio.Button value="part-time">Part-time</Radio.Button>
              <Radio.Button value="part-time">Temporary</Radio.Button>

            </Radio.Group>
            {error && !contract && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
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
