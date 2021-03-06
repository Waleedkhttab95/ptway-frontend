import baseRequest from '../../_core/';
const initialUser = {
  isAdmin: false,
  loggedIn: false,
  error: ''
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_SUCCESS':
      baseRequest.setLocalStorage({
        ...action.payload,
        isAdmin: false,
        loggedIn: true,
        role: 'user'
      });
      return {
        // ...state,
        ...action.payload,
        loggedIn: true
      };
    case 'USER_SIGNUP_ERROR':
      return {
        // ...state,
        signupError: action.payload
      };
    case 'COMPANY_SIGNUP_SUCCESS':
      baseRequest.setLocalStorage({
        ...action.payload,
        isAdmin: false,
        loggedIn: false,
        role: 'company'
      });
      return {
        // ...state,
        ...action.payload,
        loggedIn: true
      };
    case 'COMPANY_SIGNUP_ERROR':
      return {
        // ...state,
        signupError: action.payload
      };
    case 'LOGIN_ADMIN_SUCCESS':
      baseRequest.setLocalStorage({
        ...action.payload,
        // isAdmin: true,
        loggedIn: true
      });
      return {
        ...action.payload,
        loggedIn: true
      };
    case 'USER_LOGIN_SUCCESS':
      baseRequest.setLocalStorage({
        token: action.payload.token,
        isAdmin: false,
        role: 'user',
        loggedIn: true
      });
      return {
        ...action.payload,
        isAdmin: false,
        loggedIn: true
      };
    case 'USER_RESET_PASSWORD_SUCCESS':
      return {
        ...action.payload
      };
    case 'USER_RESET_PASSWORD_ERROR':
      return {
        ...action.payload
      };
    case 'COMPANY_RESET_PASSWORD_SUCCESS':
      return {
        ...action.payload
      };
    case 'COMPANY_RESET_PASSWORD_ERROR':
      return {
        ...action.payload
      };
    case 'USER_LOGIN_ERROR':
      return {
        // ...state,
        loginError: action.payload
      };
    case 'COMPANY_LOGIN_SUCCESS':
      baseRequest.setLocalStorage({
        token: action.payload.token,
        isAdmin: false,
        role: 'company',
        loggedIn: true
      });
      return {
        ...action.payload,
        isAdmin: false,
        loggedIn: true
      };
    case 'COMPANY_LOGIN_ERROR':
      return {
        // ...state,
        loginError: action.payload
      };
    case 'LOGOUT_SUCCESS':
      baseRequest.setLocalStorage({
        loggedIn: false
      });
      baseRequest.clearHeader();
      return { roles: undefined, loggedIn: false, sessionToken: undefined };
    default:
      return state;
  }
};

export default user;
