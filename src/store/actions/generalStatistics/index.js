import generalStatistics from '../../../services/generalStatistics';

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
export const periodStatistics = params => {
  return {
    type: 'PERIOD_STATISTIC',
    payload: generalStatistics.getPeriodAds(params)
  };
};
