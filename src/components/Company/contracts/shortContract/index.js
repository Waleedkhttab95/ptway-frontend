import React from 'react';
import '../style.scss';
import Footer from '../../../Footer';
import { Input, Select, DatePicker, Modal, Spin } from 'antd';
import Header from '../../../Header';
import projects from '../../../../services/company/projects';
import { loadState } from '../../../../_core/localStorage';
import statatisticsService from '../../../../services/statisticsService';
import cvServices from '../../../../services/user/cv';
import _ from 'lodash';
import moment from 'moment';
import { Formik } from 'formik';
import validationSchema from './validation';
const { allCities, allCountries } = statatisticsService;
const { getPersonalSkills } = cvServices;
const { getProjects, addNewAd } = projects;
const { TextArea } = Input;
const { Option } = Select;

class AddNewAd extends React.Component {
  state = {
    allProjects: '',
    SuccessMsg: false,
    error: false,
    sending: false
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

  DateChange = date => {
    this.setState({ date });
  };

  handlePersonalSkillsChange = (value, option) => {
    const ids = option.map(elm => elm.key);
    this.setState({
      personalSkills: ids
    });
  };
  postAd = async values => {
    const { project, gender, personalSkills, date, country, city } = this.state;
    if (!project || !personalSkills || !gender || !date || !country || !city) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        sending: true
      });
      const data = {
        contract: this.state.contractId,
        jobDetails: values.jobDetails,
        project: this.state.project,
        workDays: values.workDays,
        workHours: values.workHours,
        personalSkills: this.state.personalSkills,
        date: moment(this.state.data).format(),
        jobDescription: values.jobDescription,
        jobTitle: values.jobTitle,
        gender: this.state.gender,
        salary: values.salary,
        country: this.state.country,
        city: this.state.city,
        required_Number: values.required_Number
      };
      await addNewAd(data);
      const { history } = this.props;
      if (loadState().loggedIn) {
        this.setState({
          SuccessMsg: true,
          sending: false
        });
      } else {
        history.push('/company/login');
      }
    }
  };

  render() {
    const {
      allProjects,
      countries,
      cities,
      pSkills,
      error,
      sending
    } = this.state;
    const { loggedIn } = loadState();
    console.log('state', this.state);

    return (
      <React.Fragment>
        {loggedIn && <Header />}
        <div className="company-container">
          <Formik
            initialValues={{
              workDays: 0,
              workHours: 0,
              salary: 0,
              project: ''
            }}
            validationSchema={validationSchema}
            onSubmit={values => this.postAd(values)}
          >
            {({ handleSubmit, errors, handleChange, touched, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <div className="new-ad-form">
                  <h2 className="new-ad-title">إضافة إعلان جديد</h2>
                  <p>
                    قم بتعبئة تفاصيل الإعلان الوظيفي الذي ترغب بإضافته ضمن مشروع
                  </p>
                  <div className="new-ad-details">
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
                    <Input
                      onChange={handleChange}
                      name="jobTitle"
                      onBlur={handleBlur}
                    />
                    {errors.jobTitle && touched.jobTitle && (
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        {errors.jobTitle}
                      </span>
                    )}
                    <br />
                    <br />
                    <div className="group-questions">
                      <div className="right-side">
                        <label>عدد ساعات العمل (بحد اقصى 12 ساعة)</label>

                        <Input
                          onChange={handleChange}
                          name="workHours"
                          type="number"
                          onBlur={handleBlur}
                        />
                        <br />
                        {errors.workHours && touched.workHours && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            {errors.workHours}
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
                          <Option name="gender" value="both" key="both">
                            ذكر و انثى{' '}
                          </Option>
                        </Select>
                        <br />
                        {error && !this.state.gender && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            هذا الحقل مطلوب
                          </span>
                        )}
                        <br />
                        <label>الراتب (بحد ادنى 100 ريال / يوم)</label>
                        <Input
                          onChange={handleChange}
                          name="salary"
                          type="number"
                          onBlur={handleBlur}
                        />
                        <br />
                        {errors.salary && touched.salary ? (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            {errors.salary}
                          </span>
                        ) : (
                          ''
                        )}
                        <br />
                      </div>
                      <div className="left-side">
                        <label>عدد أيام العمل (بحد اقصى 59 يوم)</label>
                        <Input
                          onChange={handleChange}
                          name="workDays"
                          type="number"
                          onBlur={handleBlur}
                        />
                        <br />
                        {errors.workDays && touched.workDays && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            {errors.workDays}
                          </span>
                        )}
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
                          onChange={handleChange}
                          className="input-field date-mobile"
                          value={this.state.date}
                          onBlur={handleBlur}
                        />
                        <br />
                        {error && !this.state.date && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            هذا الحقل مطلوب
                          </span>
                        )}
                        <br />
                        <label>العدد المطلوب</label>
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="required_Number"
                          type="number"
                        />
                        <br />
                        {errors.required_Number && touched.required_Number && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            {errors.required_Number}
                          </span>
                        )}
                      </div>
                    </div>
                    <br />
                    <label>وصف الوظيفي</label>
                    <TextArea
                      row={4}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="jobDescription"
                    />
                    {errors.jobDescription && touched.jobDescription && (
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        {errors.jobDescription}
                      </span>
                    )}
                    <br />
                    <label>المهارات الشخصية :</label>
                    <br />
                    <Select
                      className="input-field"
                      mode="multiple"
                      onChange={this.handlePersonalSkillsChange}
                      style={{
                        maxHeight: '70px',
                        height: 'auto',
                        overflowY: 'scroll',
                        width: '100%'
                      }}
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
                    {error && !this.state.personalSkills && (
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
                  <button
                    className={
                      sending
                        ? 'applay-job-btn-loading add-new-ad-btn'
                        : 'add-new-ad-btn'
                    }
                  >
                    {sending ? <Spin size="small" /> : ' أضف الإعلان الوظيفي'}
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
              </form>
            )}
          </Formik>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default AddNewAd;
