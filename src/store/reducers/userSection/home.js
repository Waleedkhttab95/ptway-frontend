const initialState = {
  userInfo: '',
  unreadOffers: '',
  jobOffers: ''
};

const userHome = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_INFORMATION_SUCCESS':
      return {
        ...state,
        userInfo: action.payload
      };
    case 'UNREAD_JOB_OFFERS_SUCCESS':
      return {
        ...state,
        unreadOffers: action.payload
      };
    default:
      return state;
  }
};

export default userHome;
