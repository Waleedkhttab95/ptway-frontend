import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const companyCRUD = {
  deleteCompany: params => {
    return baseRequest
      .delete(
        '/delete/deleteCompany',
        { company: { _id: params.id } },
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  updateCompany: params => {
    return baseRequest
      .put(
        `/put/writeOnCompany/?updateType=${params.type}&value=${params.value}`,
        { company: { _id: params.id } },
        loadState()
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  confirmCompany: params => {
    return baseRequest
      .put(`/confitm/company/?id=${params.id}`, loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  blockCompany: params => {
    return baseRequest
      .put(`/block/company/?id=${params.id}`, loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default companyCRUD;
