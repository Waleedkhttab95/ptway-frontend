import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse } from 'antd';
import Avatar from './UploadFile';
const { TextArea } = Input;
const { Panel } = Collapse;

const UpdateProfile = () => {
  return (
    <div className="user-container">
      <Header />
      <div className="updating-container">
        <div className="profile-updating">
          <Avatar />
          {/* <button className="upload-img-btn">رفع صورة شخصية</button> */}
          <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '5']}>
            <Panel header="معلومات شخصية" key="1" className="section-heading">
              <div className="collapse-line"></div>
              <div className="personal-info">
                {/* <h6>معلومات شخصية</h6> */}
                <div className="right-side">
                  <h5 className="title-field">الاسم الثلاثي الكامل</h5>
                  <Input className="input-field" />
                  <h5 className="title-field">الجنس</h5>

                  <Input className="input-field" />
                </div>
                <div>
                  <h5 className="title-field">تاريخ الميلاد</h5>

                  <Input className="input-field" />
                  <h5 className="title-field">الحالة الاجتماعية</h5>

                  <Input className="input-field" />
                </div>
              </div>
            </Panel>
            <Panel
              header="الدولة ومكان السكن"
              key="2"
              className="section-heading"
            >
              <div className="collapse-line"></div>
              <div className="location-info">
                <div className="first-section">
                  <div style={{ marginLeft: '20px' }}>
                    <h5 className="title-field">الدولة</h5>
                    <Input className="input-field" />
                  </div>
                  <div>
                    <h5 className="title-field">المدينة</h5>

                    <Input className="input-field" />
                  </div>
                </div>
                <h5 className="title-field">عنوان السكن الحالي</h5>
                <TextArea rows={4} className="textarea-field" />
              </div>
            </Panel>
            <Panel header="الدراسة" key="3" className="section-heading">
              <div className="collapse-line"></div>
              <div className="location-info">
                <h5 className="title-field">نبذة عامة</h5>
                <TextArea rows={4} className="textarea-field" />
              </div>
            </Panel>
            <Panel
              header="نوع العمل وحالته"
              key="4"
              className="section-heading"
            >
              <div className="collapse-line"></div>
            </Panel>

            <Panel header="مهارات عامة" key="5" className="section-heading">
              <div className="collapse-line"></div>

              <div className="general-skills">
                <i className="fa fa-book" aria-hidden="true"></i>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                <i className="fa fa-book" aria-hidden="true"></i>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                <i className="fa fa-book" aria-hidden="true"></i>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UpdateProfile;
