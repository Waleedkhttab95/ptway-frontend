import React from 'react';
import { Modal, Input } from 'antd';
import settings from '../../../services/company/setting';
import _ from 'lodash';

const { getSubUsers, switchSubUsers, newSubUser } = settings;

class Tab2 extends React.Component {
  state = {
    subaccountModal: false,
    subUsers: ''
  };
  async componentDidMount() {
    const subUsers = await getSubUsers();
    this.setState({
      subUsers
    });
  }
  addSubAccount = () => {
    this.setState({
      subaccountModal: true
    });
  };
  switchSubUsers = async userId => {
    await switchSubUsers(userId);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  addNewSubAccount = async () => {
    const { firstName, lastName, email, password } = this.state;
    const data = {
      firstName,
      lastName,
      email,
      password
    };
    await newSubUser(data);
    this.setState({ subaccountModal: false });
  };
  render() {
    const { subUsers } = this.state;
    console.log('subUsers', subUsers);

    return (
      <React.Fragment>
        <div className="sub-accounts">
          <div>
            <div style={{ position: 'relative' }}>
              <input
                className="jobs-search search-mob"
                placeholder="بحث"
                style={{ marginRight: '0' }}
              />
              <i
                className="fa fa-search jobs-search-icon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div>
            <span className="filter-title">الترتيب :</span>
            <input placeholder="الاحدث" className="filter-input" />
          </div>
          <button className="sub-account-btn" onClick={this.addSubAccount}>
            أضف حساب فرعي
          </button>
          <Modal
            visible={this.state.subaccountModal}
            closable={false}
            footer={false}
          >
            <div className="new-sub-acc">
              <h3>أضف حساب فرعي جديد</h3>
              <p>
                ستقوم بإضافة جميع المعلومات للحساب الفرعي الجديد وإضافته للقائمة
              </p>
              <div className="new-sub-form">
                <div>
                  <label>الاسم الأول</label>
                  <Input name="firstName" onChange={this.handleChange} />
                  <label>البريد الالكتروني</label>
                  <Input
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                  />
                </div>
                <div>
                  <label>الاسم الأخير</label>
                  <Input name="lastName" onChange={this.handleChange} />
                  <label>كلمة المرور</label>
                  <Input
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                  />
                </div>
              </div>
              <button
                className="sub-account-btn"
                onClick={this.addNewSubAccount}
              >
                أضف حساب فرعي
              </button>
            </div>
          </Modal>
        </div>
        <div className="sub-accounts-header">
          <h3>الاسم</h3>
          <h3>البريد الالكتروني</h3>
          <h3>ايقاف</h3>
        </div>
        {_.isArray(subUsers.users)
          ? subUsers.users.map((elm, index) => {
              return (
                <div
                  className={index % 2 == 0 ? 'sub-account' : 'sub-account-odd'}
                  key={elm._id}
                >
                  <h3>{elm.firstName + '   ' + elm.lastName}</h3>
                  <h3>{elm.email}</h3>
                  <h3 onClick={() => this.switchSubUsers(elm._id)}>
                    <i
                      className="fa fa-lock"
                      aria-hidden="true"
                      style={{ cursor: 'pointer' }}
                    ></i>
                  </h3>
                </div>
              );
            })
          : ''}
      </React.Fragment>
    );
  }
}
export default Tab2;
