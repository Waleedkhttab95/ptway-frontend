import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import {
  companyBCountry,
  companyBMajor,
  companyBCityMajor
} from '../../store/actions/companyActions';
import { Row, Col, Cascader, Card, Button } from 'antd';
import statatisticsService from '../../services/statisticsService';
import store from '../../store/createStore';

const {
  allCountries,
  getCompanySMajor,
  companiesInfo,
  allCities,
  getAllCompanyMajors
} = statatisticsService;
class CompaniesStatistics extends Component {
  state = {
    value: '',
    countries: [],
    cities: [],
    majors: [],
    specialMajor: [],
    companiesInfo: {}
  };
  async componentDidMount() {
    const allCountriesData = await allCountries();
    this.setState({ countries: allCountriesData });

    const allMajorsData = await getAllCompanyMajors();
    this.setState({ majors: allMajorsData });

    const companiesInfoData = await companiesInfo();
    this.setState({ companiesInfo: companiesInfoData });

    const getCompanySMajorData = await getCompanySMajor();
    this.setState({ specialMajor: getCompanySMajorData });
  }
  componentWillMount() {
    store.getState().companyStatistics.companyBMajor = '';
    store.getState().companyStatistics.companyBCityMajor = '';
    store.getState().companyStatistics.companyBCountry = '';
  }

  cityChange = (value, selectedOptions) => {
    this.setState(
      {
        city: selectedOptions[0]
      },
      () => {
        const { companyBCountry } = this.props;
        const { city, country } = this.state;
        if (city && country) {
          companyBCountry({
            city_id: city.id,
            country_id: country.id
          });
        }
      }
    );
  };
  cityAndMajorChange = (value, selectedOptions) => {
    this.setState({
      city: selectedOptions[0]
    });
  };

  majorCountry = () => {
    const { companyBCityMajor } = this.props;
    const { city, country, major, sub_major } = this.state;
    if (city && country && major && sub_major) {
      companyBCityMajor({
        city_id: city.id,
        country_id: country.id,
        major_id: major.key,
        smajor_id: sub_major.id
      });
    }
  };
  countryChange = (value, selectedOptions) => {
    this.setState(
      {
        country: selectedOptions[0]
      },
      async () => {
        const allCitiesData = await allCities();
        if (allCitiesData) this.setState({ cities: allCitiesData });
      }
    );
  };

  majorChange = (value, selectedOptions) => {
    this.setState({
      major: selectedOptions[0]
    });
  };

  sector = () => {
    const { companyBMajor } = this.props;
    const { major } = this.state;
    companyBMajor({
      sector: major.key
    });
  };

  specialMajorChange = (value, selectedOptions) => {
    this.setState({
      sub_major: selectedOptions[0]
    });
  };
  specialMajor = () => {
    const { companyBMajor } = this.props;
    companyBMajor({
      s_major: this.state.sub_major.id
    });
  };

  render() {
    const {
      companyBCountry,
      companyBMajor,
      companyBCityMajor
    } = this.props.companyStatistics;

    const { companiesInfo } = this.state;
    console.log('log state', store.getState());

    return (
      <React.Fragment>
        <Row className="user-percentages">
          <Col md={5}>
            <div className="container company-num">
              <Card
                className="card-body company-num"
                title="عدد الشركات"
                bordered={false}
              >
                <p className="card-text">
                  {companiesInfo ? companiesInfo.NumberOfCompanies : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container company-info-num">
              <Card
                className="card-body company-info-num"
                title=" شركات لها معلومات"
                bordered={false}
              >
                <p className="card-text">
                  {companiesInfo ? companiesInfo.NumberOfCompaniesWithInfo : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container jobs-num">
              <Card
                className="card-body jobs-num"
                title="عدد الوظائف"
                bordered={false}
              >
                <p className="card-text">
                  {companiesInfo ? companiesInfo.NumberOfJobs : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container projects-num">
              <Card
                className="card-body projects-num"
                title="عدد المشاريع"
                bordered={false}
              >
                <p className="card-text">
                  {companiesInfo ? companiesInfo.NumberOfProjects : ''}
                </p>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="user-statistics">
          <Col md={6} className="statistics">
            <div className="company-stc-header">عدد الشركات حسب المدينة</div>
            <Cascader
              className="dropdown-menu"
              options={this.state.countries}
              onChange={this.countryChange}
              placeholder="اختر الدولة"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.cities}
              onChange={this.cityChange}
              placeholder="اختر المدينة"
            />
            <span className="company-stc-result">
              {' '}
              {companyBCountry ? companyBCountry.result : ''}
            </span>
            {/* <Statistic
              title="عدد الشركات حسب المدينة"
              value={companyBCountry ? companyBCountry.result : ''}
            /> */}
          </Col>
          <Col md={6} className="statistics">
            <div className="company-stc-header">عدد الشركات حسب القطاع</div>
            <Cascader
              className="dropdown-menu"
              options={this.state.majors}
              onChange={this.majorChange}
              placeholder="القطاع"
            />
            <Button
              onClick={this.sector}
              className="sector-button company-stc-button"
            >
              {' '}
              اضغط
            </Button>
            <span className="company-stc-result">
              {companyBMajor ? companyBMajor.result.sector_result : ''}
            </span>
          </Col>
          <Col md={6} className="statistics">
            <div className="company-stc-header">عدد الشركات حسب نشاط العمل</div>
            <Cascader
              className="dropdown-menu"
              options={this.state.specialMajor}
              onChange={this.specialMajorChange}
              placeholder=" نشاط العمل"
            />
            <Button
              onClick={this.specialMajor}
              className="smajor-button company-stc-button"
            >
              {' '}
              اضغط
            </Button>
            <span className="company-stc-result">
              {companyBMajor ? companyBMajor.result.sp_result : ''}
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="statistics stc-wraper">
            {/* <div className="company-details"> */}
            <div className="company-stc-header">
              عدد الشركات حسب الدولة والتخصص
            </div>
            <Cascader
              className="dropdown-menu"
              options={this.state.majors}
              onChange={this.majorChange}
              placeholder=" القطاع"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.specialMajor}
              onChange={this.specialMajorChange}
              placeholder="نشاط العمل"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.countries}
              onChange={this.countryChange}
              placeholder="الدولة"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.cities}
              onChange={this.cityAndMajorChange}
              placeholder="المدينة"
            />
            <Button
              onClick={this.majorCountry}
              className="major-country-button company-stc-button"
            >
              {' '}
              اضغط
            </Button>
            <span className="company-stc-result">
              {companyBCityMajor !== null ? companyBCityMajor.result : ''}
            </span>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companyStatistics: state.companyStatistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    companyBCountry: params => dispatch(companyBCountry(params)),
    companyBMajor: params => dispatch(companyBMajor(params)),
    companyBCityMajor: params => dispatch(companyBCityMajor(params))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesStatistics);
