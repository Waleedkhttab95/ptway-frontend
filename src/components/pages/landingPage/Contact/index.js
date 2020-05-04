import React from 'react';
import { Row, Input } from 'antd';
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
    message: ''
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
            />
          </div>
          <TextArea
            rows={4}
            placeholder="أكتب رسالتك هنا"
            name="message"
            onChange={this.handleChange}
          />
          <button className="send-btn" onClick={this.send}>
            ارسال
          </button>
        </form>
        <h3> ابدأ الآن</h3>
        <div className="btns">
          <Link to="/company/login">
            <button>سجل شركتك الأن</button>
          </Link>

          <Link to="/user/login">
            <button>سجل كباحث عن عمل</button>
          </Link>
        </div>
      </Row>
    );
  }
}

export default withTranslation()(ContactUs);
