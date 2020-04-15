import baseRequest from '../../_core';

const Jobs = {
  getJobOffers: pageNo => {
    return baseRequest
      .get(`/get/notifications?pageNo=${pageNo}`)
      .then(result => result);
  },
  getJobOffer: params => {
    return baseRequest.get(`/getjob?id=${params.id}`).then(result => result);
  },
  getCompany: params => {
    return baseRequest
      .get(`/getcompanyinfoById?id=${params.id}`)
      .then(result => result);
  },
  applyJob: params => {
    return baseRequest
      .post('/postBodyC', { jobAd: params.jobId })
      .then(result => result);
  }
};

export default Jobs;
