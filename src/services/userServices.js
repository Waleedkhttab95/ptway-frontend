import baseRequest from '../_core';
import { loadState } from '../_core/localStorage';

const userServices = {
  register: params =>
    baseRequest
      .post('/userRegistreing ', {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: params.password
      })
      .then(result => {
        baseRequest.addHeader(result.token);
        return result;
      })
      .catch(e => {
        console.log('e', e);
      }),
  userInfo: params =>
    baseRequest
      .post(
        '/postuserinfo ',
        {
          country: params.country,
          city: params.city,
          public_Major: params.major,
          birthDate: params.birthDate,
          gender: params.gender,
          fullName: params.fullName
        },
        loadState()
      )
      .then(result => {
        console.log('loadState', loadState());
        return result;
      })
      .catch(e => {
        console.log('e', e);
      }),
  login: (email, password) =>
    baseRequest.post('/login', { email, password }).then(result => {
      // baseRequest.addHeader(result.data.sessionToken);
      return result;
    })
};

export default userServices;
