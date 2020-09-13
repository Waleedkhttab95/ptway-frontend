import React from 'react';
import './style.scss';
import { Row, Col, Spin } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import projects from '../../../services/company/projects';
import moment from 'moment';

const { getJobOffer } = projects;

class Job extends React.Component {
  state = {
    offer: '',
    company: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const offer = await getJobOffer({ id });
    this.setState({
      offer,
      company: offer.job.company
    });
  }

  render() {
    const { offer, company } = this.state;
    const { Country, City, Contract, contractType, job } = offer;
    const { companyName, imagePath, address, info } = company;
    return (
      <div className="user-container">
        <Header />
        <Row className="job-section">
          <Col md={6} xs={24} sm={24}>
            <div className="right-section">
              {company ? (
                <React.Fragment>
                  {imagePath ? (
                    <img src={imagePath} alt="user" className="picture" />
                  ) : (
                    <img
                      className="job-img"
                      style={{
                        width: '150px',
                        height: '150px'
                      }}
                      src={require('../../../images/pure-avatar.png')}
                    />
                  )}
                  <span className="job-owner-name">{companyName}</span>
                  <div className="job-owner-info">
                    <p>
                      <i
                        className="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                      {info}
                    </p>

                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      {Country}, {City}, {address}
                    </p>
                  </div>
                </React.Fragment>
              ) : (
                <div className="spinner-loading">
                  <Spin size="large" />
                </div>
              )}
            </div>
          </Col>
          <Col md={16} xs={24} sm={24} className="left-section">
            <h5 className="job-title">{job ? job.job_Name : ''}</h5>
            <div>
              <div className="job-heading">
                <i className="fa fa-suitcase" aria-hidden="true"></i>
                التفاصيل الأساسية للوظيفة
              </div>
              <div className="main-info-details">
                <div className="job-sub-heading">المسمى الوظيفي</div>
                <span className="main-info-desc">
                  {job ? (
                    job.job_Name
                  ) : (
                    <div className="spinner-loading">
                      <Spin size="large" />
                    </div>
                  )}
                </span>
                <div className="job-sub-heading">وصف الوظيفة</div>
                <span className="main-info-desc">
                  {job ? job.descreption : ''}
                </span>
              </div>
            </div>
            <div>
              <div className="job-heading">
                <i className="fa fa-suitcase" aria-hidden="true"></i>
                معلومات الوظيفة
              </div>
              <div className="main-info-details extra-details">
                <div>
                  <div className="job-sub-heading">الموقع</div>
                  <p className="main-info-desc">
                    {Country}, {City}, {address}
                  </p>
                  <div className="job-sub-heading">
                    {' '}
                    {contractType == '160'
                      ? 'عدد أشهر العمل'
                      : 'عدد أيام العمل'}
                  </div>
                  <p className="main-info-desc">{job ? job.work_days : ''}</p>
                  <div className="job-sub-heading">مبلغ الراتب</div>
                  <p className="main-info-desc">{job ? job.salary : ''}</p>
                  <div className="job-sub-heading">الجنس</div>
                  <p className="main-info-desc">{job ? job.gender : ''}</p>
                </div>
                <div>
                  <div className="job-sub-heading">نوع العقد</div>
                  <p className="main-info-desc">{Contract}</p>
                  <div className="job-sub-heading">ساعات العمل اليومية</div>
                  <p className="main-info-desc">{job ? job.work_hours : ''}</p>
                  <div className="job-sub-heading">تاريخ بدء العمل</div>

                  <p className="main-info-desc">
                    {job ? moment(job.startDate).format('ll') : ''}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default Job;
