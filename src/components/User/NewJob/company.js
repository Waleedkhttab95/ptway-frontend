import React from 'react';
import { Select, Input, Radio } from 'antd';
import './style.scss';
import LoginNavbar from '../../Header/LoginNavbar';
import Footer from '../../Footer';
import statatisticsService from '../../../services/statisticsService';
import TempForm from '../../../services/newForm';
import _ from 'lodash';
const { allCities } = statatisticsService;
const { deliveryCompany } = TempForm;

export class CompanyJobs extends React.Component {
  state = {
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
    await deliveryCompany(this.state);
  };

  render() {
    const { cities } = this.state;
    console.log('state', this.state);

    return (
      <React.Fragment>
        <LoginNavbar />
        <form className="new-job-form">
          <h2 className="title">سجل معنا</h2>
          <h4>اسم الشركة:</h4>
          <Select className="select" onChange={this.handleSelectChange}>
            <Select.Option value="xx" key="xx" name="name">
              xx
            </Select.Option>
          </Select>
          <h4>أن لم تجد شركتك، أكتبها هنا:</h4>
          <Input onChange={this.handleChange} name="company" />
          <h4>أسم المسؤول:</h4>
          <Input name="supervisor" onChange={this.handleChange} />
          <h4>رقم جوال المسؤول:</h4>
          <Input name="supervisorNumber" onChange={this.handleChange} />
          <h4>البريد الإلكتروني:</h4>
          <Input onChange={this.handleChange} name="email" />
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
          <h4>
            نوع الوظيفة:{' '}
            <span style={{ color: 'gray' }}>يمكنك اختيار أكثر من خيار</span>
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
          <h4>عدد الموظفين المطلوب:</h4>
          <Input name="requiredStaff" onChange={this.handleChange} />
          <button onClick={this.send}>ارسال</button>
        </form>
        <Footer />
      </React.Fragment>
    );
  }
}
