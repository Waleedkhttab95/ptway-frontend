import baseRequest from '../../_core';

const homeServices = {
  getUserInformation: () => {
    return baseRequest.get('/getuserinfo').then(result => result);
  }
};

export default homeServices;
