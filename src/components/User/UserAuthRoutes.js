import React from 'react';
import { loadState } from '../../_core/localStorage';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loadState().role === 'user' && loadState().loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/user/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
