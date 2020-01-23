import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Layout, Alert, Col } from 'antd';
import './style.scss';
import CompanyInfo from './CompanyInfo';

const { Content } = Layout;
const CompanyHome = props => {
  return (
    <div>
      <Header />
      <div className="user-container">
        <Content className="user-home">
          <div className="user-notification">
            <Alert
              message="يوجد متقدم جديد  ياسر القحطاني على مشروع موقع للإنطلاق الجديد"
              type="warning"
              className="warning-alert"
            />
            <Alert
              message="يوجد متقدم جديد  سامر الأحمد على مشروع الشركة الرئيسية"
              type="info"
              className="info-alert"
            />
          </div>
          <div className="company-progress">
            <div className="opened-projects">
              <div>المشاريع المنشئة</div>
              <div className="user-stc-number">2,315</div>
            </div>
            <div className="total-offers">
              <div>عروض العمل الإجمالية</div>
              <div className="user-stc-number">2,315</div>
            </div>
            <div className="user-hired">
              <div>الذين تم توظيفهم</div>
              <div className="user-stc-number">1,024</div>
            </div>
            <div className="user-rejected">
              <div>الذين تم رفضهم</div>
              <div className="user-stc-number">7,213</div>
            </div>
          </div>
          <div className="user-profile">
            <Col md={6} className="right-section">
              <CompanyInfo />
              <button
                className="update-profile-btn"
                onClick={() => props.history.push('/company/profile/update')}
              >
                تعديل المعلومات
              </button>
            </Col>
            <Col md={18} className="company-left-section">
              <h2>آخر العروض الوظيفية التي أنشئتها</h2>
              <div className="projects-offers-header">
                <div>اسم العرض الوظيفي</div>
                <div>التاريخ</div>
                <div>الرقم التسلسلي</div>
                <div>اسم المشروع</div>
                <div>عدد المتقدمين</div>
              </div>
              <div className="project-offer">
                <div className="project-offer-title">
                  مصمم واجهات استخدام لتطبيقات جوال و مواقع انترنت
                </div>
                <div>02/10/2019</div>
                <div>0002163477555</div>
                <div className="project-status">مشروع للإنطلاق الجديد</div>
                <div className="applicants-num">321</div>
              </div>
              <div className="project-offer">
                <div className="project-offer-title">
                  مصمم واجهات استخدام لتطبيقات جوال و مواقع انترنت
                </div>
                <div>02/10/2019</div>
                <div>0002163477555</div>
                <div className="project-status">مشروع للإنطلاق الجديد</div>
                <div className="applicants-num">321</div>
              </div>
              <div className="project-offer">
                <div className="project-offer-title">
                  مصمم واجهات استخدام لتطبيقات جوال و مواقع انترنت
                </div>
                <div>02/10/2019</div>
                <div>0002163477555</div>
                <div className="project-status">مشروع للإنطلاق الجديد</div>
                <div className="applicants-num">321</div>
              </div>
              <div className="project-offer">
                <div className="project-offer-title">
                  مصمم واجهات استخدام لتطبيقات جوال و مواقع انترنت
                </div>
                <div>02/10/2019</div>
                <div>0002163477555</div>
                <div className="project-status">مشروع للإنطلاق الجديد</div>
                <div className="applicants-num">321</div>
              </div>
              <button className="more-projects-offers-btn">عرض المزيد</button>
            </Col>
          </div>
        </Content>
      </div>
      <Footer />
    </div>
  );
};
export default CompanyHome;
