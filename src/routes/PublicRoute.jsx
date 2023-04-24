import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PublicRoute = ({ user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !user ? <Component {...props} /> : <Redirect to={ROUTES.HOME} />
      }
    />
  );
};

export default PublicRoute;
