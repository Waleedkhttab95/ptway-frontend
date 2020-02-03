import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { jobOffers } from '../../../store/actions/user/jobOffers';
import _ from 'lodash';
import FilterAndSearch from '../../Filter';

class Jobs extends React.Component {
  async componentDidMount() {
    const { jobOffers } = this.props;
    await jobOffers();
  }
  render() {
    console.log('jobs props', this.props.offers.jobOffers);
    const { offers } = this.props;
    return (
      <div>
        <Header />
        <div className="user-container">
          <div className="user-jobs">
            <FilterAndSearch />
            <Row className="jobs-details">
              {_.isArray(offers.jobOffers.result)
                ? offers.jobOffers.result.map(elm => {
                    return (
                      <Col md={6} className="job-post" key={elm[0]._id}>
                        <div className="post-header">
                          {/* <img src="" alt="" className="post-img" /> */}
                          <i
                            className="fa fa-picture-o"
                            aria-hidden="true"
                            style={{
                              fontSize: '45px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          ></i>
                          <div className="job-owner-info">
                            <span className="job-owner-title">
                              {elm[0].job_Name}
                            </span>
                            <span className="job-owner-location">
                              في مقر الشركة
                            </span>
                            {/* <span className="job-owner-mobile">
                              الرقم : 0002163477555
                            </span> */}
                          </div>
                        </div>
                        <div className="post-body">
                          <span className="post-description">
                            {elm[0].descreption}
                          </span>
                          <div className="post-actions-btns">
                            <div className="post-status">لم يتم التقدم</div>
                            <button className="apply-job-btn">
                              التقدم للعمل
                            </button>
                            <button
                              className="details-btn"
                              onClick={() =>
                                this.props.history.push('/user/job')
                              }
                            >
                              التفاصيل
                            </button>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : ''}
            </Row>
            <button className="display-more">عرض المزيد</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ jobOffers }) => {
  return {
    offers: jobOffers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    jobOffers: () => dispatch(jobOffers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
