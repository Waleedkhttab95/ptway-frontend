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
  },
  exportCityMajorData: params => {
    return baseRequest
      .get(
        `/get/phonenumbersByCityAndMajor/?city=${params.city}&major=${params.major}&spMajor=${params.sMajor}`
      )
      .then(result => result)
      .catch(e => console.log('e', e));
  }
};

export default userSetting;
