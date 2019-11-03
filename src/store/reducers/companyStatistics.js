const initialState = {
  companyBCountry: '',
  companyBMajor: '',
  companyBCityMajor: ''
};

const companyStatistics = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANY_COUNTRY_STATISTIC_SUCCESS':
      return {
        ...state,
        companyBCountry: action.payload
      };
    case 'COMPANY_MAJOR_STATISTIC_SUCCESS':
      return {
        ...state,
        companyBMajor: action.payload
      };
    case 'COMPANY_CITY_MAJOR_STATISTIC_SUCCESS':
      return {
        ...state,
        companyBCityMajor: action.payload
      };
    default:
      return state;
  }
};

export default companyStatistics;
