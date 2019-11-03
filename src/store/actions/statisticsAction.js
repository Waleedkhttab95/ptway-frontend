import statatisticsService from '../../services/statisticsService';

export const ageStatistic = params => {
  return {
    type: 'AGE_STATISTIC',
    payload: statatisticsService.age(params)
  };
};

export const cityStatistic = params => {
  return {
    type: 'CITY_STATISTIC',
    payload: statatisticsService.city(params)
  };
};

export const majorStatistic = params => {
  return {
    type: 'MAJOR_STATISTIC',
    payload: statatisticsService.major(params)
  };
};

export const weeklyGrowth = () => {
  return {
    type: 'WEEKLY_GROWTH',
    payload: statatisticsService.growth()
  };
};
