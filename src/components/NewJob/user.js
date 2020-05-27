import React from 'react';
import { Select, Input, Radio, Modal } from 'antd';
import './style.scss';
import LoginNavbar from '../Header/LoginNavbar';
import Footer from '../Footer';
import { UploadCV } from './UploadCV';
import TempForm from '../../services/newForm';
import statatisticsService from '../../services/statisticsService';
import _ from 'lodash';

const { allCities } = statatisticsService;
const { getUserNewJob } = TempForm;

export class UserNewJob extends React.Component {
  state = {
    visible: false,
    error: false,
    jobTitle: [],
    cities: ''
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

  handleMultiSelectChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      jobTitle: ids
    });
  };

  handleSelectChange = (value, option) => {
    this.setState({
      [option.props.name]: option.key
    });
  };

  send = async e => {
    e.preventDefault();
    const {
      jobTitle,
      name,
      gender,
      mobile,
      email,
      lastCompany,
      lastJobPosition,
      Experience,
      YearsOfExperience,
      WorkingOutOfCity,
      Linkedin,
      Cv,
      reMobile
    } = this.state;
    if (
      jobTitle.length > 3 ||
      jobTitle.length == 0 ||
      !name ||
      !gender ||
      !mobile ||
      !email ||
      !lastCompany ||
      !lastJobPosition ||
      !Experience ||
      !YearsOfExperience ||
      !WorkingOutOfCity ||
      !Linkedin ||

      !Cv 

    ) {
      this.setState({
        error: true
      });
    } else {
      await getUserNewJob(this.state);
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
    const {
      error,
      cities,
      city,
      jobTitle,
      name,
      gender,
      mobile,
      email,
      lastCompany,
      lastJobPosition,
      Experience,
      YearsOfExperience,
      WorkingOutOfCity,
      Linkedin,
      Cv,
      reMobile
    } = this.state;

    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <form className="new-job-form">
            <h2 className="title">سجل معنا</h2>
            <h4>الإسم الثلاثي:</h4>
            <Input onChange={this.handleChange} name="name" />
            {error && !name && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>الجنس:</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="gender"
            >
              <Radio.Button value="ذكر">ذكر</Radio.Button>
              <Radio.Button value="أنثى">أنثى</Radio.Button>
            </Radio.Group>
            {error && !gender && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>البريد الإلكتروني:</h4>
            <Input onChange={this.handleChange} name="email" />
            {error && !email && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="mobile" />
            {error && !mobile && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>تأكيد رقم الجوال:</h4>
            <Input onChange={this.handleChange} name="reMobile" />
            {mobile !== reMobile && reMobile && mobile && (
              <span style={{ color: 'red' }}>رقم الجوال غير متطابق</span>
            )}
            {error && !reMobile && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
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
            <h4>شركتك السابقة؟</h4>
            <Input onChange={this.handleChange} name="lastCompany" />
            {error && !lastCompany && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>المسمى الوظيفي السابق:</h4>
            <Input onChange={this.handleChange} name="lastJobPosition" />
            {error && !lastJobPosition && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>
              الوظيفة المرغوبة:{' '}
              <span style={{ color: '#d0d0d0', fontSize: '20px' }}>
                يمكنك اختيار 3 فقط
              </span>
            </h4>
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
            {jobTitle.length > 3 && jobTitle && (
              <span style={{ color: 'red' }}>يمكنك اختيار 3 خيارات فقط</span>
            )}
            {error && jobTitle.length == 0 && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>هل تملك خبرة؟ </h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="Experience"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            {error && !Experience && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>عدد سنوات الخبرة؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="YearsOfExperience"
            >
              <Radio.Button value="0-1">0 - 1 سنة</Radio.Button>
              <Radio.Button value="2-4">2 - 4 سنوات</Radio.Button>
              <Radio.Button value="5-7">5 - 7 سنوات</Radio.Button>
              <Radio.Button value="+8">8+</Radio.Button>
            </Radio.Group>
            {error && !YearsOfExperience && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>هل يمكنك العمل خارج مدينتك؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="WorkingOutOfCity"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            {error && !WorkingOutOfCity && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>حسابك الشخصي في Linkedin:</h4>
            <Input onChange={this.handleChange} name="Linkedin" />
            {error && !Linkedin && (
              <span style={{ color: 'red' }}> هذا الحقل مطلوب</span>
            )}
            <h4>حمل سيرتك الذاتية:</h4>
            <Input
              suffix={<UploadCV updateState={Cv => this.setState({ Cv })} />}
              className="upload-file-input"
            />
            {error && !Cv && (
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
            <h2>تم تسجيلك في المبادرة، وسيتم التواصل معك في حال ترشيحك.</h2>
            <br />
            <h3 style={{ color: '#049ad0' }}>
              في حال لم تكن مسجل معنا، سجل الآن!
            </h3>
            <br />
            <button>
              <a href="https://www.ptway.net/user/signup">
                <span className="coloor">سجل في PTway</span>
              </a>
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
