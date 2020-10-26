import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { UsersAdmProvider } from '~/hooks/UsersAdmContext';

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <UsersAdmProvider>{children}</UsersAdmProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
