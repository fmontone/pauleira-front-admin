import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function UsersAdmProvider({ children }) {
  const [admUsers, setAdmUsers] = useState([]);
  const [cacheAdmUsers, setCacheAdmUsers] = useState();

  const [sortIndex, setSortIndex] = useState(0);

  const sortOptions = useMemo(
    () => [
      { title: 'Mais Recentes', property: 'id', order: 'desc' },
      { title: 'Mais Antigos', property: 'id', order: 'asc' },
      { title: 'A-z', property: 'name', order: 'asc' },
      { title: 'z-A', property: 'name', order: 'desc' },
    ],
    []
  );

  function admUsersFilter(value) {
    if (value) {
      setAdmUsers(
        admUsers.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setAdmUsers(cacheAdmUsers);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        sortOptions,
        sortIndex,
        setSortIndex,
        admUsers,
        setAdmUsers,
        setCacheAdmUsers,
        admUsersFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAdmUsers() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAdmUsers must be used within UsersAdmProvider');
  }

  return context;
}

UsersAdmProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { UsersAdmProvider, useAdmUsers };
