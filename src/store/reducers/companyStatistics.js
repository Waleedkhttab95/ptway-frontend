const initialState ={
    companyBCountry :'',
    companyBMajor: ''
}


const companyStatistics = (state = initialState, action) => {  
    switch (action.type) {
      case "COMPANY_COUNTRY_STATISTIC_SUCCESS":
        return {
          ...state,
          companyBCountry: action.payload,
        }; 
        case "COMPANY_MAJOR_STATISTIC_SUCCESS":
            return {
              ...state,
              companyBMajor: action.payload,
            }; 
      default:
        return state;
    }
  };
  
  export default companyStatistics;
  