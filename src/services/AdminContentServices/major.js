import baseRequest from '../../_core';

const majorContent = {
  getAllMajors: () => {
    return baseRequest
      .get('/get/allMajors')
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllSubMajors: params => {
    return baseRequest
      .get(`/get/searchSubMajorByMajorName/?Name=${params.name}`)
      .then(result => result)
      .catch(e => console.log(e));
  },
  deleteSubMajor: params => {
    return baseRequest
      .delete('/delete/deleteSubMajor', { subMajor: { _id: params.id } })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  updateSubMajor: params => {
    return baseRequest
      .put('/put/writeOnSubMajor', {
        subMajor: { _id: params.id },
        type: params.type,
        value: params.value
      })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addSubMajor: params => {
    return baseRequest
      .post('/post/subMajor', {
        subMajorName: params.subMajorName,
        key: params.key,
        public_Major: params.public_Major
      })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default majorContent;
