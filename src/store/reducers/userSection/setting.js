const initialState = {
  newPassword: '',
  passwordError: '',
  emailNotification: false,
  changePasswordSuccess: {},
  changeNotificationSuccess: {},
  error: {}
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD_SUCCESS':
      return {
        ...state,
        changePasswordSuccess: {
          showSuccessMsg: true,
          message: 'لقد تم تغير كلمة المرور بنجاح'
        },
        newPassword: action.payload
      };
    case 'UPDATE_PASSWORD_ERROR':
      return {
        ...state,
        error: {
          showErrorMsg: true,
          message: 'لم يتم تغير كلمة المرور '
        },
        passwordError: action.payload
      };
    case 'UPDATE_EMAIL_NOTIFICATION_SUCCESS':
      return {
        ...state,
        changeNotificationSuccess: {
          showSuccessMsg: true,
          message: 'لقد تم تغير كلمة اعدادات التنبيهات بنجاح'
        },
        emailNotification: action.payload
      };
    case 'UPDATE_EMAIL_NOTIFICATION_ERROR':
      return {
        ...state,
        error: {
          showErrorMsg: true,
          message: 'لم يتم تغير اعدادات التنبيهات بنجاح '
        },
        emailNotification: action.payload
      };
    case 'CLOSE_SUCCESS_MODAL':
      return {
        ...state,
        changePasswordSuccess: {},
        changeNotificationSuccess: {}
      };
    default:
      return state;
  }
};

export default settings;
