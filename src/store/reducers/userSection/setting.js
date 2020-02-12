const initialState = {
  newPassword: '',
  passwordError: '',
  emailNotification: false
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD_SUCCESS':
      return {
        ...state,
        newPassword: action.payload
      };
    case 'UPDATE_PASSWORD_ERROR':
      return {
        ...state,
        passwordError: action.payload
      };
    case 'UPDATE_EMAIL_NOTIFICATION_SUCCESS':
      return {
        ...state,
        emailNotification: action.payload
      };
    default:
      return state;
  }
};

export default settings;
