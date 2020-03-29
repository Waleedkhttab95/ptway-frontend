import React from 'react';
import './style.scss';
import { Dropdown } from 'antd';
import projects from '../../../services/company/projects';
import _ from 'lodash';
import moment from 'moment';
import SideMenu from './sideMenu';
import history from '../../../_core/history';
const { getJobOffers, deleteJob, lockJob } = projects;

class Project extends React.Component {
  state = {
    jobOffers: '',
    deleteModal: false,
    confirmMsg: false,
    lockModal: false,
    lockConfirmMsg: false
  };

  async componentDidMount() {
    const projectId = this.props._id;
    const jobOffers = await getJobOffers({ id: projectId });
    this.setState({
      jobOffers
    });
  }

  deleteJob = () => {
    this.setState({
      deleteModal: true
    });
  };

  deleteConfirmation = async id => {
    await deleteJob({ id });
    this.setState({
      deleteModal: false,
      // allProjects: allProjects.proj.filter(project => project._id !== id),
      confirmMsg: true
    });
  };

  cancel = () => {
    this.setState({
      deleteModal: false,
      lockModal: false
    });
  };

  lockJobModal = () => {
    this.setState({
      lockModal: true
    });
  };

  lockJob = async id => {
    await lockJob({ id });
    this.setState({
      lockModal: false,
      lockConfirmMsg: true
    });
  };

  render() {
    const { jobOffers } = this.state;
    return (
      <div className="company-project">
        <div className="project-header">
          <h3>اسم الإعلان الوظيفي</h3>
          <h3>التاريخ</h3>
          <h3>المتقدمين</h3>
          <h3>المقبولين</h3>
          <h3></h3>
        </div>
        {_.isArray(jobOffers.job)
          ? jobOffers.job.map(elm => {
              return (
                <div className="project" key={elm._id}>
                  <h4>{elm.job_Name}</h4>
                  <h4 className="date-mob">
                    <span className="project-date-mob">التاريخ : </span>
                    {moment(elm.createDate).format('ll')}
                  </h4>
                  <button
                    className="applicants-btn"
                    onClick={() =>
                      history.push(`/applicants/job/id=${elm._id}`)
                    }
                  >
                    عرض
                  </button>
                  <button
                    className="accepted-btn"
                    onClick={() =>
                      history.push(`/accepted/applicants/job/id=${elm._id}`)
                    }
                  >
                    عرض
                  </button>
                  <div className="btns-mob">
                    <button
                      className="applicants-btn-mob"
                      onClick={() =>
                        history.push(`/applicants/job/id=${elm._id}`)
                      }
                    >
                      عرض المتقدمين
                    </button>
                    <button
                      className="accepted-btn-mob"
                      onClick={() =>
                        history.push(`/accepted/applicants/job/id=${elm._id}`)
                      }
                    >
                      عرض المقبولين
                    </button>
                  </div>
                  <Dropdown
                    overlay={
                      <SideMenu
                        {...this.state}
                        {...elm}
                        deleteJob={this.deleteJob}
                        deleteConfirmation={() =>
                          this.deleteConfirmation(elm._id)
                        }
                        CloseConfirmationMsg={e => {
                          e.stopPropagation();
                          this.setState({
                            confirmMsg: false,
                            lockConfirmMsg: false
                          });
                          window.location.reload();
                        }}
                        cancel={this.cancel}
                        lockJobModal={this.lockJobModal}
                        lockConfirmation={() => this.lockJob(elm._id)}
                      />
                    }
                    placement="topCenter"
                    trigger="hover"
                  >
                    <span className="options-menu">...</span>
                  </Dropdown>
                </div>
              );
            })
          : ''}
      </div>
    );
  }
}
export default Project;
