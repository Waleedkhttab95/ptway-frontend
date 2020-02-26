import React from 'react';
import './style.scss';
import { Row, Col, Modal, Radio } from 'antd';
import Header from '../../Header';
import Footer from '../../Footer';
import {
  jobOffer,
  companyDetails,
  applyJob
} from '../../../store/actions/user/jobOffers';
import { connect } from 'react-redux';
import moment from 'moment';

class Job extends React.Component {
  state = {
    jobStatus: false,
    jobInfo: false
  };

  async componentDidMount() {
    const { jobOffer, company } = this.props;
    const { id } = this.props.match.params;
    const job = await jobOffer({ id });
    await company({ id: job.value.job.company });
  }

  applyJobSuccessMsg = () => {
    this.setState({
      jobInfo: false,
      jobStatus: true
    });
  };

  jobInfo = () => {
    this.setState({
      jobInfo: true
    });
  };

  applyJob = async jobId => {
    const { applyJob } = this.props;
    const result = await applyJob({ jobId });
    if (result) {
      this.setState({
        jobStatus: true
      });
    }
  };

  render() {
    const { offer } = this.props;
    console.log('offers', offer);
    const { Country, City, Contract, apply, job } = offer.jobOffer;
    const { compnayName, imagePath, address, info } = offer.company;
    return (
      <div className="user-container">
        <Header />
        <Row className="job-section">
          <Col md={6} className="right-section">
            {imagePath ? (
              <img src={imagePath} alt="user" className="picture" />
            ) : (
              <i
                className="fa fa-user-circle-o"
                aria-hidden="true"
                style={{
                  fontSize: '45px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              ></i>
            )}
            <span className="job-owner-name">{compnayName}</span>
            <div className="job-owner-info">
              <p>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                {info}
              </p>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {Country}, {City}, {address}
              </p>
            </div>
          </Col>
          <Col md={20} className="left-section">
            <h5 className="job-title">{job ? job.job_Name : ''}</h5>
            <div>
              <div className="job-heading">
                <i className="fa fa-suitcase" aria-hidden="true"></i>
                التفاصيل الأساسية للوظيفة
              </div>
              <div className="main-info-details">
                <div className="job-sub-heading">المسمى الوظيفي</div>
                <span className="main-info-desc">
                  {job ? job.job_Name : ''}
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
                  <div className="job-sub-heading">عدد أيام العمل</div>
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
            {apply ? (
              <button className="not-intersted-btn">
                لقد تقدمت للوظيفة سابقاً
              </button>
            ) : (
              <button
                className="applay-job-btn"
                // onClick={this.jobInfo}
                onClick={() => this.applyJob(job._id)}
              >
                تقدم للوظيفة
              </button>
            )}

            <Modal visible={this.state.jobInfo} closable={false} footer={false}>
              <div className="job-info-modal">
                <i
                  className="fa fa-question-circle ques-mark-icon"
                  aria-hidden="true"
                ></i>
                <h2>
                  هل تقدمت لوظيفة ماضية في بيتزا هت للبيتزا سابقاً أو اي شركة
                  أخرى في موقعنا؟{' '}
                </h2>
                <Radio.Group
                  options={['نعم، تقدمت وتم رفضي', 'نعم، تقدمت وتم قبولي']}
                  className="radio-option"
                />
                <Radio.Group
                  options={['لا، لم اتقدم لبيتزا هت', 'لا، لم اتقدم لأي شركة']}
                  className="radio-option"
                />
                <button className="send-info-btn" onClick={this.applyJob}>
                  أرسل
                </button>
              </div>
            </Modal>
            <Modal
              visible={this.state.jobStatus}
              closable={false}
              footer={false}
            >
              <div className="success-modal">
                <i
                  className="fa fa-check-circle check-icon"
                  aria-hidden="true"
                ></i>
                <h2>تم التقدم للوظيفة بنجاح</h2>
                <p>
                  سيصلك تنبيه بالقبول أو الرفض بمجرد مشاهدة سيرتك الذاتية من
                  الشركة
                </p>
                <button onClick={() => this.props.history.push('/user/jobs')}>
                  العودة للرئيسية
                </button>
              </div>
            </Modal>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ jobOffers }) => {
  return {
    offer: jobOffers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    jobOffer: params => dispatch(jobOffer(params)),
    company: params => dispatch(companyDetails(params)),
    applyJob: params => dispatch(applyJob(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
