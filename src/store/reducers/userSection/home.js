const initialState = {
  userInfo: ''
};

const userHome = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_INFORMATION_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userHome;
