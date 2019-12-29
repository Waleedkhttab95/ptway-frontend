import React from 'react';
import './style.scss';
import { Steps, Button, Layout } from 'antd';
import Step1 from './steps/stepOne';
import Step2 from './steps/stepTwo';
import Step3 from './steps/stepThree';
import Step4 from './steps/stepFour';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import history from '../../../_core/history';

import { userSignup, userInfo } from '../../../store/actions/userAction';
import statatisticsService from '../../../services/statisticsService';

const { allCountries, allCities, allMajors } = statatisticsService;
const { Step } = Steps;

class UserSignup extends React.Component {
  state = {
    current: 0,
    city: '',
    country: '',
    countryErr: '',
    cityError: ''
  };

  componentDidMount = async () => {
    const countries = await allCountries();
    if (countries) this.setState({ countries });
    const cities = await allCities();
    console.log('countries', countries, 'cities', cities);

    if (cities) this.setState({ cities });
    const majors = await allMajors();
    if (majors) this.setState({ majors });
  };

  next = () => {
    const {
      country,
      city,
      gender,
      birthDate,
      firstName,
      lastName,
      major
    } = this.state;
    let current = this.state.current;
    switch (current) {
      case 0:
        if (!country || !city) {
          this.setState({
            err: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 1:
        if (!gender || !birthDate) {
          this.setState({
            err: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 2:
        if (!firstName || !lastName || !major) {
          this.setState({
            err: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
    }
  };

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  handleChange = (value, name) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleInputsChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  signup = async () => {
    const { register, userExtraInfo, user, userInfo } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      birthDate,
      country,
      city,
      major
    } = this.state;
    if (!email || !password) {
      this.setState({
        err: 'هذا الحقل مطلوب'
      });
    } else {
      await register({
        firstName,
        lastName,
        email,
        password
      });
      console.log('heeell', user.token);

      if (user.token) {
        await userExtraInfo({
          gender,
          birthDate,
          country,
          city,
          major,
          fullName: firstName + ' ' + lastName
        });
        if (userInfo) {
          history.push('/user/home');
        }
      }
    }
  };

  render() {
    const { current, countries, cities, majors } = this.state;
    const steps = [
      {
        title: 'الدولة',
        content: (
          <Step1
            handleChange={this.handleChange}
            countries={countries}
            cities={cities}
            state={this.state}
            error={this.state.err}
          />
        )
      },
      {
        title: 'معلومات شخصية',
        content: (
          <Step2
            handleChange={this.handleChange}
            error={this.state.err}
            state={this.state}
          />
        )
      },
      {
        // title: 'معلومات شخصية اخرى',
        content: (
          <Step3
            handleChange={this.handleInputsChange}
            handleSelect={this.handleChange}
            majors={majors}
            state={this.state}
            error={this.state.err}
          />
        )
      },
      {
        title: 'معلومات الحساب',
        content: (
          <Step4
            handleChange={this.handleInputsChange}
            state={this.state}
            error={this.state.err}
          />
        )
      }
    ];
    return (
      <React.Fragment>
        <Layout style={{ background: '#f3f3f3', height: '100%' }}>
          <div className="user-container">
            <div className="signup-form">
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} />
                ))}
              </Steps>
              <div className="steps-header">
                <span> الدولة والمدينة</span>
                <span>معلومات شخصية</span>
                <span>معلومات شخصية اخرى</span>
                <span>معلومات الحساب</span>
              </div>
              <div className="steps-content">{steps[current].content}</div>
              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button
                    className="first-step-btn"
                    type="primary"
                    onClick={() => this.next()}
                  >
                    الانتقال للخطوة التالية
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    className="last-step-btn"
                    onClick={this.signup}
                  >
                    الانتهاء والانتقال للصفحة الرئيسية
                  </Button>
                )}
                {/* {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                  </Button>
                )} */}
              </div>
            </div>
          </div>
          <div className="registration-footer">
            <Footer />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    userInfo: state.statistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: params => {
      return dispatch(userSignup(params));
    },
    userExtraInfo: params => {
      return dispatch(userInfo(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup);
