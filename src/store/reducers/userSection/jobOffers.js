const initialState = {
  jobOffers: '',
  jobOffer: '',
  company: '',
  job: '',
  error: {}
};

const Jobs = (state = initialState, action) => {
  switch (action.type) {
    case 'JOB_OFFERS_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    case 'JOB_OFFER_SUCCESS':
      return {
        ...state,
        jobOffer: action.payload
      };
    case 'JOB_OFFER_ERROR':
      return {
        ...state,
        error: {
          showErrorMsg: true
        }
      };
    case 'COMPANY_DETAILS_SUCCESS':
      return {
        ...state,
        company: action.payload
      };
    case 'APPLY_JOB_SUCCESS':
      return {
        ...state,
        job: action.payload
      };
    default:
      return state;
  }
};

export default Jobs;
