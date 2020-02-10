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

    const info = userInfo.info;
    console.log('infoinfo', info);

    this.setState({
      skills,
      pSkills,
      major,
      universities,
      userInfo: info,
      countries,
      cities,
      fullName: info.fullName,
      gender: info.gender,
      mobile: info.mobile,
      birthDate: info.birthDate,
      university: info.universty ? info.universty._id : '',
      public_major: info.public_Major ? info.public_Major._id : '',
      s_Major: info.spMajor ? info.spMajor._id : '',
      city: info.city ? info.city._id : '',
      country: info.country ? info.country._id : '',
      social_Status: info.social_Status,
      about: info.about,
      Education_level: info.Education_level,
      study_degree: info.study_degree,
      language: info.languages,
      personal_web: info.personal_web,
      facebook: info.facebook,
      linkedin: info.linkedin,
      twitter: info.twitter,
      file: info.imagePath,
      per_skill: info.personal_Skills[0],
      skill: info.skills[0]
    });
  }
  handleMajorChange = async (value, option) => {
    const subMajor = await getSubMajor({ id: option.key });
    this.setState({
      public_major: option.key,
      subMajor
    });
  };

  fileChangedHandler = ev => {
    console.log('*****', ev.target.files);

    this.setState({
      file: ev.target.files[0]
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
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      per_skill,
      study_degree,
      language,
      about,
      personal_web,
      facebook,
      linkedin,
      twitter,
      file
    } = this.state;

    const cvMsg = await updateCV({
      fullName,
      gender,
      mobile,
      birthDate,
      social_Status,
      city,
      country,
      public_major,
      university,
      s_Major,
      education_degree,
      skill,
      per_skill,
      study_degree,
      language,
      about,
      personal_web,
      facebook,
      linkedin,
      twitter,
      file
    });
    if (cvMsg) {
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

    return (
      <div className="user-container">
        <Header />
        <div className="updating-container">
          <div className="profile-updating">
            <Avatar
              img={this.state.image}
              getImage={file => this.setState({ file })}
            />
            {/* <input
              type="file"
              accept="image/*"
              onChange={this.fileChangedHandler}
            /> */}
            <Collapse
              bordered={false}
              defaultActiveKey={['1', '2', '3', '4', '5']}
            >
              <Panel header="معلومات شخصية" key="1" className="section-heading">
                <div className="collapse-line"></div>
                <div className="cv-personal-info">
                  {/* <h6>معلومات شخصية</h6> */}
                  <div className="right-side">
                    <h5 className="title-field">الاسم الثلاثي الكامل</h5>
                    <Input
                      className="input-field"
                      placeholder={this.state.fullName}
                      onChange={this.handleInputChange}
                      name="fullName"
                    />
                    <h5 className="title-field">الجنس</h5>

                    <Select
                      className="input-field"
                      placeholder={this.state.gender}
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
                      placeholder={this.state.mobile}
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
                          ? moment(this.state.birthDate).format('MMM-d-YY')
                          : ''
                      }
                    />

                    <h5 className="title-field">الحالة الاجتماعية</h5>

                    <Select
                      className="input-field"
                      placeholder={this.state.social_Status}
                      onChange={this.handleChange}
                    >
                      <Option name="social_Status" value="single" key="أعزب">
                        أعزب{' '}
                      </Option>
                      <Option name="social_Status" value="married" key="متزوج">
                        متزوج{' '}
                      </Option>
                    </Select>
                    <h5 className="title-field">اللغات</h5>
                    <Select
                      className="input-field"
                      placeholder={this.state.language}
                      onChange={this.handleChange}
                    >
                      <Option name="language" value="arabic" key="العربية">
                        العربية{' '}
                      </Option>
                      <Option name="language" value="english" key="الانجليزية">
                        الانجليزية{' '}
                      </Option>
                      <Option name="language" value="france" key="الفرنسية">
                        الفرنسية{' '}
                      </Option>
                    </Select>
                  </div>
                </div>
                <h5 className="title-field">الوصف الوظيفي</h5>
                <TextArea
                  rows={4}
                  className="textarea-field"
                  placeholder={this.state.about}
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
                      <h5 className="title-field">المرحلة الدراسية الحالية</h5>
                      <Select
                        className="input-field"
                        placeholder={this.state.study_degree}
                        onChange={this.handleChange}
                      >
                        <Option
                          name="study_degree"
                          value="HS"
                          key="ثانوية عامة"
                        >
                          ثانوية عامة{' '}
                        </Option>
                        <Option name="study_degree" value="diploma" key="دبلوم">
                          دبلوم{' '}
                        </Option>
                        <Option name="study_degree" value="BHO" key="بكالوريس">
                          بكالوريس{' '}
                        </Option>
                        <Option
                          name="study_degree"
                          value="Undergraduate"
                          key="خريج"
                        >
                          خريج{' '}
                        </Option>
                        <Option name="social_Status" value="MASTER" key="ماستر">
                          ماستر{' '}
                        </Option>
                      </Select>
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
                <div className="first-section">
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
                  <div>
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
                </div>
                <div className="first-section">
                  <div style={{ marginLeft: '20px' }}>
                    <h5 className="title-field">مهارات العمل</h5>
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

                  <div>
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
                </div>
              </Panel>
              <Panel
                header="التواصل الاجتماعي"
                key="5"
                className="section-heading"
              >
                <div className="collapse-line"></div>
                <div className="general-skills">
                  <div>
                    <h5 className="title-field">الموقع الشخصي</h5>
                    <Input
                      className="input-field"
                      style={{ marginLeft: '20px' }}
                      placeholder={this.state.personal_web}
                      onChange={this.handleInputChange}
                      name="personal_web"
                    />
                    <h5 className="title-field">رابط linkedin</h5>
                    <Input
                      className="input-field"
                      placeholder={this.state.linkedin}
                      onChange={this.handleInputChange}
                      name="linkedin"
                    />
                  </div>
                  <div>
                    <h5 className="title-field">رابط الفيسبوك</h5>
                    <Input
                      className="input-field"
                      style={{ marginLeft: '20px' }}
                      placeholder={this.state.facebook}
                      onChange={this.handleInputChange}
                      name="facebook"
                    />
                    <h5 className="title-field">رابط تويتر</h5>
                    <Input
                      className="input-field"
                      placeholder={this.state.twitter}
                      onChange={this.handleInputChange}
                      name="twitter"
                    />
                  </div>
                </div>
              </Panel>
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
