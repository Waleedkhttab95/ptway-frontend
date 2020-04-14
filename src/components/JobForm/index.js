import React from 'react';
import './style.scss';
import { Row, Col, Input, DatePicker, Radio, Modal } from 'antd';
import moment from 'moment';
import Footer from '../Footer';
import LoginNavbar from '../Header/LoginNavbar';
import TempForm from '../../services/newForm';
const { addInfo } = TempForm;
class JobForm extends React.Component {
  state = {
    visible: false
  };

  handleChange = e => {
    const { value, name } = e.target;
    console.log('state', this.state);

    this.setState({
      [name]: value
    });
  };

  handleDateChange = birthDate => {
    // console.log('dateString', dateString, moment(birthDate));

    this.setState({
      birthDate: moment(birthDate)
    });
  };

  add = async () => {
    await addInfo(this.state);
    this.setState({
      visible: true
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const dateFormat = 'DD/MM/YYYY';
    return (
      <React.Fragment>
        <LoginNavbar />
        <Row>
          <Col md={4}></Col>
          <Col md={15} className="job-new-form">
            <h2>هذا وقتك، سجل معنا!</h2>
            <label>الاسم ثلاثي:</label>
            <Input onChange={this.handleChange} name="name" />
            <div className="pers-info">
              <div>
                <h4>تاريخ الميلاد:</h4>
                <DatePicker
                  placeholder={dateFormat}
                  format={dateFormat}
                  className="form-date"
                  onChange={this.handleDateChange}
                />
              </div>
              <div>
                <h4>الجنس:</h4>
                <Radio.Group
                  onChange={this.handleChange}
                  className="radio-select"
                  name="gender"
                >
                  <Radio.Button value="ذكر">ذكر</Radio.Button>
                  <Radio.Button value="أنثى">أنثى</Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <label>الجنسية</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="isSaudi"
            >
              <Radio.Button value="سعودي">سعودي</Radio.Button>
              <Radio.Button value="غير سعودي">غير سعودي</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>ماهي جنسيتك؟</label>{' '}
            <span style={{ fontSize: '14px', color: '#d0d0d0' }}>
              في حال الإجابة بغير سعودي
            </span>
            <br />
            <Input onChange={this.handleChange} name="nationality" />
            <div className="location-">
              <div>
                <label>المدينة:</label>
                <br />
                <Input onChange={this.handleChange} name="city" />
              </div>
              <div>
                <label>الحي السكني:</label>
                <br />
                <Input onChange={this.handleChange} name="street" />
              </div>
            </div>
            <label>رقم الجوال:</label>
            <Input onChange={this.handleChange} name="mobile" />
            <label>البريد الإلكتروني:</label>
            <Input onChange={this.handleChange} name="email" />
            <label>هل تتوفر لديك سيارة؟</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="avilableCar"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>نوع السيارة:</label>
            <br />
            <Input onChange={this.handleChange} name="carType" />
            <label>موديل السيارة:</label>
            <br />
            <Input onChange={this.handleChange} name="carModel" />
            <label>الوظيفة التي ترغب بها:</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select select-mob"
              name="jobTitle"
            >
              <Radio.Button value="متسوق">متسوق</Radio.Button>
              <Radio.Button value="موصل طلبات">موصل طلبات</Radio.Button>
              <Radio.Button value="جميعها">جميعها</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>ماهي الأوقات المناسبة لتوصيل الطلبات؟</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select select-mob"
              name="timeToDelivier"
            >
              <Radio.Button value="الفترة الصباحية">
                الفترة الصباحية
              </Radio.Button>
              <Radio.Button value="الفترة المسائية">
                الفترة المسائية
              </Radio.Button>
              <Radio.Button value="بعد منتصف الليل">
                بعد منتصف الليل
              </Radio.Button>
              <Radio.Button value="جميع الأوقات">جميع الأوقات</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>نظام تشغيل الجوال:</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="mobileOS"
            >
              <Radio.Button value="android">Android</Radio.Button>
              <Radio.Button value="ios">iOS</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>هل عملت سابقاً كموصل؟</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="exp"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <label>هل أنت مسجل في منصة PTway؟</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="ptwayMember"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <button className="job-form-btn" onClick={this.add}>
              ارسال
            </button>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Footer />
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={false}
        >
          <div className="success-modal">
            <h2>تم تسجيلك في المبادرة، وسيتم التواصل معك في حال ترشيحك.</h2>
            <br />
            <h3 style={{ color: '#049ad0' }}>
              في حال لم تكن مسجل معنا، سجل الآن!
            </h3>
            <br />
            <button>
              <a href='https://www.ptway.net/sign-up'>
             <span className="coloor">سجل في PTway</span> 
              </a>
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default JobForm;
