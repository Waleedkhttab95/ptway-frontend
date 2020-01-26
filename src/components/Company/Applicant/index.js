import React from 'react';
import './style.scss';
import { Col } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
const Applicant = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="company-container">
        <div className="applicant-profile">
          <Col md={6} className="applicant-right-section">
            <div className="btns-container">
              <button className="accept-applicant">قبول المتقدم</button>
              <button className="reject-applicant">رفض المتقدم</button>
            </div>
            <div className="personal-info">
              <div className="user-pic-info">
                <i className="fa fa-user u-pic" aria-hidden="true"></i>
                {/* <img /> */}
                <span className="fullname">ياسر محمد القحطاني</span>
                <span className="job-date">يعمل منذ 11/02/2018</span>
                <span className="job-type">مصمم جرافيك</span>
              </div>
              <div className="details-user-info">
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  yasser.qahtani@gmail.com
                </span>
                <span>
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  0096 555 123 456 78 90
                </span>
                <span>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  ذكر
                </span>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  المملكة العربية السعودية، مدينة الرياض الأخضر، شارع الفرقان،
                  بناء 21 مكتب 421
                </span>
              </div>
            </div>
            <div className="hour-work">
              <h3>عدد ساعات العمل</h3>
              <div className="hours-num">2,315</div>
            </div>
          </Col>
          <Col md={18} className="applicant-details">
            <div>
              <h3 className="h-title heading">نبذة عامة</h3>
              <p>
                كل إنسان يحب أن يكون كلامه مسموعا، يعبر عن نفسه وذاته بحرية
                وبانطلاق في الحياة، مما دفع الكثيرون إلى تطوير أساليبهم في بناء
                التعابير الصوتية المختلفة، وتعلم مهارات الجسد، والكثير من
                المهارات؛ ليستطيعوا التعبير عن أنفسهم، واقناع الناس بذلك ليظهروا
                وليرتفع اسمهم في المجتمع وفي أنفسهم. ومع التطور الحاصل في العصر
                الحديث من التكنولوجيا الحديثة ومواقع التواصل الاجتماعي، وانتشار
                استخدامها، والمدونات أصبحت الكتابة لونا لا يستغني عنه أحد في
                التعبير عن ما يدور في عقله وكيانه من أفكار ومعتقدات وآراء؛ ساعيا
                ليجلب اعجاب الآخرين به أحيانا،
              </p>
            </div>
            <div>
              <h3 className="h-title heading">الدراسات والشهادات</h3>
              <p>
                كل إنسان يحب أن يكون كلامه مسموعا، يعبر عن نفسه وذاته بحرية
                وبانطلاق في الحياة، مما دفع الكثيرون إلى تطوير أساليبهم في بناء
                التعابير الصوتية المختلفة، وتعلم مهارات الجسد، والكثير من
                المهارات؛ ليستطيعوا التعبير عن أنفسهم، واقناع الناس بذلك ليظهروا
                وليرتفع اسمهم في المجتمع وفي أنفسهم. ومع التطور الحاصل في العصر
                الحديث من التكنولوجيا الحديثة ومواقع التواصل الاجتماعي، وانتشار
                استخدامها، والمدونات أصبحت الكتابة لونا لا يستغني عنه أحد في
                التعبير عن ما يدور في عقله وكيانه من أفكار ومعتقدات وآراء؛ ساعيا
                ليجلب اعجاب الآخرين به أحيانا،
              </p>
            </div>
            <div>
              <h3 className="h-title heading">معلومات عامة</h3>
            </div>
          </Col>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Applicant;
