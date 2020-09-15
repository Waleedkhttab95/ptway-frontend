import baseRequest from '../../_core';

const setting = {
  updatePassword: params =>
    baseRequest.put('/changePassword', {
      prevPassword: params.prevPassword,
      newPassword: params.newPassword
    }),
  updateEmailNotification: params =>
    baseRequest.put('/changeEmailNotification', {
      status: params.status
    }),
  deactivateAccount: () => baseRequest.put('/disableAccount'),

  reactivateAccount: params =>
    baseRequest.post('/resend', { email: params.email })
};

export default setting;
