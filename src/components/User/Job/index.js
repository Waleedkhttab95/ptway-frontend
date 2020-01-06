import React from 'react';
import './style.scss';
import { Row, Col } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';

const Job = () => {
  return (
    <div className="user-container">
      <Header />
      <Row className="job-section">
        <Col md={6} className="right-section">
          <img />
          <span className="job-owner-name">شركة بيتزا هت للبيتزا</span>
          <div className="job-owner-info">
            <p>
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              تقدم شركة بيتزا هت انواع البيتزا الفاخرة والتي تقدمها عبر آلاف
              الأفرع حول العالم لتصلك البيتزا ساحنة
            </p>
            <p>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              yasser.qahtani@gmail.com
            </p>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              المملكة العربية السعودية، مدينة الرياض الأخضر، شارع الفرقان، بناء
              21 مكتب 421
            </p>
          </div>
        </Col>
        <Col md={20} className="left-section">
          <h5 className="job-title">محاسب في شركة بيتزا هت</h5>
          <h6 className="job-contact-number">الرقم : 046263477555</h6>
          <div>
            <div className="job-heading">
              <i className="fa fa-suitcase" aria-hidden="true"></i>
              التفاصيل الأساسية للوظيفة
            </div>
            <div className="main-info-details">
              <div className="job-sub-heading">المسمى الوظيفي</div>
              <span className="main-info-desc">
                قسم المحاسبة والتعاملات المالية في الفرع الاساسي
              </span>
              <div className="job-sub-heading">وصف الوظيفة</div>
              <span className="main-info-desc">
                ستقوم بعمليات الحسابية للفرع الرئيسية لبيتزا هت كما ستقوم بالجرد
                الشهري بالإضافة للجرد السنوي لجميع الأفرع الفرعية وستقوم بعمل
                جداول لرواتب الموظفين في جميع الأفرع
              </span>
            </div>
          </div>
          <div>
            <div className="job-heading">
              <i className="fa fa-suitcase" aria-hidden="true"></i>
              معلومات الوظيفة
            </div>
            <div className="main-info-details extra-details">
              <div>
                <div className="job-sub-heading">الموقع</div>
                <p className="main-info-desc">بيتزا هت فرع الرياض الرئيسي</p>
                <div className="job-sub-heading">عدد أيام العمل</div>
                <p className="main-info-desc">5 أيام عمل و السبت والأحد عطلة</p>
                <div className="job-sub-heading">مبلغ الراتب</div>
                <p className="main-info-desc">راتب شهري وقدره 3000 ريال</p>
                <div className="job-sub-heading">الجنس</div>
                <p className="main-info-desc">ذكر أو انثى</p>
              </div>
              <div>
                <div className="job-sub-heading">نوع العقد</div>
                <p className="main-info-desc">عقد طويل الأمد</p>
                <div className="job-sub-heading">ساعات العمل اليومية</div>
                <p className="main-info-desc">9 ساعات عمل من 09:00 - 18:00</p>
                <div className="job-sub-heading">تاريخ بدء العمل</div>
                <p className="main-info-desc">01/10/2019</p>
                <div className="job-sub-heading">اللباس</div>
                <p className="main-info-desc">زي رسمي تقدمه الشركة</p>
              </div>
            </div>
          </div>
          <button className="applay-job-btn">تقدم للوظيفة</button>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Job;
