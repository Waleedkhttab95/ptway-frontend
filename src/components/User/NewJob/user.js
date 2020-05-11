import React from 'react';
import { Select, Input, Radio } from 'antd';
import './style.scss';
import LoginNavbar from '../../Header/LoginNavbar';
import Footer from '../../Footer';

export class UserNewJob extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container">
          <form className="new-job-form">
            <h2 className="title">سجل معنا</h2>
            <h4>الإسم الثلاثي:</h4>
            <Input />
            <h4>الجنس:</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="gender"
            >
              <Radio.Button value="ذكر">ذكر</Radio.Button>
              <Radio.Button value="أنثى">أنثى</Radio.Button>
            </Radio.Group>
            <h4>البريد الإلكتروني:</h4>
            <Input />
            <h4>رقم الجوال:</h4>
            <Input />
            <h4>تأكيد رقم الجوال:</h4>
            <Input />
            <h4>شركتك السابقة؟</h4>
            <Input />
            <h4>المسمى الوظيفي السابق:</h4>
            <Input />
            <h4>
              الوظيفة المرغوبة: <span>يمكنك اختيار 3 فقط</span>
            </h4>
            <Select>
              <Select.Option value="xx">xx</Select.Option>
            </Select>
            <h4>هل تملك خبرة؟ </h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="exp"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            <h4>عدد سنوات الخبرة؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="exp"
            >
              <Radio.Button value="0-1">0 - سنة</Radio.Button>
              <Radio.Button value="2-4">2 - 4 سنوات</Radio.Button>
              <Radio.Button value="5-7">5 - 7 سنوات</Radio.Button>
              <Radio.Button value="+8">8+</Radio.Button>
            </Radio.Group>
            <h4>هل يمكنك العمل خارج مدينتك؟</h4>
            <Radio.Group
              onChange={this.handleChange}
              className="radio-select"
              name="work-abroad"
            >
              <Radio.Button value="نعم">نعم</Radio.Button>
              <Radio.Button value="لا">لا</Radio.Button>
            </Radio.Group>
            <h4>حسابك الشخصي في Linkedin:</h4>
            <Input />
            <h4>حمل سيرتك الذاتية:</h4>
            <Input />
            <button>ارسال</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
