const initialState = {
  companyInfo: '',
  companyStatistic: '',
  jobOffers: ''
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
    default:
      return state;
  }
};

export default companyHome;
