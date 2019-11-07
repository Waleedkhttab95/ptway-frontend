import baseRequest from '../../_core';

const userSetting = {
  activateAccounts: () => {
    return baseRequest
      .put('/activealluseraccount')
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addSubAdmin: params => {
    return baseRequest
      .post('/post/createNewSubUser', {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: params.password
      })
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default userSetting;
