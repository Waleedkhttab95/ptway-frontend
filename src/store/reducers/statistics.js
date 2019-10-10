const initialStatistics = {
    isLoading : false,
    age:'',
    city:'',
    major: ''
  };
  
  const statistics = (state = initialStatistics, action) => {  
    console.log('action',action.type,action.payload);
     
    switch (action.type) {
      case "AGE_STATISTIC_SUCCESS":
        return {
          ...state,
         age: action.payload,
        };
        case "CITY_STATISTIC_SUCCESS":
            return {
              ...state,
             city: action.payload,
            };
        case "MAJOR_STATISTIC_SUCCESS":
            return {
              ...state,
              major: action.payload,
            };    
      default:
        return state;
    }
  };
  
  export default statistics;
  