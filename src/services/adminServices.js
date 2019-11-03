import baseRequest from '../_core';
const adminServices = {
  login: (email, password) =>
    baseRequest
      .post('/login', { email, password })
      .then(result => {
        baseRequest.addHeader(result);
        console.log('result', result);

        return result;
      })
      .catch(e => {
        console.log('errorrrrr', e.error);
      })
};

export default adminServices;
