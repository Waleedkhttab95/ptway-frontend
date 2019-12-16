import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const universitiesContent = {
  getAllUniversities: () => {
    return baseRequest
      .get('/get/allUniversty', loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  deleteUniversity: params => {
    return baseRequest
      .delete(
        '/delete/deleteUniversity',
        { university: { _id: params.id } },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  updateUniversity: params => {
    return baseRequest
      .put(
        '/put/writeOnUniversity',
        {
          university: { _id: params.id },
          universtyName: params.universtyName
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addUniversity: params => {
    return baseRequest
      .post(
        '/post/university',
        {
          universtyName: params.universtyName
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default universitiesContent;
