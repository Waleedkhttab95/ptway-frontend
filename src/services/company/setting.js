import baseRequest from '../../_core';

const settings = {
  changePassword: params =>
    baseRequest.put('changePasswordCompany', {
      prevPassword: params.prevPassword,
      newPassword: params.newPassword
    }),
  getSubUsers: () => baseRequest.get('/getSubUsers'),
  switchSubUsers: userId => baseRequest.put(`/switchSubUser?userId=${userId}`),
  newSubUser: params =>
    baseRequest.post('/subUserRegistreing', {
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: params.password
    }),
  updateCompanyName: params =>
    baseRequest.put('changeCompanyName', {
      name: params.name
    }),
  changeSuperVisor: params =>
    baseRequest.put('/changeSuperVisor', {
      Name: params.Name,
      position: params.position,
      phone: params.phone
    }),
  getCompanySuperV: () => baseRequest.get('/getCompanySuperV')
};

export default settings;
