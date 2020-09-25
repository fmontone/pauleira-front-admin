import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { uniqueId } from 'lodash';
import axios from 'axios';

import {
  Wrapper,
  ContainerIdle,
  ContainerReject,
  ContainerLoading,
  ContainerDrop,
  ButtonUpload,
} from './styles';

import LoadingCircle from '~/components/LoadingCircle';

import api from '~/services/api';
import { GalleryContext } from '../GalleryContext';

function ImageUploader() {
  const { id } = useParams();
  const { galleryData } = useContext(GalleryContext);

  const [loading, setLoading] = useState(false);

  function onDrop(files) {
    setLoading(true);

    const uploads = files.map((file) => {
      // FormData to Carry File
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', galleryData.title);

      // Position
      const position =
        galleryData && galleryData.images && galleryData.images.length > 0
          ? parseInt(uniqueId(), 10) + parseInt(galleryData.images.length, 10)
          : parseInt(uniqueId(), 10);

      return api.post(`/galleries/add-img/${id}/${position}`, formData);
    });

    axios
      .all(uploads)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => alert('EEEERRROOOO', err)) /*eslint-disable-line*/
      .then(() => {
        setLoading(false);
      });
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    onDropRejected: () => console.log('ERROR UPLOADING FILE'),
  });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />

      {loading && (
        <ContainerLoading>
          <LoadingCircle color="fff" />
        </ContainerLoading>
      )}

      {!loading && !isDragActive && !isDragReject && (
        <ContainerIdle>
          <ButtonUpload>Adicionar Imagens</ButtonUpload>
          <h5>Você pode arrastar [jpg, gif, png] aqui.</h5>
        </ContainerIdle>
      )}

      {isDragActive && !isDragReject && (
        <ContainerDrop>
          <h4>Pode descarregar chefe!</h4>
        </ContainerDrop>
      )}

      {!loading && isDragReject && (
        <ContainerReject>
          <h4>Formato não aceito</h4>
        </ContainerReject>
      )}
    </Wrapper>
  );
}

export default ImageUploader;
