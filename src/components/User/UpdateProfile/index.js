import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import {
  Input,
  Collapse,
  Select,
  DatePicker,
  Modal,
  Spin,
  TreeSelect
} from 'antd';
import Avatar from './UploadFile';
import cvServices from '../../../services/user/cv';
import statatisticsService from '../../../services/statisticsService';
// import store from '../../../store/createStore';
import educationLevel from './educationLevel';
import moment from 'moment';
import _ from 'lodash';
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;
const { allCities, allCountries } = statatisticsService;

const { SHOW_PARENT } = TreeSelect;
const {
  getSkills,
  getPersonalSkills,
  getMajor,
  getSubMajor,
  getUniversity,
  getinformation,
  updateCV,
  jobCategories
} = cvServices;

class UpdateProfile extends React.Component {
  state = {
    skills: '',
    pSkills: '',
    major: [],
    universities: [],
    education_levels: [],
    updateSuccessMsg: false,
    datebirthError: false
  };
  async componentDidMount() {
    const userInfo = await getinformation();
    const skills = await getSkills();
    const pSkills = await getPersonalSkills();
    const major = await getMajor();
    const universities = await getUniversity();
    const countries = await allCountries();
    const cities = await allCities();
    const categories = await jobCategories();

    const info = userInfo.info;
    if (info.public_Major && !info.spMajor) {
      const subMajor = await getSubMajor({ id: info.public_Major._id });
      this.setState({
        subMajor
      });
    }
    this.setState({
      skills,
      pSkills,
      major,
      universities,
      userInfo: info,
      countries,
      cities,
      categories,
      fullName: info.fullName,
      gender: info.gender,
      mobile: info.mobile ? info.mobile : '',
      birthDate: info.birthDate,
      university: info.universty ? info.universty._id : null,
      public_major: info.public_Major ? info.public_Major._id : null,
      s_Major: info.spMajor ? info.spMajor._id : null,
      city: info.city ? info.city._id : null,
      country: info.country ? info.country._id : '',
      social_Status: info.social_Status ? info.social_Status : '',
      about: info.about ? info.about : '',
      education_level: info.Education_level ? info.Education_level : '',
      education_degree: info.education_degree ? info.education_degree : '',
      study_degree: info.study_degree ? info.study_degree : '',
      language: info.languagesWithLevel
        ? JSON.parse(info.languagesWithLevel)
        : [],
      hoppies:
        info.hoppies && info.hoppies[0] !== 'undefined' ? info.hoppies : [],
      personal_web: info.personal_web ? info.personal_web : '',
      facebook: info.facebook ? info.facebook : '',
      linkedin: info.linkedin ? info.linkedin : '',
      twitter: info.twitter ? info.twitter : '',
      file: info.imagePath ? info.imagePath : '',
      per_skill: info.personal_Skills ? info.personal_Skills : '',
      skill: info.skills ? info.skills : '',
      jobCategory:
        info.jobCategory && info.jobCategory.length !== 0
          ? info.jobCategory.map(e => e._id)
          : [],
      userStatus: info.userStatus ? info.userStatus : '',
      availabilityStatus: info.availabilityStatus ? info.availabilityStatus : ''
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

  handleCategoryChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      jobCategory: ids
    });
  };
  handleLanguageChange = (value, label, extra) => {
    // const allData = extra.allCheckedNodes.map(elm => elm.node.props);
    this.setState({ language: value });
  };
  handleHoppiesChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      hoppies: ids
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

  handleDateMobileChange = e => {
    const { name, value } = e.target;
    const age = moment().diff(value, 'years');
    if (age <= 16) {
      this.setState({
        datebirthError: true
      });
    } else {
      this.setState({
        ...this.state,
        [name]: value,
        datebirthError: false
      });
    }
  };

  DateChange = date => {
    const age = moment().diff(date, 'years');
    if (age <= 16) {
      this.setState({
        datebirthError: true
      });
    } else {
      this.setState({ birthDate: date, datebirthError: false });
    }
  };

