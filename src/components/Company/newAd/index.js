import React from 'react';
import './style.scss';
import Footer from '../../Footer';
import { Input, Select } from 'antd';
import Header from '../../Header';
const { TextArea } = Input;
const { Option } = Select;

const AddNewAd = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="company-container">
        <div className="new-ad-form">
          <h2 className="new-ad-title">إضافة إعلان جديد</h2>
          <p>
            أخيراً قم بتعبئة تفاصيل الإعلان الوظيفي الذي ترغب بإضافته ضمن مشروع
          </p>
          <div className="new-ad-details">
            <label>تفاصيل الإعلان الوظيفي</label>
            <TextArea row={6} />
            <label>المشروع الأساسي الذي سيندرج تحته الإعلان</label>
            <Select className="project-selection selector">
              <Option value="jack">Option 1</Option>
            </Select>
            <label>المسمى الوظيفي المطلوب</label>
            <Input />
            <div className="group-questions">
              <div className="right-side">
                <label>عدد ساعات العمل</label>
                <Input />
                <label>الجنس</label>
                <Input />
                <label>المستوى التعليمي</label>
                <Input />
              </div>
              <div className="left-side">
                <label>عدد أيام العمل</label>
                <Input />
                <label>تاريخ بدء العمل</label>
                <Input />
                <label>المهارات العامة</label>
                <Input />
              </div>
            </div>
            <label>وصف الوظيفي</label>
            <TextArea row={4} />
            <label>الموقع</label>
            <Input />
            <div className="last-ad-group">
              <div>
                <label className="sub-heading">الدولة</label>
                <Select className="selector"></Select>
              </div>
              <div>
                <label className="sub-heading">المدينة</label>
                <Select className="selector"></Select>
              </div>
            </div>
          </div>
          <button
            className="add-new-ad-btn"
            onClick={() => props.history.push('/company/login')}
          >
            أضف الإعلان الوظيفي
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddNewAd;
