import React from 'react';
import { Select, Input, Radio, Modal } from 'antd';
import './style.scss';
import LoginNavbar from '../../Header/LoginNavbar';
import Footer from '../../Footer';
import statatisticsService from '../../../services/statisticsService';
import TempForm from '../../../services/newForm';
import _ from 'lodash';
import deliveryComp from '../../../images/deliveryComp.svg';
const { allCities } = statatisticsService;
const { deliveryCompany } = TempForm;

export class CompanyJobs extends React.Component {
  state = {
    cities: '',
    error: false,
    visible: false
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
      ...this.state,
      [option.props.name]: option.key
    });
  };

  handleMultipleSelectChange = e => {
    const { value } = e.target;
    this.setState({
      //   jobType: [value]
      jobType: value
    });
  };

  send = async e => {
    e.preventDefault();
    const {
      name,
      supervisor,
      supervisorNumber,
      email,
      city,
      jobType,
      requiredStaff
    } = this.state;
    if (
      !name ||
      !supervisor ||
      !supervisorNumber ||
      !email ||
      !city ||
      jobType ||
      !requiredStaff
    ) {
      this.setState({
        error: true
      });
    } else {
      await deliveryCompany(this.state);
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
    const {
      cities,
      name,
      supervisor,
      supervisorNumber,
      email,
      city,
      jobType,
      requiredStaff,
      error
    } = this.state;

    console.log('state', this.state);
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <form className="new-job-form">
            <h2 className="title">سجل معنا</h2>
            <h4>اسم الشركة:</h4>
            <Select className="select" onChange={this.handleSelectChange}>
              <Select.Option value="xx" key="xx" name="name">
                xx
              </Select.Option>
            </Select>
            {error && !name && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <h4>أن لم تجد شركتك، اكتبها هنا:</h4>
            <Input onChange={this.handleChange} name="company" />
            <h4>اسم المسؤول:</h4>
            <Input name="supervisor" onChange={this.handleChange} />
            {error && !supervisor && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <h4>رقم جوال المسؤول:</h4>
            <Input name="supervisorNumber" onChange={this.handleChange} />
            {error && !supervisorNumber && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <h4>البريد الإلكتروني:</h4>
            <Input onChange={this.handleChange} name="email" />
            {error && !email && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <h4>المنطقة:</h4>
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
            <h4>
              نوع الوظيفة:{' '}
              <span style={{ color: 'gray', fontSize: '16px' }}>
                يمكنك اختيار أكثر من خيار
              </span>
            </h4>
            <Radio.Group
              className="radio-select"
              name="jobType"
              onChange={this.handleMultipleSelectChange}
              mode="multiple"
            >
              <Radio.Button value="موصل طلبات">موصل طلبات</Radio.Button>
              <Radio.Button value="موصل طرود">موصل طرود</Radio.Button>
              <Radio.Button value="متسوق">متسوق</Radio.Button>
            </Radio.Group>
            {error && !jobType && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <h4>عدد الموظفين المطلوب:</h4>
            <Input name="requiredStaff" onChange={this.handleChange} />
            {error && !requiredStaff && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <button onClick={this.send}>ارسال</button>
          </form>
        </div>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={false}
        >
          <div className="success-modal">
            <img src={deliveryComp} />
            <h2>
              تم استلام طلبك، وسيتم التواصل معك في حال إيجاد مرشحين مناسبين.
            </h2>
            <br />
            <h3 style={{ color: '#049ad0' }}>
              في حال لم تكن مسجل معنا، سجل الآن!
            </h3>
            <br />
            <button>
              <a href="https://www.ptway.net/user/login">
                <span className="coloor">سجل في PTway</span>
              </a>
            </button>
          </div>
        </Modal>
        <Footer />
      </React.Fragment>
    );
  }
}
