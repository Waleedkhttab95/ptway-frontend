import companyHomeServices from '../../../services/company/home';

export const companyInfo = () => {
  return {
    type: 'COMPANY_INFO',
    payload: companyHomeServices.getCompanyInfo()
  };
};

export const companyStatistic = () => {
  return {
    type: 'COMPANY_STATISTIC',
    payload: companyHomeServices.getCompanyStatistic()
  };
};
export const companyAds = () => {
  return {
    type: 'COMPANY_ADS',
    payload: companyHomeServices.getCompanyAds()
  };
};
