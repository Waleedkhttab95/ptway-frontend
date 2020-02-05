import baseRequest from '../../_core';

const Jobs = {
  getJobOffers: () => {
    return baseRequest.get('/get/notifications').then(result => result);
  },
  getJobOffer: params => {
    return baseRequest.get(`/getjob?id=${params.id}`).then(result => result);
  },
  getCompany: params => {
    return baseRequest
      .get(`/getcompanyinfoById?id=${params.id}`)
      .then(result => result);
  }
};

export default Jobs;
