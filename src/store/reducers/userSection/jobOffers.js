const initialState = {
  jobOffers: ''
};

const userHome = (state = initialState, action) => {
  switch (action.type) {
    case 'JOB_OFFERS_SUCCESS':
      return {
        ...state,
        jobOffers: action.payload
      };
    default:
      return state;
  }
};

export default userHome;
