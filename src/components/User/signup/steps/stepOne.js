import React from 'react';
import { Select } from 'antd';
import countryIcon from '../../../../images/home-country-icon.svg';

const { Option } = Select;
class step1Form extends React.Component {
  render() {
    return (
      <div className="steps-form">
        <div className="form-content">
          <img src={countryIcon} />
          <span className="f-title">الدولة ومكان السكن</span>
          <span className="line"></span>
          <div className="form-fields">
            <label className="info-label">الدولة</label>
            <Select
              //   placeholder="الدولة"
              onChange={this.handleSelectChange}
              className="country-text"
            >
              <Option value="male">المملكة العربية السعودية</Option>
              {/* <Option value="female">female</Option> */}
            </Select>
            <label className="info-label">المدينة</label>
            <Select
              //   placeholder="المدينة"
              onChange={this.handleSelectChange}
              className="country-text"
            >
              <Option value="الرياض">الرياض</Option>

              <Option value="الدماما">الدمام</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}

export default step1Form;
