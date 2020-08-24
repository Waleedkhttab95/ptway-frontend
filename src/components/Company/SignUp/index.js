import React from 'react';
import './style.scss';
import { Steps, Layout } from 'antd';
import Step1 from './steps/stepOne';
import Step2 from './steps/stepTwo';
import Step3 from './steps/stepThree';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import statatisticsService from '../../../services/statisticsService';
import { companySignup } from '../../../store/actions/userAction';
import SEO from '../../SEO';
import Header from '../../Header';
const { getAllCompanyMajors, getCompanySMajor } = statatisticsService;

const { Step } = Steps;

class CompanySignup extends React.Component {
  state = {
    current: 0,
    city: '',
    country: '',
    countryErr: '',
    cityError: '',
    steps: '',
    sectors: [],
    jobTypes: []
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const sectors = await getAllCompanyMajors();
    const jobTypes = await getCompanySMajor();
    this.setState({
      sectors,
      jobTypes
    });
  };

  next = () => {
    const {
      jobType,
      sector,
      Name,
      phone,
      position,
      email,
      password,
      companyName
    } = this.state;
    let current = this.state.current;
    switch (current) {
      case 0:
        if (!jobType || !sector || !companyName) {
          this.setState({
            jobTypeError: 'هذا الحقل مطلوب',
            sectorError: 'هذا الحقل مطلوب',
            companyNameError: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 1:
        if (!Name || !phone || !position) {
          this.setState({
            nameError: 'هذا الحقل مطلوب',
            phoneError: 'هذا الحقل مطلوب',
            positionError: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      case 2:
        if (!email || !password) {
          this.setState({
            emailError: 'هذا الحقل مطلوب',
            passwordError: 'هذا الحقل مطلوب'
          });
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
    const {
      companyName,
      email,
      password,
      sector,
      jobTitle,
      Name,
      phone,
      position
    } = this.state;
    if (!email || !password) {
      this.setState({
        emailError: 'هذا الحقل مطلوب',
        passwordError: 'هذا الحقل مطلوب'
      });
    } else {
      const { register, history } = this.props;
      await register({
        companyName,
        email,
        password,
        sector,
        specialist: jobTitle,
        Name,
        phone,
        position,
        status: sector === '5c56c3572e168a2c30fe5dde' ? false : true
      });

      history.push('/company/home');
    }
  };

  render() {
    const { current } = this.state;

    const steps = [
      {
        title: 'اسم الجهة ونشاط العمل',
        content: (
          <Step1
            handleChange={this.handleChange}
            handleInputsChange={this.handleInputsChange}
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
            handleInputsChange={this.handleInputsChange}
            state={this.state}
            next={() => this.next()}
            prev={() => this.prev()}
            current={current}
            steps={2}
          />
        )
      },
      {
        title: 'معلومات الحساب',
        content: (
          <Step3
            handleChange={this.handleInputsChange}
            state={this.state}
            prev={() => this.prev()}
            current={current}
            steps={2}
            signup={this.signup}
            error={this.props.user}
          />
        )
      }
    ];
    return (
      <React.Fragment>
        <SEO
          title="الشركات"
          description="سجل شركتك الآن! وأبدء خطوتك الأولى لإيجاد الموظف المناسب لك"
        />
        <Header />
        <Layout style={{ background: '#f3f3f3', height: '100%' }}>
          <div className="user-container company-sign">
            <div className="signup-form">
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} />
                ))}
              </Steps>
              <div className="steps-header">
                <span> اسم الجهة ونشاط العمل</span>
                <span>معلومات شخصية</span>
                <span>معلومات الحساب</span>
              </div>
              <div className="steps-content">{steps[current].content}</div>
            </div>
          </div>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: params => {
      return dispatch(companySignup(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySignup);
