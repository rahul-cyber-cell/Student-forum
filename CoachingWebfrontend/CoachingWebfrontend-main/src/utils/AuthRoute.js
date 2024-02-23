import React from 'react';
import { Redirect, Route } from 'react-router';
const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        (localStorage.getItem('accessToken')!=='')?(
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
