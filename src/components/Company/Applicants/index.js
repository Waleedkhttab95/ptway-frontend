import React from 'react';
import './style.scss';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';
import projects from '../../../services/company/projects';
import _ from 'lodash';
const { getCandidates, acceptUser } = projects;

class Applicants extends React.Component {
  state = {
    candidates: ''
  };
  async componentDidMount() {
    const jobId = this.props.match.params.id;
    const candidates = await getCandidates({ jobId });
    this.setState({
      jobId,
      candidates
    });
  }

  acceptUser = async userId => {
    const { jobId, candidates } = this.state;
    await acceptUser({
      jobId,
      userId
    });
    this.setState({
      candidates: candidates.Bresult.filter(e => e.candidateName._id !== userId)
    });
  };

  render() {
    const { candidates } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <Filter />
          <div className="applicant-header">
            <h3>اسم المتقدم</h3>
            <h3>السيرة الذاتية</h3>
            {/* <h3>اسم المشروع</h3>
            <h3>اسم العرض</h3>
            <h3>الحالة</h3> */}
            <h3>قبول</h3>
          </div>
          {_.isArray(candidates.Bresult)
            ? candidates.Bresult.map(elm => (
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
                  <button
                    className="accept-user"
                    onClick={() => this.acceptUser(elm.candidateName._id)}
                  >
                    موافق
                  </button>

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
export default Applicants;
