const initialState ={
    updatedCity: '',
    deleteCity: '',
    addCity:''
}

const adminContent = (state = initialState, action) => {  
    switch (action.type) {
      case "UPDATE_CITY_SUCCESS":
        return {
          ...state,
          updatedCity: action.payload,
        }; 
    case "DELETE_CITY_SUCCESS":
        return {
            ...state,
            deleteCity: action.payload,
        };         
      default:
        return state;
    }
  };
  
  export default adminContent;
  