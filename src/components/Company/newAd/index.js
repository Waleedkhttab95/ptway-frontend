import React from 'react';
import './style.scss';
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
    SuccessMsg: false
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
    console.log('this.state.contractId', this.state.contractId);

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
  };

  render() {
    const { allProjects, countries, cities, pSkills } = this.state;
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
              <label>المسمى الوظيفي المطلوب</label>
              <Input onChange={this.handleChange} name="jobTitle" />
              <div className="group-questions">
                <div className="right-side">
                  <label>عدد ساعات العمل</label>
                  <Input
                    onChange={this.handleChange}
                    name="workHours"
                    type="number"
                  />
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
                  <label>الراتب</label>
                  <Input onChange={this.handleChange}
                    type="number"
                  name="salary" />
                </div>
                <div className="left-side">
                  <label>عدد أيام العمل</label>
                  <Input
                    onChange={this.handleChange}
                    name="workDays"
                    type="number"
                  />
                  <label>تاريخ بدء العمل</label>
                  <DatePicker
                    onChange={this.DateChange}
                    className="input-field"
                    placeholder=""
                  />
                  <label>العدد المطلوب</label>
                  <Input
                    onChange={this.handleChange}
                    name="required_Number"
                    type="number"
                  />
                </div>
              </div>
              <label>وصف الوظيفي</label>
              <TextArea
                row={4}
                onChange={this.handleChange}
                name="jobDescription"
              />
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
