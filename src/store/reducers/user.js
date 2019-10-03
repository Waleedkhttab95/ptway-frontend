const initialUser = {
    _id: undefined,
    email: undefined,
    roles: undefined,
    loggedIn: false,
    token: undefined
  };
  
  const user = (state = initialUser, action) => {    
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...action.payload,
          loggedIn: true,
          sessionToken: action.payload.data.token
        };
        case "LOGIN_USER_SUCCESS":
        return {
          ...action.payload,
          loggedIn: true,
          sessionToken: action.payload.data.token
        };
      case "LOGIN_WORKER_SUCCESS":
        return {
          ...action.payload.data,
          loggedIn: true,
          sessionToken: action.payload.data.token
        };
      case "LOGIN_ADMIN_SUCCESS":
        return {
          ...action.payload.data,
          loggedIn: true,
          sessionToken: action.payload.token
        };
      case "LOGOUT":
        return { roles: undefined, loggedIn: false, sessionToken: undefined };
      default:
        return state;
    }
  };
  
  export default user;
  