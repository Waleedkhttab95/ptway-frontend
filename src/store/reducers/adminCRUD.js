const initialState ={
    user: ''
}

const adminCRUD = (state = initialState, action) => {  
    switch (action.type) {
      case "DELETE_USER_SUCCESS":
        return {
          ...state,
          user: action.payload,
        }; 
      default:
        return state;
    }
  };
  
  export default adminCRUD;
  