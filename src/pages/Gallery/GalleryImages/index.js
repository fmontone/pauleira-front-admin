import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

import { ImageEditContext } from '../GalleryContext';
import api from '~/services/api';

import ImageEdit from '../ImageEdit';

import {
  Container,
  MainImage,
  Thumbnails,
  Thumbnail,
  ButtonEditImage,
} from './styles';

function GalleryImages() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [editImage, setEditImage] = useState(false);
  const [editImageData, setEditImageData] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      const { data } = await api.get(`/galleries/images/${id}`);

      setImages(data.sort((a, b) => Number(a.position) < Number(b.position)));
    }

    if (id) fetchImages();
  }, [id, images.length]);

  function returnIndex(position) {
    return images.findIndex((img) => img.position === String(position));
  }

  function handleEditImage(position) {
    setEditImageData(images[returnIndex(position)]);
    setEditImage(true);
  }

  return (
    <ImageEditContext.Provider
      value={{ editImage, setEditImage, editImageData }}
    >
      <Container>
        {images.length > 0 && (
          <MainImage
            src={images[returnIndex(1)].url}
            onClick={() => handleEditImage(1)}
          >
            <ButtonEditImage>
              <MdEdit color="#fff" />
            </ButtonEditImage>
          </MainImage>
        )}

        {images.length >= 1 && (
          <Thumbnails>
            {images.length > 1 &&
              images.map((img) => {
                if (Number(img.position) !== 1) {
                  return (
                    <Thumbnail
                      key={String(img.position)}
                      src={img.url}
                      onClick={() => handleEditImage(img.position)}
                    >
                      <ButtonEditImage>
                        <MdEdit color="#fff" />
                      </ButtonEditImage>
                    </Thumbnail>
                  );
                }

                return null;
              })}
          </Thumbnails>
        )}
      </Container>
      {editImage && <ImageEdit />}
    </ImageEditContext.Provider>
  );
}

export default GalleryImages;
