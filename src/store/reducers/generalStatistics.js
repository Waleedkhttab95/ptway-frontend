const initialStatistics = {
  isLoading: false,
  dailyAds: '',
  weeklyAds: '',
  monthlyAds: ''
};

const generalStatistics = (state = initialStatistics, action) => {
  switch (action.type) {
    case 'DAILY_STATISTIC_SUCCESS':
      return {
        ...state,
        dailyAds: action.payload
      };
    case 'WEEKLY_STATISTIC_SUCCESS':
      return {
        ...state,
        weeklyAds: action.payload
      };
    case 'MONTHLY_STATISTIC_SUCCESS':
      return {
        ...state,
        monthlyAds: action.payload
      };
    default:
      return state;
  }
};

export default generalStatistics;
