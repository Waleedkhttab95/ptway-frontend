import React from 'react';
import { loadState } from '../../_core/localStorage';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loadState().user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/admin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