  educationDegreeHandle = async (value, option) => {
    const education_levels = await educationLevel(option.key);
    this.setState({
      education_degree: option.key,
      education_levels
    });
  };

  educationLevelHandle = (value, option) => {
    this.setState({
      education_level: option.key
    });
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
      file,
      education_level,
      jobCategory,
      userStatus,
      availabilityStatus,
      hoppies,
      userInfo
    } = this.state;
    if (userInfo.public_Major._id !== public_major)
      await this.setState({
        s_Major: null
      });
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
      s_Major: this.state.s_Major,
      education_degree,
      education_level,
      skill,
      per_skill,
      study_degree,
      language,
      about,
      personal_web,
      facebook,
      linkedin,
      twitter,
      file,
      jobCategory,
      userStatus,
      hoppies,
      availabilityStatus
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
      cities,
      categories,
      education_levels,
      datebirthError,
      language
    } = this.state;
    const hoppies = [
      'القراءة',
      'الكتابة',
      'السباحة',
      'الرياضة',
      'العاب الفيديو'
    ];

    const certificate = [
      { value: 'HS', viewValue: 'ثانوية عامة' },
      { value: 'BHO', viewValue: 'بكالوريوس' },
      { value: 'MASTER', viewValue: 'ماستر' },
      { value: 'diploma', viewValue: 'دبلوم' },
      { value: 'noncertificate', viewValue: 'لايوجد' }
    ];
    const education_degree = [
      { value: 'HS', viewValue: 'ثانوية عامة' },
      { value: 'BHO', viewValue: 'بكالوريوس' },
      { value: 'MASTER', viewValue: 'ماستر' },
      { value: 'diploma', viewValue: 'دبلوم' },
      { value: 'Undergraduate', viewValue: 'خريج' }
    ];

    const status = ['متفرغ', 'موظف', 'طالب'];
    const availabilityStatus = ['صباحي', 'مسائي'];
    let skillsObj;
    let pSkillsObj;
    const updatedSkills = _.isArray(skills)
      ? skills.map(elm => {
          return (skillsObj = {
            ...skillsObj,
            [elm._id]: elm.skillName
          });
        })
      : '';
    const updatedPSkills = _.isArray(pSkills)
      ? pSkills.map(elm => {
          return (pSkillsObj = {
            ...pSkillsObj,
            [elm._id]: elm.skillName
          });
        })
      : '';

    const children = ['مبتديء', 'متوسط', 'متقدم'];
    const lang = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية'];
    const languagesProps = lang.map(elm => {
      return {
        title: elm,
        value: elm,
        key: elm,
        children: children.map(subElm => {
          return {
            title: `${elm}-${subElm}`,
            value: `${elm}-${subElm}`,
            key: `${elm}-${subElm}`
          };
        })
      };
    });

    const tProps = {
      treeData: languagesProps,
      value: this.state.language,
      //placeholder: this.state.language ? this.state.language.map(elm => {
      //     console.log('value', elm.value);
      //     return elm.value;
      //   })
      // : []
      // ,
      onChange: this.handleLanguageChange,
      multiple: true,
      showArrow: true,
      className: 'input-field',
      disableCheckbox: true,
      style: {
        height: 'auto'
      }
    };

    return (
      <div className="user-container">
        <Header />
        <div className="updating-container">
          <div className="profile-updating">
            <Avatar
              img={this.state.image}
              getImage={file => this.setState({ file })}
            />
            {userInfo ? (
              <React.Fragment>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1', '2', '3', '4', '5']}
                  className="updating-form"
                >
                  <Panel
                    header="معلومات شخصية"
                    key="1"
                    className="section-heading"
                  >
                    <div className="collapse-line"></div>
                    <div className="cv-personal-info">
                      {/* <h6>معلومات شخصية</h6> */}
                      <div className="right-side">
                        <h5 className="title-field">الاسم الثلاثي الكامل</h5>
                        <Input
                          className="input-field"
                          value={this.state.fullName}
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
                        <h5 className="title-field">رقم الجوال</h5>

                        <Input
                          className="input-field"
                          value={this.state.mobile}
                          onChange={this.handleInputChange}
                          name="mobile"
                        />
                        <h5 className="title-field">الإهتمامات الوظيفية</h5>
                        <Select
                          showArrow={true}
                          className="input-field"
                          defaultValue={
                            userInfo && userInfo.jobCategory
                              ? userInfo.jobCategory.map(e => e.jobName)
                              : []
                          }
                          onChange={this.handleCategoryChange}
                          mode="multiple"
                        >
                          {_.isArray(categories)
                            ? categories.map(elm => {
                                return (
                                  <Option
                                    value={elm.jobName}
                                    key={elm._id}
                                    name="jobCategory"
                                  >
                                    {elm.jobName}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
                        <h5 className="title-field">الأوقات المتاحة</h5>
                        <Select
                          className="input-field"
                          placeholder={
                            userInfo ? userInfo.availabilityStatus : ''
                          }
                          onChange={this.handleChange}
                        >
                          {_.isArray(availabilityStatus)
                            ? availabilityStatus.map(elm => {
                                return (
                                  <Option
                                    value={elm}
                                    key={elm}
                                    name="availabilityStatus"
                                  >
                                    {elm}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
                      </div>
                      <div>
                        <h5 className="title-field">تاريخ الميلاد</h5>
                        <DatePicker
                          onChange={this.DateChange}
                          className="input-field date-web"
                          placeholder={
                            userInfo
                              ? moment(userInfo.birthDate).format('MMM-d-YY')
                              : ''
                          }
                        />
                        <Input
                          type="date"
                          name="birthDate"
                          onChange={this.handleDateMobileChange}
                          className="input-field date-mobile"
                          placeholder={
                            userInfo
                              ? moment(userInfo.birthDate).format('MMM-d-YY')
                              : ''
                          }
                          value={this.state.birthDate}
                        />
                        {datebirthError && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            يجب أن يكون عمرك أكبر من 15 عاماً
                          </span>
                        )}

                        <h5 className="title-field">الحالة الاجتماعية</h5>

                        <Select
                          className="input-field"
                          placeholder={userInfo ? userInfo.social_Status : ''}
                          onChange={this.handleChange}
                        >
                          <Option name="social_Status" value="أعزب" key="أعزب">
                            أعزب{' '}
                          </Option>
                          <Option
                            name="social_Status"
                            value="متزوج"
                            key="متزوج"
                          >
                            متزوج{' '}
                          </Option>
                        </Select>
                        <h5 className="title-field">اللغات</h5>
                        <TreeSelect {...tProps} />

                        <h5 className="title-field">حالة المستخدم</h5>
                        <Select
                          className="input-field"
                          placeholder={userInfo ? userInfo.userStatus : ''}
                          onChange={this.handleChange}
                        >
                          {_.isArray(status)
                            ? status.map(elm => {
                                return (
                                  <Option
                                    value={elm}
                                    key={elm}
                                    name="userStatus"
                                  >
                                    {elm}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
                      </div>
                    </div>
                    <h5 className="title-field">النبذة</h5>
                    <TextArea
                      rows={4}
                      className="textarea-field"
                      value={this.state.about}
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
                          <h5 className="title-field">الشهادة التي تحملها</h5>
                          <Select
                            className="input-field"
                            placeholder={certificate.map(elm => {
                              return userInfo
                                ? userInfo.study_degree === elm.value
                                  ? elm.viewValue
                                  : ''
                                : '';
                            })}
                            onChange={this.handleChange}
                          >
                            {_.isArray(certificate)
                              ? certificate.map(elm => {
                                  return (
                                    <Option
                                      value={elm.viewValue}
                                      key={elm.value}
                                      name="study_degree"
                                    >
                                      {elm.viewValue}
                                    </Option>
                                  );
                                })
                              : ''}
                          </Select>
                        </div>
                      </div>
                      <div className="first-section">
                        <div style={{ marginLeft: '20px' }}>
                          <h5 className="title-field">
                            المرحلة الدراسية الحالية
                          </h5>
                          <Select
                            className="input-field"
                            placeholder={education_degree.map(elm => {
                              return userInfo
                                ? userInfo.education_degree === elm.value
                                  ? elm.viewValue
                                  : ''
                                : '';
                            })}
                            onChange={this.educationDegreeHandle}
                          >
                            {_.isArray(education_degree)
                              ? education_degree.map(elm => {
                                  return (
                                    <Option
                                      value={elm.viewValue}
                                      key={elm.value}
                                      name="education_degree"
                                    >
                                      {elm.viewValue}
                                    </Option>
                                  );
                                })
                              : ''}
                          </Select>
                        </div>
                        <div>
                          <h5 className="title-field"> المستوى التعليمي</h5>
                          <Select
                            className="input-field"
                            placeholder={
                              userInfo ? userInfo.Education_level : ''
                            }
                            onChange={this.educationLevelHandle}
                          >
                            {_.isArray(education_levels)
                              ? education_levels.map(elm => {
                                  return (
                                    <Option
                                      value={elm.viewValue}
                                      key={elm.value}
                                      name="education_level"
                                    >
                                      {elm.viewValue}
                                    </Option>
                                  );
                                })
                              : ''}
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
                          showArrow={true}
                          className="input-field"
                          style={{
                            maxHeight: '70px',
                            height: 'auto',
                            overflowY: 'scroll'
                          }}
                          mode="multiple"
                          onChange={this.handlePersonalSkillsChange}
                          defaultValue={
                            userInfo &&
                            userInfo.personal_Skills !== null &&
                            _.isArray(userInfo.personal_Skills)
                              ? userInfo.personal_Skills.map(elm => {
                                  return pSkillsObj[elm];
                                })
                              : []
                          }
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
                          showArrow={true}
                          className="input-field"
                          mode="multiple"
                          style={{
                            maxHeight: '70px',
                            height: 'auto',
                            overflowY: 'scroll'
                          }}
                          defaultValue={
                            userInfo &&
                            userInfo.skills !== null &&
                            _.isArray(userInfo.skills)
                              ? userInfo.skills.map(elm => {
                                  return skillsObj[elm];
                                })
                              : []
                          }
                          onChange={this.handleSkillsChange}
                        >
                          {_.isArray(skills)
                            ? skills.map(elm => {
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
                      <div>
                        <h5
                          className="title-field"
                          style={{ marginTop: '20px' }}
                        >
                          الهوايات
                        </h5>
                        <Select
                          showArrow={true}
                          className="input-field"
                          mode="multiple"
                          style={{
                            maxHeight: '70px',
                            height: 'auto',
                            overflowY: 'scroll'
                          }}
                          onChange={this.handleHoppiesChange}
                          defaultValue={
                            userInfo &&
                            _.isArray(userInfo.hoppies) &&
                            userInfo.hoppies[0] !== 'undefined'
                              ? userInfo.hoppies
                              : []
                          }
                        >
                          {_.isArray(hoppies)
                            ? hoppies.map(elm => {
                                return (
                                  <Option value={elm} key={elm} name="hoppies">
                                    {elm}
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
                          placeholder={userInfo ? userInfo.personal_web : ''}
                          onChange={this.handleInputChange}
                          name="personal_web"
                        />
                        <h5 className="title-field">رابط linkedin</h5>
                        <Input
                          className="input-field"
                          placeholder={userInfo ? userInfo.linkedin : ''}
                          onChange={this.handleInputChange}
                          name="linkedin"
                        />
                      </div>
                      <div>
                        <h5 className="title-field">رابط الفيسبوك</h5>
                        <Input
                          className="input-field"
                          style={{ marginLeft: '20px' }}
                          placeholder={userInfo ? userInfo.facebook : ''}
                          onChange={this.handleInputChange}
                          name="facebook"
                        />
                        <h5 className="title-field">رابط تويتر</h5>
                        <Input
                          className="input-field"
                          placeholder={userInfo ? userInfo.twitter : ''}
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
              </React.Fragment>
            ) : (
              <div className="spinner-loading">
                <Spin size="large" />
              </div>
            )}
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