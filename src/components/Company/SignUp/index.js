import React from 'react';
import './style.scss';
import { Steps, Layout, message, Row, Col } from 'antd';
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
        if (!jobType || !sector || !companyName || !email || !password) {
          this.setState({
            jobTypeError: 'هذا الحقل مطلوب',
            sectorError: 'هذا الحقل مطلوب',
            companyNameError: 'هذا الحقل مطلوب',
            emailError: 'هذا الحقل مطلوب',
            passwordError: 'هذا الحقل مطلوب'
          });
        } else {
          current = this.state.current + 1;
          this.setState({ current });
        }
        break;
      // case 1:
      //   if (!Name || !phone || !position) {
      //     this.setState({
      //       nameError: 'هذا الحقل مطلوب',
      //       phoneError: 'هذا الحقل مطلوب',
      //       positionError: 'هذا الحقل مطلوب'
      //     });
      //   } else {
      //     current = this.state.current + 1;
      //     this.setState({ current });
      //   }
      //   break;
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
      jobType,
      Name,
      phone,
      position
    } = this.state;
    if (!Name || !phone || !position) {
      this.setState({
        nameError: 'هذا الحقل مطلوب',
        phoneError: 'هذا الحقل مطلوب',
        positionError: 'هذا الحقل مطلوب'
      });
    } else {
      const { register, history } = this.props;
      await register({
        companyName,
        email,
        password,
        sector,
        specialist: jobType,
        Name,
        phone,
        position,
        status: sector === '5c56c3572e168a2c30fe5dde' ? false : true
      });
      message.success(' يرجى تفعيل الحساب من خلال بريدك الالكتروني');
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  };

  render() {
    const { current } = this.state;
    console.log('state', this.state);
    const steps = [
      {
        title: 'إسم الشركة',
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
        title: 'مسؤول التوظيف',
        content: (
          <Step2
            handleInputsChange={this.handleInputsChange}
            handleChange={this.handleChange}
            state={this.state}
            next={() => this.next()}
            prev={() => this.prev()}
            current={current}
            steps={1}
            signup={this.signup}
          />
        )
      }
      // {
      //   title: 'معلومات الحساب',
      //   content: (
      //     <Step3
      //       handleChange={this.handleInputsChange}
      //       state={this.state}
      //       prev={() => this.prev()}
      //       current={current}
      //       steps={2}
      //       signup={this.signup}
      //       error={this.props.user}
      //     />
      //   )
      // }
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
              <Row className="signup-form-container" justify="center" span={20}>
                <Col md={8} sm={0} sx={0} className="form-second-section">
                  {current == 0 ? (
                    <>
                      <img src={require('../../../images/office.svg')} />
                      <h3>لماذا تسجيل الشركة؟</h3>
                      <h6> ✔️ مشاركة المرشحين مع زملاؤك </h6>
                      <h6> ✔️ تعيين أكثر من مسؤول </h6>
                      <h6>
                        ✔️ تسجيل فوري للموظفين <br />
                        المسجلين بنفس بريد الشركة
                      </h6>
                    </>
                  ) : current == 1 ? (
                    <>
                      <img src={require('../../../images/file-settings.svg')} />
                      <h3>مسؤول التوظيف</h3>
                      <h6> ✔️ مشاركة المرشحين مع زملاؤك </h6>
                      <h6> ✔️ تعيين أكثر من مسؤول </h6>
                      <h6>
                        ✔️ تسجيل فوري للموظفين <br />
                        المسجلين بنفس بريد الشركة
                      </h6>
                    </>
                  ) : (
                    ''
                  )}
                </Col>
                <Col
                  lg={14}
                  md={18}
                  sm={12}
                  sx={24}
                  className="form-first-section"
                >
                  <Steps current={current}>
                    {steps.map(item => (
                      <Step key={item.title} />
                    ))}
                  </Steps>
                  <div className="steps-header">
                    <span> إسم الشركة</span>
                    <span>مسؤول التوظيف</span>
                  </div>
                  <div className="steps-content">{steps[current].content}</div>
                </Col>
              </Row>
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
