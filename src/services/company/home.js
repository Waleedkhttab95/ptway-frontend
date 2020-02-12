import baseRequest from '../../_core';

const home = {
  getCompanyInfo: () => baseRequest.get('/getcompanyinfo'),
  getCompanyStatistic: () => baseRequest.get('/get/counts'),
  getCompanyAds: () => baseRequest.get('/getCompanyAds')
};

export default home;
