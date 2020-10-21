import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '~/hooks/AuthContext';

import LayoutAuth from '~/pages/_layouts/LayoutAuth';
import LayoutDefault from '~/pages/_layouts/LayoutDefault';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { user } = useAuth();

  const signed = !!user;

  console.log(signed);

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? LayoutDefault : LayoutAuth;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
