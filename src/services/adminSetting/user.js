import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const userSetting = {
  activateAccounts: () => {
    return baseRequest
      .put('/activealluseraccount', loadState())
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addSubAdmin: params => {
    return baseRequest
      .post(
        '/post/createNewSubUser',
        {
          firstName: params.firstName,
          lastName: params.lastName,
          email: params.email,
          password: params.password
        },
        loadState()
      )
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
        `/get/phonenumbersByCityAndMajor/?city=${params.city}&major=${params.major}&spMajor=${params.sMajor}`,
        loadState()
      )
      .then(result => result)
      .catch(e => console.log('e', e));
  }
};

export default userSetting;
