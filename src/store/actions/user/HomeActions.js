import homeServices from '../../../services/user/HomeServices';

export const userInformation = () => {
  return {
    type: 'USER_INFORMATION',
    payload: homeServices.getUserInformation()
  };
};

export const unreadJobOffers = () => {
  return {
    type: 'UNREAD_JOB_OFFERS',
    payload: homeServices.getUnreadJobOffers()
  };
};
