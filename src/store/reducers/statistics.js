const initialStatistics = {
  isLoading: false,
  age: '',
  city: '',
  major: '',
  growth: ''
};

const statistics = (state = initialStatistics, action) => {
  switch (action.type) {
    case 'AGE_STATISTIC_SUCCESS':
      return {
        ...state,
        age: action.payload
      };
    case 'CITY_STATISTIC_SUCCESS':
      return {
        ...state,
        city: action.payload
      };
    case 'MAJOR_STATISTIC_SUCCESS':
      return {
        ...state,
        major: action.payload
      };
    case 'WEEKLY_GROWTH_SUCCESS':
      return {
        ...state,
        growth: action.payload
      };
    case 'USER_INFO_SUCCESS':
      return {
        // ...state,
        result: action.payload
      };
    case 'USER_INFO_ERROR':
      return {
        // ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default statistics;
