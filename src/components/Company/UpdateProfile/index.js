import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse } from 'antd';
import Avatar from '../../User/UpdateProfile/UploadFile';
const { TextArea } = Input;
const { Panel } = Collapse;

const UpdateCompanyProfile = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="company-container">
        <div className="updating-container">
          <div className="profile-updating">
            <Avatar />
            <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '5']}>
              <Panel
                header="الدولة ومكان السكن"
                key="1"
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
              <Panel header="الدراسة" key="2" className="section-heading">
                <div className="collapse-line"></div>
                <div className="location-info">
                  <h5 className="title-field">نبذة عامة</h5>
                  <TextArea rows={4} className="textarea-field" />
                </div>
              </Panel>
              <Panel
                header="نوع العمل وحالته"
                key="3"
                className="section-heading"
              >
                <div className="collapse-line"></div>
              </Panel>

              {/* <Panel header="مهارات عامة" key="4" className="section-heading">
                <div className="collapse-line"></div>

                <div className="general-skills">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                </div>
              </Panel> */}
              <Panel
                header="معلومات إضافية"
                key="5"
                className="section-heading"
              >
                <div className="collapse-line"></div>
                <div className="extra-information">
                  <h3>نبذة مفصلة عن الشركة</h3>
                  <TextArea row={6} />
                  <h3>رؤية الشركة</h3>
                  <TextArea row={6} />
                  <h3>رسالة الشركة</h3>
                  <TextArea row={6} />
                </div>
              </Panel>
            </Collapse>
            <button className="save-changes-btn">حفظ</button>
          </div>
        </div>
        ;
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default UpdateCompanyProfile;
