import baseRequest from '../../_core';

const Jobs = {
  getJobOffers: () => {
    return baseRequest.get('/get/notifications').then(result => result);
  }
};

export default Jobs;
