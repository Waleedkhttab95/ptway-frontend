import userServices from '../../services/userServices';
import adminServices from '../../services/adminServices';

export const userLogin = (email, password) => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: userServices.login(email, password)
  };
};

export const adminLogin = (email, password) => {
  return {
    type: 'LOGIN_ADMIN',
    payload: adminServices.login(email, password)
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: adminServices.logout()
  };
};
