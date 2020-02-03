import baseRequest from '../../_core';

const homeServices = {
  getUserInformation: () => {
    return baseRequest.get('/getuserinfo').then(result => result);
  },
  getUnreadJobOffers: () => {
    return baseRequest.get('/get/unread/notification').then(result => result);
  },
  getJobOffers: () => {
    return baseRequest.get('/get/notifications').then(result => result);
  }
};

export default homeServices;
