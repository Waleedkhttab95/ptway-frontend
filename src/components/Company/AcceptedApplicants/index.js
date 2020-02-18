import React from 'react';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';
import projects from '../../../services/company/projects';
import _ from 'lodash';
const { getAcceptedCandidates } = projects;

class AcceptedApplicants extends React.Component {
  state = {
    AcceptedCandidates: ''
  };
  async componentDidMount() {
    const jobId = this.props.match.params.id;
    const AcceptedCandidates = await getAcceptedCandidates({ jobId });
    this.setState({
      AcceptedCandidates
    });
  }
  render() {
    const { AcceptedCandidates } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Filter />
          <div className="applicant-header">
            <h3>اسم المتقدم</h3>
            <h3>السيرة الذاتية</h3>
            <h3>قبول</h3>
          </div>
          {_.isArray(AcceptedCandidates)
            ? AcceptedCandidates.map(elm => (
                <div className="applicant" key={elm.candidateName._id}>
                  <h4>
                    {elm.candidateName.firstName +
                      ' ' +
                      elm.candidateName.lastName}
                  </h4>
                  <button
                    className="display-cv"
                    onClick={() =>
                      this.props.history.push(
                        `/applicant/profile/${elm.candidateName._id}`
                      )
                    }
                  >
                    عرض
                  </button>
                  <button className="display-cv">موافق</button>
                  <button
                    className="display-cv-mob"
                    onClick={() =>
                      this.props.history.push(
                        `/applicant/profile/${elm.candidateName._id}`
                      )
                    }
                  >
                    عرض السيرة الذاتية
                  </button>
                </div>
              ))
            : ''}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default AcceptedApplicants;
