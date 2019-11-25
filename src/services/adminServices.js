import baseRequest from '../_core';
const adminServices = {
  login: (email, password) =>
    baseRequest
      .post('/login', { email, password })
      .then(result => {
        baseRequest.addHeader(result);

        return result;
      })
      .catch(e => {
        return { error: e.response.data };
      }),
  logout: () =>
    baseRequest
      .get('/logout')
      .then(result => result)
      .catch(e => console.log(e))
};

export default adminServices;
