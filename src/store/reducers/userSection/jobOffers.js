const initialState = {
  jobOffers: '',
  jobOffer: '',
  company: ''
};

const Jobs = (state = initialState, action) => {
  switch (action.type) {
    case 'JOB_OFFERS_SUCCESS':
      return {
        ...state,
        jobOffers: action.payload
      };
    case 'JOB_OFFER_SUCCESS':
      return {
        ...state,
        jobOffer: action.payload
      };
    case 'COMPANY_DETAILS_SUCCESS':
      return {
        ...state,
        company: action.payload
      };
    default:
      return state;
  }
};

export default Jobs;
