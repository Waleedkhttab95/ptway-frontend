import baseRequest from '../../_core';

const universitiesContent = {
  getAllUniversities: () => {
    return baseRequest
      .get('/get/allUniversty')
      .then(result => result)
      .catch(e => console.log(e));
  },
  deleteUniversity: params => {
    return baseRequest
      .delete('/delete/deleteUniversity', { university: { _id: params.id } })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  updateUniversity: params => {
    return baseRequest
      .put('/put/writeOnUniversity', {
        university: { _id: params.id },
        universtyName: params.universtyName
      })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  },
  addUniversity: params => {
    return baseRequest
      .post('/post/university', {
        universtyName: params.universtyName
      })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default universitiesContent;
