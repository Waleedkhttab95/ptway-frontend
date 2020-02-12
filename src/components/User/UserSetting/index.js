import React from 'react';
import './style.scss';
import { Col, Input, Radio } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import {
  changePassword,
  changeEmailNotification
} from '../../../store/actions/user/setting';
class Setting extends React.Component {
  state = {
    status: 1
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  submitChanges = async () => {
    const { updatePassword, updateEmailNotification } = this.props;
    const { prevPassword, newPassword, status } = this.state;
    const data = {
      prevPassword,
      newPassword
    };
    updatePassword(data);

    updateEmailNotification({
      status: status === 'نعم' ? 'true' : 'false'
    });
  };

  componentDidUpdate() {
    const { history } = this.props;
    if (this.props.userSetting.newPassword === 'غيّرنا لك الرقم السري') {
      history.push('/user/home');
    } else {
      console.log('fail');
    }
  }
  render() {
    console.log('state', this.state);
    const { userSetting } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="user-container setting-mob">
          <div className="setting-body">
            <div className="setting-container">
              <Col className="account-info">
                <h4 className="heading">تعديل معلومات الحساب</h4>
                <div className="account-fields">
                  {/* <span>البريد الالكتروني</span>
                <Input className="account-input" type="email" /> */}
                  <span>كلمة المرور</span>
                  <Input
                    className="account-input"
                    type="password"
                    name="prevPassword"
                    onChange={this.handleChange}
                  />
                  <span style={{ color: 'red', marginTop: '5px' }}>
                    {userSetting.passwordError && this.state.prevPassword
                      ? userSetting.passwordError.response.data
                      : ''}
                  </span>
                  <span>تأكيد كلمة المرور</span>
                  <Input
                    className="account-input"
                    type="password"
                    name="newPassword"
                    onChange={this.handleChange}
                  />
                </div>
              </Col>
              <Col className="account-options">
                <h4 className="heading">خيارات الحساب</h4>
                <div className="email-setting">
                  <h6>ارسال الاشعارات عن طريق الايميل</h6>
                  <div className="checkbox-options">
                    <Radio.Group
                      onChange={this.handleChange}
                      value={this.state.status}
                      name="status"
                      options={['نعم', 'لا']}
                      className="check-option"
                    />
                    {/* <Checkbox className="check-option">نعم</Checkbox>
                <Checkbox className="check-option">لا</Checkbox> */}
                  </div>
                </div>
              </Col>
            </div>
            <button className="save-setting-btn" onClick={this.submitChanges}>
              حفظ التعديلات
            </button>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ userSetting }) => {
  return {
    userSetting
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePassword: params => dispatch(changePassword(params)),
    updateEmailNotification: params => dispatch(changeEmailNotification(params))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
