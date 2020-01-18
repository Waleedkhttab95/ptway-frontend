import React from 'react';
import './style.scss';
const Project = () => {
  return (
    <div className="company-project">
      <div className="project-header">
        <h3>اسم الإعلان الوظيفي</h3>
        <h3>التاريخ</h3>
        <h3>الرقم التسلسلي</h3>
        <h3>المتقدمين</h3>
        <h3>المقبولين</h3>
      </div>
      <div className="project">
        <h4>مطلوب مصمم واجهات استخدام ومواقع ويب</h4>
        <h4>02/10/2019</h4>
        <h4>0002163477555</h4>
        <button className="applicants-btn">عرض</button>
        <button className="accepted-btn">عرض</button>
      </div>
      <div className="project">
        <h4>مطلوب مصمم واجهات استخدام ومواقع ويب</h4>
        <h4>02/10/2019</h4>
        <h4>0002163477555</h4>
        <button className="applicants-btn">عرض</button>
        <button className="accepted-btn">عرض</button>
      </div>
      <div className="project">
        <h4>مطلوب مصمم واجهات استخدام ومواقع ويب</h4>
        <h4>02/10/2019</h4>
        <h4>0002163477555</h4>
        <button className="applicants-btn">عرض</button>
        <button className="accepted-btn">عرض</button>
      </div>
    </div>
  );
};
export default Project;
