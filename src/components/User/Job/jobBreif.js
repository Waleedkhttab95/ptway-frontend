import React from 'react';
import './style.scss';
import { Modal, Radio, Spin } from 'antd';
import { Link } from 'react-router-dom';

import {
  jobOffer,
  companyDetails,
  applyJob,
  closeERRORModal
} from '../../../store/actions/user/jobOffers';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from '../../Header';

class Job extends React.Component {
  state = {
    jobStatus: false,
    jobInfo: false,
    sending: false
  };

  async componentDidMount() {
    const { jobOffer, jobId } = this.props;
    const id = this.props.match ? this.props.match.params.id : '';
    await jobOffer({ id: jobId || id });
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
    this.setState({
      sending: true
    });
    const { applyJob } = this.props;
    const result = await applyJob({ jobId });
    if (result) {
      this.setState({
        jobStatus: true,
        sending: false
      });
    }
  };

  render() {
    const { offer, closeModal } = this.props;
    const {
      Country,
      City,
      Contract,
      apply,
      job,
      contractType
    } = offer.jobOffer;
    const { imagePath, address } = offer.company;

    const { sending } = this.state;
    const isLock = job ? job.isLock : false;
    console.log('imagePath', imagePath);
    return (
      <div className="user-container job-container">
        <div className="header-view">
          <Header />
        </div>
        <Modal
          visible={offer.error.showErrorMsg}
          onCancel={this.handleCancel}
          footer={false}
        >
          <div className="success-modal">
            <h2> نأسف لهذا، لقد تم حذف الاعلان من قبل الشركة المعلنة</h2>
            <br />
            <button
              onClick={async () => {
                await this.props.history.push('/user/jobs');
                closeModal();
              }}
            >
              تصفح الإعلانات
            </button>
          </div>
        </Modal>

        <div className="job-wrapper">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px'
            }}
          >
            {imagePath && imagePath !== 'null' ? (
              <img
                src={imagePath}
                className="picture"
                style={{
                  width: '100px',
                  height: '100px'
                }}
              />
            ) : (
              <img
                className="job-img"
                style={{
                  width: '100px',
                  height: '100px'
                }}
                src={require('../../../images/pure-avatar.png')}
              />
            )}
            <h5 className="job-title">{job ? job.job_Name : ''}</h5>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {Country}, {City}, {address}
            </p>
          </div>
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
                  {contractType == '160' ? 'عدد أشهر العمل' : 'عدد أيام العمل'}
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
          {apply ? (
            <button className="not-intersted-btn">
              لقد تقدمت للوظيفة سابقاً
            </button>
          ) : isLock ? (
            <button className="not-intersted-btn">لقد اكتمل العدد</button>
          ) : (
            <button
              className={
                sending
                  ? 'applay-job-btn-loading applay-job-btn '
                  : 'applay-job-btn'
              }
              // onClick={this.jobInfo}
              onClick={() => this.applyJob(job._id)}
            >
              {sending ? <Spin size="small" /> : 'تقدم للوظيفة'}
            </button>
          )}

          <Modal visible={this.state.jobInfo} closable={false} footer={false}>
            <div className="job-info-modal">
              <i
                className="fa fa-question-circle ques-mark-icon"
                aria-hidden="true"
              ></i>
              <h2>
                هل تقدمت لوظيفة ماضية في بيتزا هت للبيتزا سابقاً أو اي شركة أخرى
                في موقعنا؟{' '}
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
          <Modal visible={this.state.jobStatus} closable={false} footer={false}>
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
              <button onClick={() => window.location.reload()}>حسناً</button>
            </div>
          </Modal>
        </div>
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
    applyJob: params => dispatch(applyJob(params)),
    closeModal: () => dispatch(closeERRORModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
