import React from 'react';
import './style.scss';
import { Row, Col, Input, DatePicker, Radio, Modal } from 'antd';
import moment from 'moment';
import Footer from '../Footer';
import LoginNavbar from '../Header/LoginNavbar';
import TempForm from '../../services/newForm';
import kareem from '../../images/kareem.png';
import marsool from '../../images/marsool.png';
import n3na3 from '../../images/n3na3.png';
import zad from '../../images/zad.png';
import hunger from '../../images/hunger.png';

const { addInfo } = TempForm;
class JobForm extends React.Component {
  state = {
    visible: false,
    error: false
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
    const {
      name,
      gender,
      street,
      city,
      mobile,
      email,
      avilableCar,
      carType,
      carModel,
      timeToDelivier,
      jobTitle,
      company,
      exp,
      ptwayMember,
      mobileOS
    } = this.state;
    if (
      (!name ||
        !gender ||
        !street ||
        !city ||
        !mobile ||
        !email ||
        !avilableCar ||
        !carType ||
        !carModel ||
        !timeToDelivier ||
        !jobTitle,
      !company || !exp || !ptwayMember || !mobileOS)
    ) {
      this.setState({
        error: true
      });
    } else {
      await addInfo(this.state);
      this.setState({
        visible: true
      });
    }
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const dateFormat = 'DD/MM/YYYY';
    const { error } = this.state;
    return (
      <React.Fragment>
        <LoginNavbar />
        <Row>
          <Col md={4}></Col>
          <Col md={15} className="job-new-form">
            <h2>هذا وقتك، سجل معنا!</h2>
            <label>الاسم ثلاثي:</label>
            <Input onChange={this.handleChange} name="name" />
            {error && !this.state.name && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <div className="pers-info">
              <div>
                <h4>تاريخ الميلاد:</h4>
                <DatePicker
                  placeholder={dateFormat}
                  format={dateFormat}
                  className="form-date"
                  onChange={this.handleDateChange}
                />
                {error && !this.state.birthDate && (
                  <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
                )}
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
                {error && !this.state.gender && (
                  <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
                )}
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
                {error && !this.state.city && (
                  <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
                )}
              </div>
              <div>
                <label>الحي السكني:</label>
                <br />
                <Input onChange={this.handleChange} name="street" />
                {error && !this.state.street && (
                  <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
                )}
                <br />
              </div>
            </div>
            <label>رقم الجوال:</label>
            <Input onChange={this.handleChange} name="mobile" />
            {error && !this.state.mobile && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
            <label>البريد الإلكتروني:</label>
            <Input onChange={this.handleChange} name="email" />
            {error && !this.state.email && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
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
            {error && !this.state.avilableCar && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
            <br />
            <label>نوع السيارة:</label>
            <br />
            <Input onChange={this.handleChange} name="carType" />
            {error && !this.state.carType && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
            <label>موديل السيارة:</label>
            <br />
            <Input onChange={this.handleChange} name="carModel" />
            {error && !this.state.carModel && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
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
            {error && !this.state.jobTitle && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
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
            {error && !this.state.timeToDelivier && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
            <br />
            <br />
            <label>تفضل العمل بأي شركة توصيل؟</label>
            <br />
            <br />
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select select-mob select-image"
              name="company"
            >
              <div>
                <Radio.Button value="zad">
                  <img src={zad} alt="zad" />
                </Radio.Button>
                <Radio.Button value="hunger" alt="hunger">
                  <img src={hunger} />
                </Radio.Button>
                <Radio.Button value="kareem">
                  <img src={kareem} alt="kareem" />
                </Radio.Button>
              </div>
              <div>
                <Radio.Button value="n3na3">
                  <img src={n3na3} alt="n3na3" />
                </Radio.Button>
                <Radio.Button value="marsool">
                  <img src={marsool} alt="marsool" />
                </Radio.Button>
              </div>
            </Radio.Group>
            {error && !this.state.company && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
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
            {error && !this.state.mobileOS && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
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
            {error && !this.state.exp && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
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
            {error && !this.state.ptwayMember && (
              <span style={{ color: 'red' }}>هذا الحقل مطلوب</span>
            )}
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
