import setting from '../../../services/user/setting';

export const changePassword = params => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: setting.updatePassword(params)
  };
};
export const changeEmailNotification = params => {

  return {
    type: 'UPDATE_EMAIL_NOTIFICATION',
    payload: setting.updateEmailNotification(params)
  };
};
