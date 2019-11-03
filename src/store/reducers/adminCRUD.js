const initialState = {
  user: '',
  company: '',
  updatedUser: '',
  updatedCompany: '',
  confirmUser: '',
  confirmCompany: '',
  blockUser: '',
  blockCompany: ''
};

const adminCRUD = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        user: action.payload
      };
    case 'DELETE_COMPANY_SUCCESS':
      return {
        ...state,
        company: action.payload
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        updatedUser: action.payload
      };
    case 'UPDATE_COMPANY_SUCCESS':
      return {
        ...state,
        updatedCompany: action.payload
      };
    case 'CONFIRM_USER_SUCCESS':
      return {
        ...state,
        confirmUser: action.payload
      };
    case 'CONFIRM_COMPANY_SUCCESS':
      return {
        ...state,
        confirmCompany: action.payload
      };
    case 'BLOCK_USER_SUCCESS':
      return {
        ...state,
        blockUser: action.payload
      };
    case 'BLOCK_COMPANY_SUCCESS':
      return {
        ...state,
        blockCompany: action.payload
      };
    default:
      return state;
  }
};

export default adminCRUD;
