import generalStatistics from '../../../services/generalStatistics/dailyAds';

export const dailyStatistics = () => {
  return {
    type: 'DAILY_STATISTIC',
    payload: generalStatistics.getdailyAds()
  };
};
export const weeklyStatistics = params => {
  return {
    type: 'WEEKLY_STATISTIC',
    payload: generalStatistics.getWeeklyAds(params)
  };
};
export const monthlyStatistics = params => {
  return {
    type: 'MONTHLY_STATISTIC',
    payload: generalStatistics.getMonthlyAds(params)
  };
};
