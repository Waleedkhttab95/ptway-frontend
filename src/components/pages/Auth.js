import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingPage from './landingPage';
import { loadState } from '../../_core/localStorage';

const AuthHome = () => {
  const { loggedIn, role } = loadState();

  return loggedIn && role === 'company' ? (
    <Redirect to="/company/home" />
  ) : loggedIn && role === 'user' ? (
    <Redirect to="/user/home" />
  ) : (
    <LandingPage />
  );
};

export default AuthHome;
