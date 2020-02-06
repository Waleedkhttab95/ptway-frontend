import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse, Select, DatePicker, Modal } from 'antd';
import Avatar from './UploadFile';
import cvServices from '../../../services/user/cv';
import statatisticsService from '../../../services/statisticsService';
// import store from '../../../store/createStore';
import moment from 'moment';
import _ from 'lodash';
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;
const { allCities, allCountries } = statatisticsService;
const {
  getSkills,
  getPersonalSkills,
  getMajor,
  getSubMajor,
  getUniversity,
  getinformation,
  updateCV
} = cvServices;

class UpdateProfile extends React.Component {
  state = {
    skills: [],
    pSkills: [],
    major: [],
    universities: [],
    updateSuccessMsg: false
  };
  async componentDidMount() {
    const userInfo = await getinformation();
    const skills = await getSkills();
    const pSkills = await getPersonalSkills();
    const major = await getMajor();
    const universities = await getUniversity();
    const countries = await allCountries();
    const cities = await allCities();

    this.setState({
      skills,
      pSkills,
      major,
      universities,
      userInfo: userInfo.info,
      countries,
      cities
    });
  }
  handleMajorChange = async (value, option) => {
    const subMajor = await getSubMajor({ id: option.key });
    this.setState({
      public_major: option.key,
      subMajor
    });
  };

  handleChange = (value, option) => {
    this.setState({
      ...this.state,
      [option.props.name]: option.key
    });
  };

  handleSkillsChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      skill: ids
    });
  };

  handlePersonalSkillsChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      per_skill: ids
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  DateChange = date => {
    this.setState({ birthDate: date });
  };
  updateCV = async () => {
    const {
      fullName,
      gender,
      mobile,
      birthDate,
      social_Status,
      languages,
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      per_skill
    } = this.state;
    const cvMsg = await updateCV({
      fullName,
      gender,
      mobile,
      birthDate,
      social_Status,
      languages,
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      per_skill
    });
    if (cvMsg) {
      console.log('herrrrrre');

      this.setState({
        updateSuccessMsg: true
      });
    }
  };
  render() {
    const {
      skills,
      pSkills,
      major,
      subMajor,
      universities,
      userInfo,
      countries,
      cities
    } = this.state;
    console.log('userInfo', userInfo);
    // let skObj;
    console.log('skObj', this.state);

    return (
      <div className="user-container">
        <Header />
        <div className="updating-container">
          <div className="profile-updating">
            <Avatar img={userInfo ? userInfo.imagePath : ''} />
            <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '4']}>
              <Panel header="معلومات شخصية" key="1" className="section-heading">
                <div className="collapse-line"></div>
                <div className="cv-personal-info">
                  {/* <h6>معلومات شخصية</h6> */}
                  <div className="right-side">
                    <h5 className="title-field">الاسم الثلاثي الكامل</h5>
                    <Input
                      className="input-field"
                      placeholder={userInfo ? userInfo.fullName : ''}
                      onChange={this.handleInputChange}
                      name="fullName"
                    />
                    <h5 className="title-field">الجنس</h5>

                    <Select
                      className="input-field"
                      placeholder={userInfo ? userInfo.gender : ''}
                      onChange={this.handleChange}
                    >
                      <Option name="gender" value="male" key="ذكر">
                        ذكر{' '}
                      </Option>
                      <Option name="gender" value="female" key="أنثى">
                        أنثى{' '}
                      </Option>
                    </Select>
                    <h5 className="title-field">الموبايل</h5>

                    <Input
                      className="input-field"
                      placeholder={userInfo ? userInfo.mobile : ''}
                      onChange={this.handleInputChange}
                      name="mobile"
                    />
                  </div>
                  <div>
                    <h5 className="title-field">تاريخ الميلاد</h5>
                    <DatePicker
                      onChange={this.DateChange}
                      className="input-field"
                      placeholder={
                        userInfo
                          ? moment(userInfo.birthDate).format('MMM-d-YY')
                          : ''
                      }
                    />

                    <h5 className="title-field">الحالة الاجتماعية</h5>

                    <Input
                      className="input-field"
                      placeholder={userInfo ? userInfo.social_Status : ''}
                      onChange={this.handleInputChange}
                      name="social_Status"
                    />
                    <h5 className="title-field">اللغات</h5>

                    <Input
                      className="input-field"
                      placeholder={
                        userInfo
                          ? userInfo.languages
                            ? userInfo.languages[0]
                            : ''
                          : ''
                      }
                      onChange={this.handleInputChange}
                      name="languages"
                    />
                  </div>
                </div>
                <h5 className="title-field">الوصف الوظيفي</h5>
                <TextArea
                  rows={4}
                  className="textarea-field"
                  placeholder={userInfo ? userInfo.about : ''}
                  onChange={this.handleInputChange}
                  name="about"
                />
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
                      <Select
                        className="input-field"
                        placeholder={
                          userInfo
                            ? userInfo.country
                              ? userInfo.country.countryName
                              : ''
                            : ''
                        }
                        onChange={this.handleChange}
                      >
                        {_.isArray(countries)
                          ? countries.map(elm => {
                              return (
                                <Option
                                  value={elm.value}
                                  key={elm.id}
                                  name="country"
                                >
                                  {elm.value}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                    <div>
                      <h5 className="title-field">المدينة</h5>

                      <Select
                        className="input-field"
                        placeholder={
                          userInfo
                            ? userInfo.city
                              ? userInfo.city.cityName
                              : ''
                            : ''
                        }
                        onChange={this.handleChange}
                      >
                        {_.isArray(cities)
                          ? cities.map(elm => {
                              return (
                                <Option
                                  value={elm.value}
                                  key={elm.id}
                                  name="city"
                                >
                                  {elm.value}
                                </Option>
                              );
                            })
                          : ''}
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
                      <Select
                        className="input-field"
                        placeholder={
                          userInfo
                            ? userInfo.universty
                              ? userInfo.universty.universtyName
                              : ''
                            : ''
                        }
                        onChange={this.handleChange}
                      >
                        {_.isArray(universities)
                          ? universities.map(elm => {
                              return (
                                <Option
                                  value={elm.universtyName}
                                  key={elm._id}
                                  name="university"
                                >
                                  {elm.universtyName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                    <div>
                      <h5 className="title-field">المستوى التعليمي</h5>
                      <Input
                        className="input-field"
                        placeholder={userInfo ? userInfo.Education_level : ''}
                        onChange={this.handleInputChange}
                        name="education_degree"
                      />
                    </div>
                  </div>
                  <div className="first-section">
                    <div style={{ marginLeft: '20px' }}>
                      <h5 className="title-field">التخصص العام</h5>

                      <Select
                        className="input-field"
                        onChange={this.handleMajorChange}
                        placeholder={
                          userInfo
                            ? userInfo.public_Major
                              ? userInfo.public_Major.majorName
                              : ''
                            : ''
                        }
                      >
                        {_.isArray(major)
                          ? major.map(elm => {
                              return (
                                <Option
                                  value={elm.majorName}
                                  key={elm._id}
                                  name="public_major"
                                >
                                  {elm.majorName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                    <div>
                      <h5 className="title-field">التخصص الدقيق</h5>
                      <Select
                        className="input-field"
                        placeholder={
                          userInfo
                            ? userInfo.spMajor
                              ? userInfo.spMajor.majorName
                              : ''
                            : ''
                        }
                        onChange={this.handleChange}
                      >
                        {_.isArray(subMajor)
                          ? subMajor.map(elm => {
                              return (
                                <Option
                                  value={elm.majorName}
                                  key={elm._id}
                                  name="s_Major"
                                >
                                  {elm.majorName}
                                </Option>
                              );
                            })
                          : ''}
                      </Select>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="المهارات " key="4" className="section-heading">
                <div className="collapse-line"></div>
                <div style={{ marginLeft: '20px' }}>
                  <h5 className="title-field">مهارات شخصية</h5>
                  <Select
                    className="input-field"
                    mode="multiple"
                    onChange={this.handlePersonalSkillsChange}
                  >
                    {_.isArray(pSkills)
                      ? pSkills.map(elm => {
                          return (
                            <Option
                              value={elm.skillName}
                              key={elm._id}
                              name="p_skill"
                            >
                              {elm.skillName}
                            </Option>
                          );
                        })
                      : ''}
                  </Select>
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <h5 className="title-field">مهارات عامة</h5>
                  <Select
                    className="input-field"
                    mode="multiple"
                    // value={
                    //   skills ? skills[userInfo ? userInfo.skills[0] : ''] : ''
                    // }
                    onChange={this.handleSkillsChange}
                  >
                    {_.isArray(skills)
                      ? skills.map(elm => {
                          // skObj[elm._id] = elm.skillName;

                          return (
                            <Option
                              value={elm.skillName}
                              key={elm._id}
                              name="skill"
                            >
                              {elm.skillName}
                            </Option>
                          );
                        })
                      : ''}
                  </Select>
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <h5 className="title-field">الهوايات</h5>
                  <Select className="input-field" mode="multiple">
                    {_.isArray(skills)
                      ? skills.map(elm => {
                          return (
                            <Option
                              value={elm.skillName}
                              key={elm._id}
                              name="hoppies"
                            >
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
            <button className="save-changes-btn" onClick={this.updateCV}>
              حفظ
            </button>
            <Modal
              visible={this.state.updateSuccessMsg}
              closable={false}
              footer={false}
            >
              <div className="success-modal">
                <i
                  className="fa fa-check-circle check-icon"
                  aria-hidden="true"
                ></i>
                <h2>تم تعديل السيرة الذاتية بنجاح</h2>
                <button onClick={() => this.props.history.push('/user/home')}>
                  العودة للرئيسية
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UpdateProfile;
