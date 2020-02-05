import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse, Select } from 'antd';
import Avatar from './UploadFile';
import cvServices from '../../../services/user/cv';
import _ from 'lodash';
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;
const {
  getSkills,
  getPersonalSkills,
  getMajor,
  getSubMajor,
  getUniversity
} = cvServices;

class UpdateProfile extends React.Component {
  state = {
    skills: [],
    pSkills: [],
    major: [],
    universities: []
  };
  async componentDidMount() {
    const skills = await getSkills();
    const pSkills = await getPersonalSkills();
    const major = await getMajor();
    const universities = await getUniversity();
    this.setState({
      skills,
      pSkills,
      major,
      universities
    });
  }
  handleMajorChange = async (value, option) => {
    console.log('value', value, option.key);
    const subMajor = await getSubMajor({ id: option.key });
    this.setState({
      subMajor
    });
  };
  render() {
    const { skills, pSkills, major, subMajor, universities } = this.state;
    return (
      <div className="user-container">
        <Header />
        <div className="updating-container">
          <div className="profile-updating">
            <Avatar />
            <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '4']}>
              <Panel header="معلومات شخصية" key="1" className="section-heading">
                <div className="collapse-line"></div>
                <div className="cv-personal-info">
                  {/* <h6>معلومات شخصية</h6> */}
                  <div className="right-side">
                    <h5 className="title-field">الاسم الثلاثي الكامل</h5>
                    <Input className="input-field" />
                    <h5 className="title-field">الجنس</h5>


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
                    <Input className="input-field input-filed-mob" />

                  </div>
                  <div>
                    <h5 className="title-field">تاريخ الميلاد</h5>

                    <Input className="input-field" />
                    <h5 className="title-field">الحالة الاجتماعية</h5>

                    <Input className="input-field input-filed-mob" />
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
                      <Select className="input-field">
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>
                    <div>
                      <h5 className="title-field">المدينة</h5>

                      <Select className="input-field">
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>
                  </div>
                  <h5 className="title-field">عنوان السكن الحالي</h5>
                  <TextArea rows={4} className="textarea-field" />
                </div>
              </Panel>
              <Panel header="الدراسة" key="3" className="section-heading">
                <div className="collapse-line"></div>
                <div className="location-info">
                  <div className="first-section">
                    <div style={{ marginLeft: '20px' }}>
                      <h5 className="title-field">الجامعة</h5>
                      <Select className="input-field">
                        {_.isArray(universities)
                          ? universities.map(elm => {
                              return (
                                <Option value={elm.universtyName} key={elm._id}>
                                  {elm.universtyName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                    <div>
                      <h5 className="title-field">التخصص العام</h5>

                      <Select
                        className="input-field"
                        onChange={this.handleMajorChange}
                      >
                        {_.isArray(major)
                          ? major.map(elm => {
                              return (
                                <Option value={elm.majorName} key={elm._id}>
                                  {elm.majorName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                  </div>
                  <div className="first-section">
                    <div style={{ marginLeft: '20px' }}>
                      <h5 className="title-field">التخصص الدقيق</h5>
                      <Select className="input-field">
                        {_.isArray(subMajor)
                          ? subMajor.map(elm => {
                              return (
                                <Option value={elm.majorName} key={elm._id}>
                                  {elm.majorName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                  </div>
                  <h5 className="title-field">نبذة عامة</h5>
                  <TextArea rows={4} className="textarea-field" />
                </div>
              </Panel>
              <Panel header="المهارات " key="4" className="section-heading">
                <div className="collapse-line"></div>
                <div style={{ marginLeft: '20px' }}>
                  <h5 className="title-field">مهارات شخصية</h5>
                  <Select className="input-field" mode="multiple">
                    {_.isArray(pSkills)
                      ? pSkills.map(elm => {
                          return (
                            <Option value={elm.skillName} key={elm._id}>
                              {elm.skillName}
                            </Option>
                          );
                        })
                      : ''}
                  </Select>
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <h5 className="title-field">مهارات عامة</h5>
                  <Select className="input-field" mode="multiple">
                    {_.isArray(skills)
                      ? skills.map(elm => {
                          return (
                            <Option value={elm.skillName} key={elm._id}>
                              {elm.skillName}
                            </Option>
                          );
                        })
                      : ''}
                  </Select>
                </div>
              </Panel>
              {/* 
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
              </Panel> */}
            </Collapse>
            <button className="save-changes-btn">حفظ</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default UpdateProfile;
