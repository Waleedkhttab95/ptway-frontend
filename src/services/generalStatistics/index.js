import baseRequest from '../../_core';
import { loadState } from '../../_core/localStorage';

const generalStatistics = {
  getdailyAds: () => {
    return baseRequest
      .get('/get/dailyUpdate', loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getWeeklyAds: params => {
    return baseRequest
      .get(`/get/dailyUpdateByDateWeek/?date=${params.date}`, loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getMonthlyAds: params => {
    return baseRequest
      .get(
        `/get/dailyUpdateByDateBeforeMonth/?date=${params.date}`,
        loadState()
      )
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
        `/get/dailyUpdateBybetweendates/?date=${params.start_date}&date2=${params.end_date}`,
        loadState()
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
