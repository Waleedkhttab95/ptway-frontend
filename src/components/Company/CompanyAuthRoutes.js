import React from 'react';
import { loadState } from '../../_core/localStorage';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loadState().role === 'company' && loadState().loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/company/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
