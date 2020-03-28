import React from 'react';
// import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse, Select } from 'antd';
import statatisticsService from '../../../services/statisticsService';
import _ from 'lodash';
import company from '../../../services/company/profile';

const { addCompanyInfo } = company;
const { allCities, allCountries } = statatisticsService;
const { Option } = Select;
const { TextArea } = Input;
const { Panel } = Collapse;

class CompanyProfile extends React.Component {
  state = {
    countries: '',
    cities: '',
    error: false
  };

  async componentDidMount() {
    const countries = await allCountries();
    const cities = await allCities();
    this.setState({
      countries,
      cities
    });
  }
  handleChange = (value, option) => {
    this.setState({
      [option.props.name]: option.key
    });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  addCompanyInfo = async () => {
    const { mobile, address, city, info, country } = this.state;
    if (!mobile || !address || !city || !info || !country) {
      this.setState({ error: true });
    } else {
      await addCompanyInfo(this.state);
      this.props.history.push('/company/home');
    }
  };
  render() {
    const { countries, cities, error } = this.state;
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div className="company-container">
          <div className="updating-container">
            <div className="profile-updating">
              <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
                <Panel
                  header="الدولة والعنوان"
                  key="1"
                  className="section-heading"
                >
                  <div className="collapse-line"></div>
                  <div className="location-info">
                    <div className="first-section">
                      <div style={{ marginLeft: '20px' }}>
                        <h5 className="title-field">الدولة</h5>
                        <Select
                          className="input-field input-filed-mob"
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
                        <br />
                        {error && !this.state.country && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            الرجاء ادخال الدولة
                          </span>
                        )}
                      </div>
                      <div>
                        <h5 className="title-field">المدينة</h5>
                        <Select
                          className="input-field input-filed-mob"
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
                        <br />
                        {error && !this.state.city && (
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            الرجاء ادخال المدينة
                          </span>
                        )}
                      </div>
                    </div>
                    <h5 className="title-field">رقم الهاتف </h5>
                    <Input
                      className="input-field"
                      onChange={this.handleInputChange}
                      name="mobile"
                    />
                    <br />
                    {error && !this.state.Mobile && (
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        الرجاء ادخال رقم الهاتف
                      </span>
                    )}
                    <h5 className="title-field">العنوان </h5>
                    <TextArea
                      rows={4}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="address"
                    />
                    <br />
                    {error && !this.state.address && (
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        الرجاء ادخال العنوان
                      </span>
                    )}
                  </div>
                </Panel>
                <Panel
                  header="معلومات عامة"
                  key="2"
                  className="section-heading"
                >
                  <div className="collapse-line"></div>
                  <div className="location-info">
                    <h5 className="title-field">نبذة عامة</h5>
                    <TextArea
                      rows={4}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="info"
                    />
                    <br />
                    {error && !this.state.info && (
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        الرجاء ادخال نبذة عامة
                      </span>
                    )}

                    <br />
                    <br />

                    <h3 className="title-field">رؤية الشركة</h3>
                    <TextArea
                      row={6}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="vision"
                    />
                    <br />
                    <br />

                    <h3 className="title-field">رسالة الشركة</h3>
                    <TextArea
                      row={6}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="message"
                    />
                  </div>
                </Panel>
                <Panel
                  header="التواصل الاجتماعي"
                  key="3"
                  className="section-heading"
                >
                  <div className="collapse-line"></div>
                  <div className="general-skills">
                    <div>
                      <h5 className="title-field">الموقع الشخصي</h5>
                      <Input
                        className="input-field"
                        style={{ marginLeft: '20px' }}
                        onChange={this.handleInputChange}
                        name="personal_web"
                      />
                      <h5 className="title-field">رابط linkedin</h5>
                      <Input
                        className="input-field"
                        onChange={this.handleInputChange}
                        name="linkedin"
                      />
                    </div>
                    <div>
                      <h5 className="title-field">رابط الفيسبوك</h5>
                      <Input
                        className="input-field"
                        style={{ marginLeft: '20px' }}
                        onChange={this.handleInputChange}
                        name="facebook"
                      />
                      <h5 className="title-field">رابط تويتر</h5>
                      <Input
                        className="input-field"
                        onChange={this.handleInputChange}
                        name="twitter"
                      />
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <button
                className="save-changes-btn"
                onClick={this.addCompanyInfo}
              >
                حفظ
              </button>
            </div>
          </div>
          ;
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CompanyProfile;
