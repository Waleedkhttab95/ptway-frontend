import React from 'react';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Input, Collapse, Select } from 'antd';
import Avatar from '../../User/UpdateProfile/UploadFile';
import statatisticsService from '../../../services/statisticsService';
import { companyInfo } from '../../../store/actions/company/home';
import { connect } from 'react-redux';
import profile from '../../../services/company/profile';
import _ from 'lodash';
const { allCountries, allCities } = statatisticsService;
const { updateCompanyProfile } = profile;
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;

class UpdateCompanyProfile extends React.Component {
  state = { countries: '', cities: '' };

  async componentDidMount() {
    const { getCompanyInfo } = this.props;
    getCompanyInfo();
    const countries = await allCountries();
    const cities = await allCities();
    this.setState({
      countries,
      cities
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { company } = this.props;
      const { info } = company.companyInfo;
      this.setState({
        city: info ? info.city._id : '',
        country: info ? info.country._id : '',
        about: info ? info.info : '',
        vision: info ? info.vision : '',
        message: info ? info.message : '',
        address: info ? info.address : '',
        personal_web:
          info && info.personal_web !== 'undefined' ? info.personal_web : '',
        facebook: info && info.facebook !== 'undefined' ? info.facebook : '',
        linkedin: info && info.linkedin !== 'undefined' ? info.linkedin : '',
        twitter: info && info.twitter !== 'undefined' ? info.twitter : '',
        image: info ? info.imagePath : ''
      });
    }
  }
  handleChange = (value, option) => {
    this.setState({
      ...this.state,
      [option.props.name]: option.key
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  updateProfile = async () => {
    await updateCompanyProfile(this.state);
    const { history } = this.props;
    history.push('/company/setting');
  };
  render() {
    const { countries, cities } = this.state;
    const { company } = this.props;
    const { info } = company.companyInfo;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="updating-container">
            <div className="profile-updating">
              <Avatar
                img={this.state.image}
                getImage={image => this.setState({ image })}
              />
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
                          placeholder={info ? info.country.countryName : ''}
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
                          className="input-field input-filed-mob"
                          onChange={this.handleChange}
                          placeholder={info ? info.city.cityName : ''}
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
                    <h5
                      className="title-field"
                      placeholder={info ? info.address : ''}
                    >
                      العنوان{' '}
                    </h5>
                    <TextArea
                      rows={4}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="address"
                      placeholder={info ? info.address : ''}
                    />
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
                      name="about"
                      placeholder={info ? info.info : ''}
                    />
                    <br />
                    <br />

                    <h3 className="title-field">رؤية الشركة</h3>
                    <TextArea
                      row={6}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="vision"
                      placeholder={info ? info.vision : ''}
                    />
                    <br />
                    <br />

                    <h3 className="title-field">رسالة الشركة</h3>
                    <TextArea
                      row={6}
                      className="textarea-field"
                      onChange={this.handleInputChange}
                      name="message"
                      placeholder={info ? info.message : ''}
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
                        placeholder={
                          info && info.personal_web !== 'undefined'
                            ? info.personal_web
                            : ''
                        }
                      />
                      <h5 className="title-field">رابط linkedin</h5>
                      <Input
                        className="input-field"
                        onChange={this.handleInputChange}
                        name="linkedin"
                        placeholder={
                          info && info.linkedin !== 'undefined'
                            ? info.linkedin
                            : ''
                        }
                      />
                    </div>
                    <div>
                      <h5 className="title-field">رابط الفيسبوك</h5>
                      <Input
                        className="input-field"
                        style={{ marginLeft: '20px' }}
                        onChange={this.handleInputChange}
                        name="facebook"
                        placeholder={
                          info && info.facebook !== 'undefined'
                            ? info.facebook
                            : ''
                        }
                      />
                      <h5 className="title-field">رابط تويتر</h5>
                      <Input
                        className="input-field"
                        onChange={this.handleInputChange}
                        name="twitter"
                        placeholder={
                          info && info.twitter !== 'undefined'
                            ? info.twitter
                            : ''
                        }
                      />
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <button className="save-changes-btn" onClick={this.updateProfile}>
                حفظ
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ companySection }) => {
  return {
    company: companySection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanyInfo: () => dispatch(companyInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCompanyProfile);
