const initialStatistics = {
    isLoading : false,
    isData:false,
    data:''
  };
  
  const statistics = (state = initialStatistics, action) => {  
    console.log('action',action.type,action.payload);
     
    switch (action.type) {
      case "AGE_STATISTIC_SUCCESS":
        return {
          ...state,
         data:action.payload,
        };
      default:
        return state;
    }
  };
  
  export default statistics;
  