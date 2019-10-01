const initialState = {
    data: {},
  };

const university = (state= initialState, {type,payload})=>{
    switch(type){
        case 'GET_UNIVERSITY':
            return{
               ...state,
               data: payload
            }
            default:
                    return state;
    }
    
}

export default university;