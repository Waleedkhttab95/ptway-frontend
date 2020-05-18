import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import {
  companyInfo,
  companyStatistic,
  companyAds
} from '../../store/actions/company/home';
import { Redirect } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';

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
    console.log('status', company);

    return (
      <div>
        {company.companyInfo.info && !company.companyInfo.status ? (
          <Redirect to={{ pathname: '/company/profile' }} />
        ) : (
          <CompanyDetails {...this.props} />
        )}
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
