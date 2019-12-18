import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const companySearch = {
  companyById: params =>
    baseRequest
      .get(`/get/searchCompanyById/?id=${params.id}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      }),
  companyByMail: params => {
    return baseRequest
      .get(`/get/searchCompanyByEmail/?email=${params.email}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      });
  },
  companyByName: params => {
    return baseRequest
      .get(`/get/searchCompanyByName/?companyName=${params.name}`, loadState())
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log('error', e.error);
      });
  }
};

export default companySearch;
