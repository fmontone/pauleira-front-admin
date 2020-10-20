import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider } from './ToastContext';

function AppProvider({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
