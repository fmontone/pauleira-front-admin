import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function GalleriesAdmProvider({ children }) {
  const [galleriesAdm, setGalleriesAdm] = useState([]);
  const [cacheGalleriesAdm, setCacheGalleriesAdm] = useState();

  const [sortIndex, setSortIndex] = useState(0);

  const sortOptions = useMemo(
    () => [
      { title: 'Mais Recentes', property: 'id', order: 'desc' },
      { title: 'Mais Antigos', property: 'id', order: 'asc' },
      { title: 'Mais Curtidas', property: 'likes', order: 'desc' },
      { title: 'A-z', property: 'name', order: 'asc' },
      { title: 'z-A', property: 'name', order: 'desc' },
      { title: 'Publicadas', property: 'status', order: 'desc' },
      { title: 'Rascunho', property: 'status', order: 'asc' },
    ],
    []
  );

  function galleriesAdmFilter(value) {
    if (value) {
      setGalleriesAdm(
        galleriesAdm.filter((gallery) =>
          gallery.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setGalleriesAdm(cacheGalleriesAdm);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        sortOptions,
        sortIndex,
        setSortIndex,
        galleriesAdm,
        setGalleriesAdm,
        setCacheGalleriesAdm,
        galleriesAdmFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useGalleriesAdm() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useGalleriesAdm must be used within GalleriesAdmProvider');
  }

  return context;
}

GalleriesAdmProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { GalleriesAdmProvider, useGalleriesAdm };
