import React from 'react';
import './style.scss';
import projects from '../../../services/company/projects';
import _ from 'lodash';
import moment from 'moment';

const { getJobOffers } = projects;

class Project extends React.Component {
  state = {
    jobOffers: ''
  };
  async componentDidMount() {
    const projectId = this.props._id;
    const jobOffers = await getJobOffers({ id: projectId });
    this.setState({
      jobOffers
    });
  }
  render() {
    console.log('jobOffers', this.props);
    const { jobOffers } = this.state;
    return (
      <div className="company-project">
        <div className="project-header">
          <h3>اسم الإعلان الوظيفي</h3>
          <h3>التاريخ</h3>
          <h3>المتقدمين</h3>
          <h3>المقبولين</h3>
        </div>
        {_.isArray(jobOffers.job)
          ? jobOffers.job.map(elm => {
              return (
                <div className="project" key={elm._id}>
                  <h4>{elm.job_Name}</h4>
                  <h4 className="date-mob">
                    <span className="project-date-mob">التاريخ : </span>
                    {moment(elm.startDate).format('MMM-d-YY')}
                  </h4>
                  <button className="applicants-btn">عرض</button>
                  <button className="accepted-btn">عرض</button>
                  <div className="btns-mob">
                    <button className="applicants-btn-mob">
                      عرض المتقدمين
                    </button>
                    <button className="accepted-btn-mob">عرض المقبولين</button>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    );
  }
}
export default Project;
