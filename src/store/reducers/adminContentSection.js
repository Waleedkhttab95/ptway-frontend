const initialState ={
    updatedCity: ''
}

const adminContent = (state = initialState, action) => {  
    switch (action.type) {
      case "UPDATE_CITY_SUCCESS":
        return {
          ...state,
          updatedCity: action.payload,
        };       
      default:
        return state;
    }
  };
  
  export default adminContent;
  