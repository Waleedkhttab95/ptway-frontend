import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const majorContent = {
  getAllMajors: () => {
    return baseRequest
      .get('/get/allMajors', loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllSubMajors: params => {
    return baseRequest
      .get(`/get/searchSubMajorByMajorName/?Name=${params.name}`, loadState())
      .then(result => result)
      .catch(e => console.log(e));
  },
  deleteSubMajor: params => {
    return baseRequest
      .delete(
        '/delete/deleteSubMajor',
        { subMajor: { _id: params.id } },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  updateSubMajor: params => {
    return baseRequest
      .put(
        '/put/writeOnSubMajor',
        {
          subMajor: { _id: params.id },
          type: params.type,
          value: params.value
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addMajor: params => {
    return baseRequest
      .post(
        '/post/major',
        {
          majorName: params.majorName,
          key: params.key
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addSubMajor: params => {
    return baseRequest
      .post(
        '/post/subMajor',
        {
          subMajorName: params.subMajorName,
          key: params.key,
          public_Major: params.public_Major
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default majorContent;
