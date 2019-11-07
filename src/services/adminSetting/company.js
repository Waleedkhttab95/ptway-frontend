import baseRequest from '../../_core';

const companySetting = {
  getCompanyRequest: () => {
    return baseRequest
      .get('/get/companyApproval')
      .then(({ result }) => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  companyApproval: params => {
    return baseRequest
      .put('/companyApproval', {
        id: params.id
      })
      .then(result => result)
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default companySetting;
