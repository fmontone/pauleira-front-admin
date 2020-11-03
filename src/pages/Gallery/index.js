import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GalleryProvider, useGallery } from '~/hooks/GalleryContext';

import { Container, ContentWrapper, BlockImages, BlockForm } from './styles';

import api from '~/services/api';

import GalleryForm from './GalleryForm';
import LoadingGalleryForm from '~/components/LoadingGalleryForm';
import ImageUploader from './ImageUploader';
import PageTitle from '~/components/PageTitle';

function GalleryConsumer() {
  const { id } = useParams();

  const { gallery, setGallery } = useGallery();

  const [loading, setLoading] = useState(true);
  const [editGallery, setEditGallery] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      const { data } = await api.get(`/galleries/${id}`);

      setGallery(data);
    }
    setLoading(true);
    if (id) {
      fetchGallery();
      setEditGallery(true);
    }
    setLoading(false);
  }, [id, editGallery, setGallery]);

  return (
    <Container>
      <PageTitle>{editGallery ? 'Editar Galeria' : 'Criar Galeria'}</PageTitle>

      <ContentWrapper>
        {editGallery && (
          <BlockImages>
            <ImageUploader gallery={gallery} />
          </BlockImages>
        )}

        <BlockForm>
          {loading && <LoadingGalleryForm />}

          {!loading && (
            <GalleryForm
              editGallery={editGallery}
              canPublish={gallery && gallery.images && !!gallery.images.length}
            />
          )}
        </BlockForm>
      </ContentWrapper>
    </Container>
  );
}

function Gallery() {
  return (
    <GalleryProvider>
      <GalleryConsumer />
    </GalleryProvider>
  );
}

export default Gallery;
