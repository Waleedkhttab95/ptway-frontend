import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const userSearch = {
  userById: params =>
    baseRequest
      .get(`/get/searchUserById/?id=${params.id}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      }),
  userByMail: params => {
    return baseRequest
      .get(`/get/searchUserByEmail/?email=${params.email}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      });
  },
  userByName: params => {
    return baseRequest
      .get(`/get/searchUserByName/?firstName=${params.name}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      });
  }
};

export default userSearch;
