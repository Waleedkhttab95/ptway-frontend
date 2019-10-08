const initialUser = {
    isAdmin:false,
    loggedIn: false,
  };
  
  const user = (state = initialUser, action) => {        
    switch (action.type) {
      case "LOGIN_ADMIN_SUCCESS":
        return {
          ...action.payload,
          loggedIn: true,
           
        };
      case "LOGOUT":
        return { roles: undefined, loggedIn: false, sessionToken: undefined };
      default:
        return state;
    }
  };
  
  export default user;
  