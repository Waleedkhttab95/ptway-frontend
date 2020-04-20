const initialState = {
  newProject: '',
  cotracts: ''
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT_SUCCESS':
      return {
        ...state,
        newProject: action.payload
      };
    case 'GET_ALL_COTRACTS_SUCCESS':
      return {
        ...state,
        cotracts: action.payload
      };
    default:
      return state;
  }
};

export default projects;
