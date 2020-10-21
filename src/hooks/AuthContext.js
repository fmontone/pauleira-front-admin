import React, { createContext, useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authLoading, setAuthLoading] = useState(false);

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@pauleiraAdm:token');
    const user = localStorage.getItem('@pauleiraAdm:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    setAuthLoading(true);
    const response = await api.post('/session-admin', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@pauleiraAdm:token', token);
    localStorage.setItem('@pauleiraAdm:user', JSON.stringify({ user }));

    setData({ token, user });
    setAuthLoading(false);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@pauleiraAdm:token');
    localStorage.removeItem('@pauleiraAdm:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        authLoading,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { AuthProvider, useAuth };
