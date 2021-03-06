const initialValues = {
  isLoading: false,
  userById: '',
  userByMail: '',
  userByName: '',
  companyById: '',
  companyByMail: '',
  companyByName: ''
};

const adminSearch = (state = initialValues, action) => {
  switch (action.type) {
    case 'USER_SEARCH_BY_ID_SUCCESS':
      return {
        ...state,
        userById: action.payload
      };
    case 'USER_SEARCH_BY_EMAIL_SUCCESS':
      return {
        ...state,
        userByMail: action.payload
      };
    case 'USER_SEARCH_BY_NAME_SUCCESS':
      return {
        ...state,
        userByName: action.payload
      };
    case 'COMPANY_SEARCH_BY_ID_SUCCESS':
      return {
        ...state,
        companyById: action.payload
      };
    case 'COMPANY_SEARCH_BY_EMAIL_SUCCESS':
      return {
        ...state,
        companyByMail: action.payload
      };
    case 'COMPANY_SEARCH_BY_NAME_SUCCESS':
      return {
        ...state,
        companyByName: action.payload
      };
    default:
      return state;
  }
};

export default adminSearch;
