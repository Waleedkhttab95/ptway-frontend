import React from 'react';
import { Row, Input, Modal } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import contactForm from '../../../../services/newForm';
const { contactUs } = contactForm;
const { TextArea } = Input;
class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    SuccessMsg: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  send = async e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    await contactUs({ name, email, message });
    this.setState({
      SuccessMsg: true
    });
  };
  render() {
    return (
      <Row className="contact-us">
        {window.location.href.includes('/common-questions') ? (
          <h2 className="title">هل لديك سؤال أخر؟ </h2>
        ) : (
          <h2 className="title"> تواصل معنا</h2>
        )}
        <form>
          <div className="inputs">
            <Input
              placeholder="الاسم"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Input
              placeholder="الإيميل"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <TextArea
            rows={4}
            placeholder="أكتب رسالتك هنا"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button className="send-btn" onClick={this.send}>
            ارسال
          </button>
        </form>
        <h3> ابدأ الآن</h3>
        <div className="btns">
          <Link to="/company/signup">
            <button>سجل شركتك الأن</button>
          </Link>

          <Link to="/user/signup">
            <button>سجل كباحث عن عمل</button>
          </Link>
        </div>
        <Modal visible={this.state.SuccessMsg} closable={false} footer={false}>
          <div className="success-modal">
            <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
            <h2>تم إرسال رسالتك بنجاح</h2>
            <button
              onClick={() =>
                this.setState(
                  {
                    name: '',
                    email: '',
                    message: ''
                  },
                  () => {
                    this.setState({ SuccessMsg: false });
                  }
                )
              }
            >
              حسناً
            </button>
          </div>
        </Modal>
      </Row>
    );
  }
}

export default withTranslation()(ContactUs);
