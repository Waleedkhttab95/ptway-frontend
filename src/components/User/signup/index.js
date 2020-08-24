import React from 'react';
import './style.scss';
import { Steps, Layout } from 'antd';
import Step1 from './steps/stepOne';
import Step2 from './steps/stepTwo';
import Step3 from './steps/stepThree';
import Step4 from './steps/stepFour';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import { userSignup, userInfo } from '../../../store/actions/userAction';
import statatisticsService from '../../../services/statisticsService';
import Header from '../../Header';
import SEO from '../../SEO';
import moment from 'moment';

const { allCountries, allCities, allMajors } = statatisticsService;
const { Step } = Steps;

class UserSignup extends React.Component {
  state = {
    current: 0,
    city: '',
    country: '',
    countryErr: '',
    cityError: '',
    steps: ''
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const countries = await allCountries();
    if (countries) this.setState({ countries });
    const cities = await allCities();
    if (cities) this.setState({ cities });
    const majors = await allMajors();
    if (majors) this.setState({ majors });
  };

  next = () => {
    const { city, gender, firstName, lastName, major } = this.state;
    let current = this.state.current;
    switch (current) {
      case 0:
        if (!city) {
          this.setState({
            countryError: 'هذا الحقل مطلوب',
            cityError: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 1:
        if (!gender) {
          this.setState({
            genderError: 'هذا الحقل مطلوب'
            // dateError: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 2:
        if (!firstName || !lastName || !major) {
          this.setState({
            firstNameError: 'هذا الحقل مطلوب',
            lastNameError: 'هذا الحقل مطلوب',
            majorError: 'هذا الحقل مطلوب'
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

  handleWebDateChange = (value, name) => {
    const age = moment().diff(value, 'years');
    if (age <= 16) {
      this.setState({
        dateError: 'يجب أن يكون عمرك أكبر من 15 عاماً'
      });
    } else {
      this.setState({
        [name]: value,
        dateError: ''
      });
    }
  };

  handleMobileDateChange = e => {
    const { name, value } = e.target;
    const age = moment().diff(value, 'years');
    if (age <= 16) {
      this.setState({
        dateError: 'يجب أن يكون عمرك أكبر من 15 عاماً'
      });
    } else {
      this.setState({
        name: value,
        dateError: ''
      });
    }
  };

  handleInputsChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  signup = async () => {
    const { register, userExtraInfo } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      birthDate,
      name,
      city,
      major,
      // reEmail,
      rePassword
    } = this.state;
    if (!email || !password) {
      this.setState({
        emailError: 'هذا الحقل مطلوب',
        passwordError: 'هذا الحقل مطلوب'
      });
      // } else if (email !== reEmail) {
      //   this.setState({
      //     emailMatchError: 'البريد الالكتروني غير متطابق'
      //   });
    } else if (password !== rePassword) {
      this.setState({
        passwordMatchError: 'كلمة المرور غير متطابقة'
      });
    } else {
      await register({
        firstName,
        lastName,
        email,
        password
      });

      await userExtraInfo({
        gender,
        birthDate: birthDate || name,
        city,
        major,
        fullName: firstName + ' ' + lastName
      });

      const { history } = this.props;
      history.push('/user/home');
    }
  };

  render() {
    const { current, countries, cities, majors } = this.state;
    const { user } = this.props;

    const steps = [
      {
        title: 'الدولة',
        content: (
          <Step1
            handleChange={this.handleChange}
            handleInputsChange={this.handleInputsChange}
            countries={countries}
            cities={cities}
            state={this.state}
            next={() => this.next()}
            current={current}
            steps={1}
          />
        )
      },
      {
        title: 'معلومات شخصية',
        content: (
          <Step2
            handleChange={this.handleChange}
            handleMobileDateChange={this.handleMobileDateChange}
            handleWebDateChange={this.handleWebDateChange}
            handleRadioChange={this.handleInputsChange}
            state={this.state}
            next={() => this.next()}
            prev={() => this.prev()}
            current={current}
            steps={2}
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
            next={() => this.next()}
            prev={() => this.prev()}
            current={current}
            steps={3}
          />
        )
      },
      {
        title: 'معلومات الحساب',
        content: (
          <Step4
            handleChange={this.handleInputsChange}
            state={this.state}
            prev={() => this.prev()}
            current={current}
            steps={3}
            signup={this.signup}
            error={user}
          />
        )
      }
    ];
    return (
      <React.Fragment>
        <SEO
          title="الأفراد"
          description=" سجل معنا الآن! وأبدء خطوتك الأولى لكسب تجارب جديدة كل يوم"
        />
        <Header />
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
            </div>
          </div>
          {/* <div className="registration-footer"> */}
          <Footer />
          {/* </div> */}
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
