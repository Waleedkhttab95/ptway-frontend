import React from 'react';
import { Select, DatePicker } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';

const { Option } = Select;
class step2Form extends React.Component {
  render() {
    return (
      <div className="steps-form">
        <div className="form-content">
          <img src={personalInfoIcon} />
          <span className="f-title">معلومات شخصية</span>
          <span className="line"></span>
          <div className="form-fields">
            <label className="info-label">الجنس</label>
            <Select
              //   placeholder="الدولة"
              onChange={this.handleSelectChange}
              className="country-text"
            >
              <Option value="male">ذكر</Option>
              <Option value="female">أنثى</Option>
            </Select>
            <label className="info-label">تاريخ الميلاد</label>
            <DatePicker
              className="user-signup-datepicker"
              placeholder="اختر التاريخ"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default step2Form;
