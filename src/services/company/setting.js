import baseRequest from '../../_core';

const settings = {
  changePassword: params =>
    baseRequest.put('changePasswordCompany', {
      prevPassword: params.prevPassword,
      newPassword: params.newPassword
    })
};
export default settings;
