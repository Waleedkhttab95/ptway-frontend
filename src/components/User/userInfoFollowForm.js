import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Input, Select, DatePicker, Radio } from 'antd';
import statatisticsService from '../../services/statisticsService';
import _ from 'lodash';
import { connect } from 'react-redux';
import { userInfo } from '../../store/actions/userAction';
const { allCities, allMajors } = statatisticsService;

class UserInfoFollow extends React.Component {
  state = {
    majors: '',
    cities: ''
  };
  componentDidMount = async () => {
    const cities = await allCities();
    const majors = await allMajors();
    this.setState({ cities, majors });
  };
  handleChange = (value, option) => {
    this.setState({
      ...this.state,
      [option.props.name]: option.key
    });
  };

  DateChange = date => {
    this.setState({ birthDate: date });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  send = async e => {
    e.preventDefault();
    const { userExtraInfo } = this.props;
    const { firstName, lastName, gender, birthDate, city, major } = this.state;
    await userExtraInfo({
      gender,
      birthDate,
      city,
      major,
      fullName: firstName + ' ' + lastName
    });

    const { history } = this.props;
    history.push('/user/home');
  };
  render() {
    const { cities, majors } = this.state;
    console.log('cities', this.state);

    return (
      <React.Fragment>
        <Header />
        <div className="user-container">
          <div className="user-home">
            <form
              className="profile-updating user-info-update"
              style={{ margin: '50px auto' }}
            >
              <h5 className="title-field">الاسم الأول</h5>
              <Input
                className="input-field"
                onChange={this.handleInputChange}
                name="firstName"
                style={{ width: '100%' }}
              />
              <h5 className="title-field">الاسم الأخير</h5>
              <Input
                className="input-field"
                onChange={this.handleInputChange}
                name="lastName"
                style={{ width: '100%' }}
              />
              <h5 className="title-field">المدينة</h5>

              <Select onChange={this.handleChange} className="country-text">
                {_.isArray(cities)
                  ? cities.map(elm => {
                      return (
                        <Select.Option value={elm.id} key={elm.id} name="city">
                          {elm.value}
                        </Select.Option>
                      );
                    })
                  : ''}
              </Select>
              <br />
              <br />
              <label className="title-field">الجنس</label>
              <Radio.Group
                onChange={this.handleInputChange}
                className="country-text"
                name="gender"
                options={['ذكر', 'أنثى']}
              />
              <br />
              <br />

              <h5 className="title-field" style={{ marginTop: '0px' }}>
                تاريخ الميلاد
              </h5>
              <DatePicker
                className="user-signup-datepicker"
                placeholder="اختر التاريخ"
                onChange={this.DateChange}
              />
              <br />
              <br />
              <h5 className="title-field">التخصص العام</h5>
              <Select onChange={this.handleChange} className="major-text">
                {_.isArray(majors)
                  ? majors.map(elm => {
                      return (
                        <Select.Option value={elm.id} key={elm.id} name="major">
                          {elm.value}
                        </Select.Option>
                      );
                    })
                  : ''}
              </Select>
              <button onClick={this.send} className="save-changes-btn">
                {' '}
                ارسال
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.statistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userExtraInfo: params => {
      return dispatch(userInfo(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoFollow);
