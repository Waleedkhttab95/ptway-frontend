import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Layout, Alert, Col, Spin } from 'antd';
import './style.scss';
import CompanyInfo from './CompanyInfo';
import { connect } from 'react-redux';
import {
  companyInfo,
  companyStatistic,
  companyAds
} from '../../store/actions/company/home';
import _ from 'lodash';
import moment from 'moment';
const { Content } = Layout;

class CompanyHome extends React.Component {
  state = {
    moreAds: ''
  };
  componentDidMount() {
    const { getCompanyInfo, getCompanyStatistic, getCompanyAds } = this.props;
    getCompanyInfo();
    getCompanyStatistic();
    getCompanyAds();
  }

  render() {
    const { company } = this.props;
    // console.log('moreAds', this.state.moreAds);
    console.log('fucccck', company);

    return (
      <div>
        <Header />
        <div className="user-container">
          <Content className="user-home">
            <div className="user-notification">
              <Alert
                message="يوجد متقدم جديد  ياسر القحطاني على مشروع موقع للإنطلاق الجديد"
                type="warning"
                className="warning-alert"
              />
              <Alert
                message="يوجد متقدم جديد  سامر الأحمد على مشروع الشركة الرئيسية"
                type="info"
                className="info-alert"
              />
            </div>
            <Row className="company-progress">
              <Col md={7} className="opened-projects">
                <div>المشاريع المنشئة</div>
                <div className="user-stc-number">
                  {company.companyStatistic
                    ? company.companyStatistic.projects
                    : ''}
                </div>
              </Col>
              <Col md={7} className="total-offers">
                <div>عروض العمل الإجمالية</div>
                <div className="user-stc-number">
                  {company.companyStatistic
                    ? company.companyStatistic.jobs
                    : ''}
                </div>
              </Col>
              <Col md={7} className="user-hired">
                <div>الذين تم توظيفهم</div>
                <div className="user-stc-number">
                  {company.companyStatistic
                    ? company.companyStatistic.acceptes
                    : ''}
                </div>
              </Col>
              {/* <div className="user-rejected">
              <div>الذين تم رفضهم</div>
              <div className="user-stc-number">7,213</div>
            </div>
          */}
            </Row>
            <div className="user-profile">
              <Col md={6} className="right-section">
                <CompanyInfo {...company} />
              </Col>
              <Col md={18} className="company-left-section">
                <h2>آخر العروض الوظيفية التي أنشئتها</h2>
                <div className="projects-offers-header">
                  <div>اسم العرض الوظيفي</div>
                  <div>التاريخ</div>
                  <div>اسم المشروع</div>
                  <div>عدد المتقدمين</div>
                </div>
                {_.isArray(company.companyAds) ? (
                  company.companyAds.map(elm => {
                    return (
                      <div className="project-offer" key={elm.advId}>
                        <div className="project-offer-title">{elm.advName}</div>
                        <div>{moment(Date.now()).format('ll')}</div>
                        <div className="project-status">{elm.projectName}</div>
                        <div className="applicants-num">{elm.candidates}</div>
                      </div>
                    );
                  })
                ) : _.isObject(company) ? (
                  ''
                ) : (
                  <div className="spinner-loading">
                    <Spin size="large" />
                  </div>
                )}
              </Col>
            </div>
          </Content>
        </div>
        <Footer />
      </div>
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
    getCompanyInfo: () => dispatch(companyInfo()),
    getCompanyStatistic: () => dispatch(companyStatistic()),
    getCompanyAds: () => dispatch(companyAds())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyHome);