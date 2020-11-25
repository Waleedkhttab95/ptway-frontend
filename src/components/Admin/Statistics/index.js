import React from 'react';
import 'antd/dist/antd.css';
import './statistics.scss';
import { Row, Col, Button, Input, Form, Select, Result } from 'antd';
import userData from '../../../services/user/cv';
import statatisticsService from '../../../services/statisticsService';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const {
  getMajor,
  getSubMajor,
  jobCategories,
  getUniversity,
  getSkills,
  getPersonalSkills
} = userData;
const { allCities, SearchUsersFilter } = statatisticsService;

class UserStatistics extends React.Component {
  state = {
    value: '',
    countries: [],
    cities: [],
    showResult: false
  };
  async componentDidMount() {
    const cities = await allCities();
    this.setState({ cities });

    const majors = await getMajor();
    this.setState({ majors });

    const categories = await jobCategories();
    this.setState({ jobCategories: categories });
    const universities = await getUniversity();
    this.setState({ universities });
    const skills = await getSkills();
    this.setState({ skills });
    const personalSkills = await getPersonalSkills();
    this.setState({ personalSkills });
  }

  handleSubMajor = async (value, option) => {
    const subMajor = await getSubMajor({ id: option.key });
    this.setState({ subMajor });
  };
  ageCount = () => {
    const { age } = this.props;
    age(this.state.value);
  };

  onFinish = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const userData = await SearchUsersFilter({
            ...values
          });
          this.setState({ showResult: true, userData });
        } catch (error) {
          console.log('error');
        }
      }
    });
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo.fullName);
  };

  render() {
    const {
      subMajor,
      jobCategories,
      cities,
      universities,
      majors,
      skills,
      personalSkills,
      showResult,
      userData
    } = this.state;
    console.log('userData', userData);
    const { getFieldDecorator } = this.props.form;
    const certificate = [
      { value: 'HS', viewValue: 'ثانوية عامة' },
      { value: 'BHO', viewValue: 'بكالوريوس' },
      { value: 'MASTER', viewValue: 'ماستر' },
      { value: 'diploma', viewValue: 'دبلوم' },
      { value: 'noncertificate', viewValue: 'لايوجد' }
    ];

    const hoppies = [
      'القراءة',
      'الكتابة',
      'السباحة',
      'الرياضة',
      'العاب الفيديو'
    ];

    return (
      <Row justify="center">
        <Col span={9}>
          <>
            {showResult && (
              <Result
                status="success"
                title="نتيجة البحث"
                subTitle={userData?.usersCount}
                style={{ textAlign: 'center' }}
                extra={[
                  userData?.users && (
                    <div>
                      <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button export-user"
                        style={{ background: '#eee' }}
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText={<>تصدير أسماء المستخدمين</>}
                      />
                      <table id="table-to-xls" style={{ display: 'none' }}>
                        <tr>
                          <th>الايميل</th>
                        </tr>
                        {userData &&
                          userData?.users.map((elm, index) => {
                            return (
                              <tr key={index}>
                                <td>{elm.user?.email}</td>
                              </tr>
                            );
                          })}
                      </table>
                    </div>
                  )
                ]}
              />
            )}
          </>
        </Col>
        <Col span={14}>
          <Form
            name="basic"
            onSubmit={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className="appointments-form statistic-search-form"
          >
            <h3>البحث عن مستخدمين حسب؟</h3>

            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">الجنس</label>
                <Form.Item>
                  {getFieldDecorator('gender')(
                    <Select
                      className="input-field"
                      placeholder={this.state.gender}
                      onChange={this.handleChange}
                    >
                      <Select.Option name="gender" value="ذكر" key="ذكر">
                        ذكر{' '}
                      </Select.Option>
                      <Select.Option name="gender" value="أنثى" key="أنثى">
                        أنثى{' '}
                      </Select.Option>
                      <Select.Option name="gender" value="انثى" key="انثى">
                        انثى{' '}
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">الاسم</label>
                <Form.Item>
                  {getFieldDecorator('fullName')(<Input placeholder="" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">الإهتمامات الوظيفية</label>
                <Form.Item>
                  {getFieldDecorator('jobCategory')(
                    <Select showArrow={true} mode="multiple">
                      {jobCategories &&
                        jobCategories.map(elm => {
                          return (
                            <Select.Option value={elm._id} key={elm._id}>
                              {elm.jobName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">رقم الجوال</label>
                <Form.Item>
                  {getFieldDecorator('mobile')(<Input type="number" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">الجامعة</label>
                <Form.Item>
                  {getFieldDecorator('universty')(
                    <Select>
                      {universities &&
                        universities.map(elm => {
                          return (
                            <Select.Option
                              value={elm._id}
                              key={elm._id}
                              name="universty"
                            >
                              {elm.universtyName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">الشهادة</label>
                <Form.Item name="study_degree">
                  {getFieldDecorator('study_degree')(
                    <Select>
                      {certificate &&
                        certificate.map(elm => (
                          <Select.Option
                            value={elm.value}
                            key={elm.value}
                          >
                            {elm.viewValue}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">المدينة</label>
                <Form.Item>
                  {getFieldDecorator('city')(
                    <Select>
                      {cities &&
                        cities?.map(elm => (
                          <Select.Option value={elm.id} key={elm.id}>
                            {elm.value}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">الدولة</label>
                <Form.Item>
                  {getFieldDecorator('country')(
                    <Select>
                      <Select.Option value="المملكة العربية السعودية">
                        المملكة العربية السعودية
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">التخصص الدقيق</label>
                <Form.Item>
                  {getFieldDecorator('spMajor')(
                    <Select>
                      {subMajor &&
                        subMajor?.map(elm => {
                          return (
                            <Select.Option value={elm._id} key={elm._id}>
                              {elm.majorName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">التخصص العام</label>
                <Form.Item>
                  {getFieldDecorator('public_Major')(
                    <Select onChange={this.handleSubMajor}>
                      {majors &&
                        majors.map(elm => {
                          return (
                            <Select.Option value={elm._id} key={elm._id}>
                              {elm.majorName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <label className="form-label">مهارات شخصية</label>
                <Form.Item>
                  {getFieldDecorator('p_skill')(
                    <Select
                      showArrow={true}
                      mode="multiple"
                      style={{
                        maxHeight: '70px',
                        height: 'auto',
                        overflowY: 'scroll'
                      }}
                    >
                      {personalSkills &&
                        personalSkills.map(elm => {
                          return (
                            <Select.Option value={elm._id} key={elm._id}>
                              {elm.skillName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <label className="form-label">مهارات عامة</label>
                <Form.Item>
                  {getFieldDecorator('skill')(
                    <Select
                      showArrow={true}
                      mode="multiple"
                      style={{
                        maxHeight: '70px',
                        height: 'auto',
                        overflowY: 'scroll'
                      }}
                    >
                      {skills &&
                        skills.map(elm => {
                          return (
                            <Select.Option value={elm._id} key={elm._id}>
                              {elm.skillName}
                            </Select.Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}></Col>
              <Col span={12}>
                <label className="form-label">الهوايات</label>
                <Form.Item>
                  {getFieldDecorator('hoppies')(
                    <Select
                      showArrow={true}
                      mode="multiple"
                      style={{
                        maxHeight: '70px',
                        height: 'auto',
                        overflowY: 'scroll'
                      }}
                    >
                      {hoppies &&
                        hoppies.map(elm => (
                          <Select.Option value={elm} key={elm}>
                            {elm}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                إرسال
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const AgeStatistics = Form.create({ name: 'basic' })(UserStatistics);

export default AgeStatistics;
