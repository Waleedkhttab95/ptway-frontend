import baseRequest from '../_core';
const adminServices = {
  login: (email, password) => baseRequest.post('/login', { email, password }),
  logout: () =>
    baseRequest
      .get('/logout')
      .then(result => result)
      .catch(e => console.log(e))
};

export default adminServices;
