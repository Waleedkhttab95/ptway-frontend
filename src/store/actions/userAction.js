import userServices from '../../services/userServices';
import adminServices from '../../services/adminServices';

export const userSignup = params => {
  return {
    type: 'USER_SIGNUP',
    payload: userServices.register(params)
  };
};

export const companySignup = params => {
  return {
    type: 'COMPANY_SIGNUP',
    payload: userServices.companyRegistration(params)
  };
};

export const userInfo = params => {
  return {
    type: 'USER_INFO',
    payload: userServices.userInfo(params)
  };
};
export const userLogin = params => {
  return {
    type: 'USER_LOGIN',
    payload: userServices.login(params)
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
