import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GalleryContext } from './GalleryContext';

import api from '~/services/api';

import { Container } from './styles';

import GalleryForm from './GalleryForm';
import LoadingGallery from '~/components/LoadingGallery';
import ImageUploader from './ImageUploader';
import GalleryImages from './GalleryImages';

function Gallery() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState(null);
  const [editGallery, setEditGallery] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await api.get(`/galleries/${id}`);

      setGalleryData(data);
    }

    if (id && !galleryData) {
      fetchData();
      setEditGallery(true);
    }

    setLoading(false);
  }, [id, editGallery, galleryData]);

  return (
    <GalleryContext.Provider value={{ galleryData, setGalleryData }}>
      <Container>
        <h2>{editGallery ? 'Editar Galeria' : 'Adicionar Galeria'}</h2>

        {loading && <LoadingGallery />}

        {!loading && !editGallery && (
          <h4>Salve a galeria para adicionar imagens</h4>
        )}

        {!loading && editGallery && (
          <ImageUploader imageFiles={galleryData ? galleryData.images : []} />
        )}

        {!loading &&
          editGallery &&
          !!galleryData &&
          !!galleryData.images.length && <GalleryImages />}

        {!loading && (
          <GalleryForm formData={galleryData} editGallery={editGallery} />
        )}
      </Container>
    </GalleryContext.Provider>
  );
}

export default Gallery;
