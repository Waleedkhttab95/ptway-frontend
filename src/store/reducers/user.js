const initialUser = {
  isAdmin: false,
  loggedIn: false
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true
      };
    case 'USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: action.payload
      };
    case 'LOGIN_ADMIN_SUCCESS':
      return {
        ...action.payload,
        loggedIn: true
      };
    case 'LOGOUT_SUCCESS':
      return { roles: undefined, loggedIn: false, sessionToken: undefined };
    default:
      return state;
  }
};

export default user;
