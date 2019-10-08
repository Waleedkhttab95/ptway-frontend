const initialStatistics = {
    isLoading : false,
    age:'',
  };
  
  const statistics = (state = initialStatistics, action) => {  
    console.log('action',action.type,action.payload);
     
    switch (action.type) {
      case "AGE_STATISTIC_SUCCESS":
        return {
          ...state,
         age:action.payload,
        };
        case "CITY_STATISTIC_SUCCESS":
            return {
              ...state,
             city:action.payload,
            };
      default:
        return state;
    }
  };
  
  export default statistics;
  