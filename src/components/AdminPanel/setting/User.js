import React from 'react';
import { Row, Input, Button, Alert, Cascader } from 'antd';
import _ from 'lodash';
import './setting.scss';
import userSetting from '../../../services/adminSetting/user';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import statatisticsService from '../../../services/statisticsService';

const { allCities, allMajors } = statatisticsService;
const { activateAccounts, addSubAdmin, exportCityMajorData } = userSetting;
class UserSetting extends React.Component {
  state = {
    status: false,
    ready: false
  };

  async componentDidMount() {
    const majors = await allMajors();
    this.setState({ majors });
    const cities = await allCities();
    this.setState({
      cities
    });
  }

  handleStatus = async () => {
    const activate = await activateAccounts();
    if (activate === 'Updated') alert('تم تفعيل جميع الحسابات');
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  cityChange = (value, selectedOptions) => {
    this.setState({
      city: selectedOptions[0].id
    });
  };

  majorChange = (value, selectedOptions) => {
    this.setState({
      major: selectedOptions[0].id
    });
  };

  exportCityMajorData = async () => {
    const { city, major } = this.state;
    await exportCityMajorData({
      city,
      major
    });
    this.setState({ ready: true });
  };
  addSubAdmin = async () => {
    const { firstName, lastName, email, password } = this.state;
    const newSubAdmin = await addSubAdmin({
      firstName,
      lastName,
      email,
      password
    });
    this.setState({
      newSubAdmin
    });
  };
  render() {
    const { newSubAdmin, majors, cities, ready, excelData } = this.state;
    return (
      <React.Fragment>
        <Row>
          <div className="activate-accounts-setting">
            <label>تفعيل جميع الحسابات</label>
            {/* <Switch
              onChange={this.handleStatusChange}
              checked={status}
              name="status"
              className="setting-switch"
            /> */}
            <Button
              onClick={this.handleStatus}
              name="status"
              className="activate-user-btn"
            >
              {' '}
              تفعيل
            </Button>
          </div>
        </Row>
        <Row>
          <div className="export-city-major-data">
            <h3 className="title">تصدير بيانات المدن والتخصص</h3>
            <Cascader
              className="dropdown-menu"
              options={majors}
              onChange={this.majorChange}
              placeholder=" التخصص العام"
            />
            <Cascader
              className="dropdown-menu"
              options={cities}
              onChange={this.cityChange}
              placeholder="اختر المدينة"
            />
            <Button onClick={this.exportCityMajorData}> Download as XLS</Button>
            {ready && (
              <div>
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="tablexls"
                  sheet="tablexls"
                  buttonText="ready to export"
                />
                <table id="table-to-xls" style={{ display: 'none' }}>
                  <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>number</th>
                  </tr>
                  {excelData
                    ? excelData.map(elm => {
                        return (
                          <tr key={elm.number}>
                            <td>{elm.name ? elm.name : ''}</td>
                            <td>{elm.number ? elm.number : ''}</td>
                          </tr>
                        );
                      })
                    : ''}
                </table>
              </div>
            )}
          </div>
        </Row>
        <Row>
          <div className="add-admin">
            {_.isObject(newSubAdmin) && (
              <Alert message="تمت الاضافة بنجاح"></Alert>
            )}
            <h3 className="new-admin-title">اضافة مسؤول جديد</h3>
            <div className="admin-information">
              <Input
                placeholder="الاسم الأول"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="admin-information">
              <Input
                placeholder="الاسم الأخير"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="admin-information">
              <Input
                placeholder="البريد الالكتروني"
                onChange={this.handleChange}
                name="email"
              />
            </div>
            <div className="admin-information">
              <Input
                placeholder="رقم المرور"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <Button className="add-admin-button" onClick={this.addSubAdmin}>
              ارسال
            </Button>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default UserSetting;
