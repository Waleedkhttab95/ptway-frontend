import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const companySetting = {
  getCompanyRequest: () => {
    return baseRequest
      .get('/get/companyApproval', loadState())
      .then(({ result }) => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  companyApproval: params => {
    return baseRequest
      .put(
        '/companyApproval',
        {
          id: params.id
        },
        loadState()
      )
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default companySetting;
