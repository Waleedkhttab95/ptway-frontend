import baseRequest from '../../_core';

const home = {
  getCompanyInfo: () => baseRequest.get('/getcompanyinfo'),
  getCompanyStatistic: () => baseRequest.get('/get/counts')
};

export default home;
