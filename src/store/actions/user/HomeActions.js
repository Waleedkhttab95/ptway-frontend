import homeServices from '../../../services/user/HomeServices';

export const userInformation = () => {
  return {
    type: 'USER_INFORMATION',
    payload: homeServices.getUserInformation()
  };
};
