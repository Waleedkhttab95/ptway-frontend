import React from 'react';
import './style.scss';
import { Steps, Button, message } from 'antd';
import Step1 from './steps/stepOne';
import Step2 from './steps/stepTwo';
import Step3 from './steps/stepThree';
import Step4 from './steps/stepFour';
import Footer from '../../Footer';
const { Step } = Steps;

const steps = [
  {
    title: 'الدولة',
    content: <Step1 />
  },
  {
    title: 'معلومات شخصية',
    content: <Step2 />
  },
  {
    // title: 'معلومات شخصية اخرى',
    content: <Step3 />
  },
  {
    title: 'معلومات الحساب',
    content: <Step4 />
  }
];

class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <React.Fragment>
        <div className="user-container">
          <div className="signup-form">
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} />
              ))}
            </Steps>
            {/* <div className="steps-header-line">zz</div> */}
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
                  onClick={() => message.success('Processing complete!')}
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

        <Footer />
      </React.Fragment>
    );
  }
}

export default UserSignup;
