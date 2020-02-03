import baseRequest from '../_core';
import { loadState } from '../_core/localStorage';

console.log('loadState', loadState());
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
      country: params.country,
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
        console.log('result', result);

        return result;
      }),
  companyRegistration: params =>
    baseRequest.post('/companyRegistreing', {
      companyName: params.companyName,
      email: params.email,
      password: params.password,
      sector: params.sector,
      CompanySpecialist: params.specialist,
      isActive: params.status
    })
};

export default userServices;
