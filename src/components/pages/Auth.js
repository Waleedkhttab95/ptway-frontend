import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingPage from './landingPage';
import { loadState } from '../../_core/localStorage';

const AuthHome = () => {
  const { loggedIn, role, token } = loadState();

  return loggedIn && token && role === 'company' ? (
    <Redirect to="/company/home" />
  ) : loggedIn && token && role === 'user' ? (
    <Redirect to="/user/home" />
  ) : (
    <LandingPage />
  );
};

export default AuthHome;
