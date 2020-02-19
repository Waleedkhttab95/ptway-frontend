import React from 'react';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';
import applicants from '../../../services/company/applicants';
import _ from 'lodash';
const { getAcceptedCandidates } = applicants;

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
          {_.isArray(AcceptedCandidates.response)
            ? AcceptedCandidates.response.map(elm => (
                <div className="applicant" key={elm._id}>
                  <h4>{elm.acceptedName}</h4>
                  <button
                    className="display-cv"
                    onClick={() =>
                      this.props.history.push(`/applicant/profile/${elm._id}`)
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
        <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default AcceptedApplicants;
