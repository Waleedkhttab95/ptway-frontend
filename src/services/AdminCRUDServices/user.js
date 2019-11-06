import baseRequest from '../../_core';

const userCRUD = {
  deleteUser: params => {
    return baseRequest
      .delete('/delete/deleteUser', { user: { _id: params.id } })
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  updateUser: params => {
    return baseRequest
      .put(
        `/put/writeOnUser/?updateType=${params.type}&value=${params.value}`,
        { user: { _id: params.id } }
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  confirmUser: params => {
    return baseRequest
      .put(`/confitm/user/?id=${params.id}`)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  blockUser: params => {
    return baseRequest
      .put(`/block/user/?id=${params.id}`)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default userCRUD;
