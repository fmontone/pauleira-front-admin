import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const GalleryContext = createContext();

function GalleryProvider({ children }) {
  const [gallery, setGallery] = useState({});

  return (
    <GalleryContext.Provider value={{ gallery, setGallery }}>
      {children}
    </GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);

  if (!context)
    throw new Error('useGallery should be use within GalleryProvider');

  return context;
}

GalleryProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { GalleryProvider, useGallery };
