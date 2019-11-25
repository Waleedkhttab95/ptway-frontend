import baseRequest from '../../_core';
const generalStatistics = {
  getdailyAds: () => {
    return baseRequest
      .get('/get/dailyUpdate')
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getWeeklyAds: params => {
    return baseRequest
      .get(`/get/dailyUpdateByDateWeek/?date=${params.date}`)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getMonthlyAds: params => {
    return baseRequest
      .get(`/get/dailyUpdateByDateBeforeMonth/?date=${params.date}`)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getPeriodAds: params => {
    return baseRequest
      .get(
        `/get/dailyUpdateByDateBeforeMonth/?date=${params.start_date}&date2=${params.end_date}`
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};

export default generalStatistics;
