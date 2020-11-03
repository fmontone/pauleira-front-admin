import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { uniqueId } from 'lodash';
import axios from 'axios';

import { MdCloudUpload, MdEdit } from 'react-icons/md';

import api from '~/services/api';
import { useGallery } from '~/hooks/GalleryContext';
import { useToast } from '~/hooks/ToastContext';

import LoadingCircle from '~/components/LoadingCircle';
import ImageEdit from '../ImageEdit';

import colors from '~/styles/colors';

import {
  Wrapper,
  ContainerIdle,
  ContainerReject,
  ContainerLoading,
  EditImageButton,
  ThumbsWrapper,
  ThumbsList,
  Thumbnail,
  ThumbAdd,
} from './styles';

function ImageUploader() {
  const { id } = useParams();

  const { gallery, setGallery } = useGallery();

  const [loading, setLoading] = useState(false);
  const [stopDrag, setStopDrag] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const [editImageId, setEditImageId] = useState({});

  useEffect(() => {
    if (gallery && !!gallery.images && !!gallery.images.length) {
      setStopDrag(true);
    }
  }, [gallery]);

  const { addToast } = useToast();

  function onDrop(files) {
    setLoading(true);

    const uploads = files.map((file) => {
      // FormData to Carry File
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', gallery.title);

      // Position
      const position =
        gallery && !!gallery.images && gallery.images.length > 0
          ? parseInt(uniqueId(), 10) + parseInt(gallery.images.length, 10)
          : parseInt(uniqueId(), 10);

      return api.post(`/galleries/add-img/${id}/${position}`, formData);
    });

    axios
      .all(uploads)
      .then((res) => {
        return res.forEach((item) =>
          setGallery((state) => ({
            ...state,
            images: [...state.images, item.data],
          }))
        );
      })
      .catch(() =>
        addToast({
          type: 'error',
          message: 'Erro ao fazer upload',
      })) /*eslint-disable-line*/
      .then(() => {
        setLoading(false);
      });
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    open,
  } = useDropzone({
    accept: 'image/*',
    maxSize: 5242880,
    onDrop,
    onDropRejected: () => console.log('ERROR UPLOADING FILE'),
    noDrag: stopDrag,
  });

  function handleEditImage(e, imageId) {
    e.stopPropagation();
    setEditImageId(imageId);
    setEditImage(true);
  }

  return (
    <>
      <Wrapper
        {...getRootProps()}
        noDrag
        className={`
        ${
          gallery && !!gallery.images && !isDragActive && !isDragReject
            ? 'dropzone__idle'
            : ''
        }
        ${isDragActive && !isDragReject ? 'dropzone__active' : ''}
        ${isDragReject ? 'dropzone__reject' : ''}

      `}
        src={
          gallery && !!gallery.images && !!gallery.images.length
            ? gallery.images[0].url
            : ''
        }
      >
        <input {...getInputProps()} />

        {loading && (
          <ContainerLoading>
            <LoadingCircle color="fff" />
          </ContainerLoading>
        )}

        {stopDrag && (
          <EditImageButton
            onClick={(e) => handleEditImage(e, gallery.images[0].id)}
          >
            <button type="button">
              <MdEdit color="#fff" />
            </button>
          </EditImageButton>
        )}

        {!!gallery.images && gallery.images.length === 0 && (
          <ContainerIdle>
            <MdCloudUpload
              size={64}
              color={isDragActive ? colors.primary : colors.greyLight}
            />
            <h3>Adicionar Imagem</h3>
            <span>
              Arraste uma imagem ou clique para escolher a partir do seu
              dispositivo.
            </span>
          </ContainerIdle>
        )}

        {!loading && isDragReject && (
          <ContainerReject>
            <h4>Formato não aceito</h4>
          </ContainerReject>
        )}
      </Wrapper>

      <ThumbsWrapper>
        <ThumbsList>
          {gallery &&
            gallery.images &&
            gallery.images.length > 1 &&
            gallery.images.map((image, index) => {
              if (index > 0)
                return (
                  <Thumbnail key={String(image.id)} src={image.url}>
                    <EditImageButton
                      onClick={(e) => handleEditImage(e, image.id)}
                    />
                  </Thumbnail>
                );

              return null;
            })}

          {gallery && gallery.images && !!gallery.images.length && (
            <ThumbAdd>
              <button onClick={open} type="button">
                <MdCloudUpload size={32} color={colors.terceary} />
              </button>
            </ThumbAdd>
          )}
        </ThumbsList>
      </ThumbsWrapper>

      {editImage && (
        <ImageEdit
          closeModal={() => setEditImage(false)}
          imageId={editImageId}
        />
      )}
    </>
  );
}

export default ImageUploader;
