import baseRequest from '../_core';

const userServices = {
  register: params =>
    baseRequest.post('/userRegistreing ', {
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: params.password
    }),
  // .then(result => {
  //   baseRequest.addHeader(result.token);
  //   return result;
  // })
  // .catch(error => {
  //   console.log('errror', error);
  //   store.dispatch({
  //     type: 'USER_SINGUP_ERROR',
  //     error: error.response.data
  //   });
  //   console.log({ error: error.response.data });
  //   // return { error: error.response.data };
  // }),
  userInfo: params =>
    baseRequest.post('/postuserinfo ', {
      // country: params.country,
      city: params.city,
      public_Major: params.major,
      birthDate: params.birthDate,
      gender: params.gender,
      fullName: params.fullName
    }),
  login: params =>
    baseRequest
      .post('/login', { email: params.username, password: params.password })
      .then(result => {
        return result;
      }),
  companyRegistration: params =>
    baseRequest.post('/companyRegistreing', {
      companyName: params.companyName,
      email: params.email,
      Name: params.Name,
      phone: params.phone,
      position: params.position,
      password: params.password,
      sector: params.sector,
      CompanySpecialist: params.specialist,
      isActive: params.status
    }),
  companyLogin: params =>
    baseRequest.post('/com_login', {
      email: params.email,
      password: params.password
    }),
  resetPassword: params =>
    baseRequest.post('/resetPassword', {
      email: params.email
    }),
  setNewPassword: params =>
    baseRequest.put(`/reset?id=${params.id}`, {
      newPassword: params.password
    }),
  resetCompanyPassword: params =>
    baseRequest.post('/com_resetPassword', {
      email: params.email
    })
  // setNewCompanyPassword: params =>
  //   baseRequest.put(`/reset?id=${params.id}`, {
  //     newPassword: params.password
  //   })
};

export default userServices;
