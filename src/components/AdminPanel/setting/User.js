import React from 'react';
import { Row, Input, Button, Alert } from 'antd';
import userSetting from '../../../services/adminSetting/user';
import _ from 'lodash';
import './setting.scss';

const { activateAccounts, addSubAdmin } = userSetting;
class UserSetting extends React.Component {
  state = {
    status: false
  };
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
    const { newSubAdmin } = this.state;
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
