import React from 'react';
import '../style.scss';
import Footer from '../../Footer';
import { Input, Select, DatePicker, Modal } from 'antd';
import Header from '../../Header';
import projects from '../../../services/company/projects';
import { loadState } from '../../../_core/localStorage';
import statatisticsService from '../../../services/statisticsService';
import cvServices from '../../../services/user/cv';
import _ from 'lodash';
import moment from 'moment';
const { allCities, allCountries } = statatisticsService;
const { getPersonalSkills } = cvServices;
const { getProjects, addNewAd } = projects;
const { TextArea } = Input;
const { Option } = Select;

class AddNewAd extends React.Component {
  state = {
    allProjects: '',
    SuccessMsg: false,
    error: false
  };
  async componentDidMount() {
    const contractId = this.props.match.params.id;
    const allProjects = await getProjects();
    const countries = await allCountries();
    const cities = await allCities();
    const pSkills = await getPersonalSkills();
    this.setState({
      contractId,
      allProjects,
      countries,
      cities,
      pSkills
    });
  }

  handleSelectChange = (value, option) => {
    this.setState({
      ...this.state,
      [option.props.name]: option.key
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleDaysChange = e => {
    const { value, max, min } = e.target;
    this.setState({
      workDays: value,
      workDaysError: value > 1 && value < 5 ? false : true
    });
  };

  DateChange = date => {
    this.setState({ date });
  };

  handlePersonalSkillsChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      personalSkills: ids
    });
  };
  postAd = async () => {
    const { project, jobDetails, workHours, gender } = this.state;
    if (!project || !jobDetails || !workHours || !gender) {
      this.setState({
        error: true
      });
    } else {
      const data = {
        contract: this.state.contractId,
        jobDetails: this.state.jobDetails,
        project: this.state.project,
        workDays: this.state.workDays,
        workHours: this.state.workHours,
        personalSkills: this.state.personalSkills,
        date: moment(this.state.data).format(),
        jobDescription: this.state.jobDescription,
        jobTitle: this.state.jobTitle,
        gender: this.state.gender,
        salary: this.state.salary,
        country: this.state.country,
        city: this.state.city,
        required_Number: this.state.required_Number
      };
      await addNewAd(data);
      const { history } = this.props;
      if (loadState().loggedIn) {
        this.setState({
          SuccessMsg: true
        });
      } else {
        history.push('/company/login');
      }
    }
  };

  render() {
    const { allProjects, countries, cities, pSkills, error } = this.state;
    const { loggedIn } = loadState();

    return (
      <React.Fragment>
        {loggedIn && <Header />}
        <div className="company-container">
          <div className="new-ad-form">
            <h2 className="new-ad-title">إضافة إعلان جديد</h2>
            <p>
              أخيراً قم بتعبئة تفاصيل الإعلان الوظيفي الذي ترغب بإضافته ضمن
              مشروع
            </p>

            <div className="new-ad-details">
              <label>تفاصيل الإعلان الوظيفي</label>
              <TextArea
                row={6}
                onChange={this.handleChange}
                name="jobDetails"
              />
              {error && !this.state.jobDetails && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  هذا الحقل مطلوب
                </span>
              )}
              <br />
              <br />
              <label>المشروع الأساسي الذي سيندرج تحته الإعلان</label>
              <Select
                className="project-selection selector"
                onChange={this.handleSelectChange}
              >
                {_.isArray(allProjects.proj)
                  ? allProjects.proj.map(elm => (
                      <Option
                        value={elm.projectName}
                        key={elm._id}
                        name="project"
                      >
                        {elm.projectName}
                      </Option>
                    ))
                  : ''}
              </Select>
              {error && !this.state.project && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  هذا الحقل مطلوب
                </span>
              )}
              <br />
              <br />
              <label>المسمى الوظيفي المطلوب</label>
              <Input onChange={this.handleChange} name="jobTitle" />
              {error && !this.state.jobTitle && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  هذا الحقل مطلوب
                </span>
              )}
              <br />
              <br />
              <div className="group-questions">
                <div className="right-side">
                  <label>عدد ساعات العمل</label>
                  <Input
                    onChange={this.handleChange}
                    name="workHours"
                    type="number"
                  />
                  <br />
                  {error && !this.state.workHours && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                  <label>الجنس</label>
                  <Select
                    className="input-field"
                    onChange={this.handleSelectChange}
                  >
                    <Option name="gender" value="male" key="ذكر">
                      ذكر{' '}
                    </Option>
                    <Option name="gender" value="female" key="أنثى">
                      أنثى{' '}
                    </Option>
                  </Select>
                  <br />
                  {error && !this.state.gender && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                  <label>الراتب</label>

                  <Input onChange={this.handleChange} name="salary" />
                  <br />
                  {error && !this.state.salary && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                </div>
                <div className="left-side">
                  <label>عدد أيام العمل</label>
                  <Input
                    onChange={this.handleChange}
                    name="workDays"
                    type="number"
                    min={1}
                    max={5}
                    maxLength={1}
                  />
                  <br />
                  {error && !this.state.workDays && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  {/* {this.state.workDaysError && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      xxxهذا الحقل مطلوب
                    </span>
                  )} */}
                  <br />
                  <label>تاريخ بدء العمل</label>
                  <DatePicker
                    onChange={this.DateChange}
                    className="input-field date-web"
                    placeholder=""
                  />
                  <Input
                    type="date"
                    name="date"
                    onChange={this.handleChange}
                    className="input-field date-mobile"
                    value={this.state.date}
                  />
                  <br />
                  {error && !this.state.gender && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                  <label>العدد المطلوب</label>
                  <Input
                    onChange={this.handleChange}
                    name="required_Number"
                    type="number"
                  />
                  <br />
                  {error && !this.state.required_Number && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                </div>
              </div>
              <br />
              <label>وصف الوظيفي</label>
              <TextArea
                row={4}
                onChange={this.handleChange}
                name="jobDescription"
              />
              {error && !this.state.jobDescription && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  هذا الحقل مطلوب
                </span>
              )}
              <br />
              <label>المهارات الشخصية :</label>
              <br />
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
                          name="skills"
                        >
                          {elm.skillName}
                        </Option>
                      );
                    })
                  : ''}
              </Select>
              <br />
              {error && !this.state.skills && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  هذا الحقل مطلوب
                </span>
              )}
              <br />
              <div className="last-ad-group">
                <div>
                  <label className="sub-heading">الدولة</label>
                  <Select
                    className="input-field"
                    onChange={this.handleSelectChange}
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
                  <br />
                  {error && !this.state.country && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                </div>
                <div>
                  <label className="sub-heading">المدينة</label>
                  <Select
                    className="input-field"
                    onChange={this.handleSelectChange}
                  >
                    {_.isArray(cities)
                      ? cities.map(elm => {
                          return (
                            <Option value={elm.value} key={elm.id} name="city">
                              {elm.value}
                            </Option>
                          );
                        })
                      : ''}
                  </Select>
                  <br />
                  {error && !this.state.city && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      هذا الحقل مطلوب
                    </span>
                  )}
                  <br />
                </div>
              </div>
            </div>
            <button className="add-new-ad-btn" onClick={this.postAd}>
              أضف الإعلان الوظيفي
            </button>
            <Modal
              visible={this.state.SuccessMsg}
              closable={false}
              footer={false}
            >
              <div className="success-modal">
                <i
                  className="fa fa-check-circle check-icon"
                  aria-hidden="true"
                ></i>
                <h2>تمت الاضافة بنجاح</h2>
                <button
                  onClick={() => this.props.history.push('/company/home')}
                >
                  العودة للرئيسية
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AddNewAd;
