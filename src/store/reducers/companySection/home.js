const initialState = {
  companyInfo: '',
  companyStatistic: '',
  companyAds: ''
};

const companyHome = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANY_INFO_SUCCESS':
      return {
        ...state,
        companyInfo: action.payload
      };
    case 'COMPANY_STATISTIC_SUCCESS':
      return {
        ...state,
        companyStatistic: action.payload
      };
    case 'COMPANY_ADS_SUCCESS':
      return {
        ...state,
        companyAds: action.payload
      };
    default:
      return state;
  }
};

export default companyHome;
