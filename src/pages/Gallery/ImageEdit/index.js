import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { MdFullscreen, MdFullscreenExit, MdClose } from 'react-icons/md';

import api from '~/services/api';
import { useToast } from '~/hooks/ToastContext';
import { useGallery } from '~/hooks/GalleryContext';

import colors from '~/styles/colors';

import {
  Wrapper,
  Container,
  CloseWrapper,
  ButtonClose,
  ImageWrapper,
  Image,
  ButtonFullScreen,
  Form,
  InputTitle,
  InputDescription,
  ButtonsWrapper,
  ButtonSubmit,
  ButtonCloseImage,
  ButtonDeleteImage,
} from './styles';

function ImageEdit({ imageId, closeModal }) {
  const { id } = useParams();

  const { gallery, setGallery } = useGallery();

  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [imageData, setImageData] = useState({});
  const [deleted, setDeleted] = useState(false);

  const { register, reset, handleSubmit, watch } = useForm();

  const { addToast } = useToast();

  useEffect(() => {
    if (!deleted) {
      setImageData(gallery.images.find((img) => img.id === imageId));

      reset(imageData);
    }
  }, [deleted, gallery.images, imageData, imageId, reset]);

  useEffect(() => {
    if (dataChanged) {
      Object.keys(dataChanged).map((item) => {
        if (dataChanged[item] === imageData[item]) {
          delete dataChanged[item];
        }
        return null;
      });
    }

    if (dataChanged && Object.keys(dataChanged).length > 0) {
      setActiveSubmit(true);
    } else if (dataChanged && Object.keys(dataChanged).length > 0) {
      setActiveSubmit(false);
    } else if (dataChanged && Object.keys(dataChanged).length === 0) {
      setDataChanged(null);
      setActiveSubmit(false);
    }
  }, [dataChanged, imageData]);

  function handleChange(e) {
    setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
  }

  async function handleDataSubmit() {
    if (dataChanged && Object.keys(dataChanged).length > 0) {
      try {
        await api.put(`/galleries/images/${id}/${imageData.id}`, dataChanged);

        setDataChanged(null);
        setActiveSubmit(false);
        addToast({
          type: 'success',
          message: 'Dados atualizados!',
        });
      } catch (err) {
        if (err)
          addToast({
            type: 'error',
            message: 'Erro ao alterar dados da imagem',
          });
      }
    }
  }

  async function handleDeleteImage() {
    const totalImages = gallery.images.length;
    const deletePosition = Number(imageData.position);

    try {
      await api.delete(`/galleries/remove-img/${id}/${imageData.id}`);

      addToast({
        type: 'success',
        message: 'Imagem deletada com sucesso',
      });

      if (deletePosition < totalImages) {
        gallery.images.forEach(async (image) => {
          if (Number(image.position) > deletePosition) {
            try {
              await api.put(`/galleries/images/${2}/${image.id}`, {
                position: Number(image.position) - 1,
              });
            } catch (error) {
              if (error)
                addToast({
                  type: 'error',
                  message: 'Erro ao reposicionar imagem',
                });
            }
          }
        });

        addToast({
          type: 'info',
          message: 'Imagens Reposicionadas',
        });
      }

      if (
        deletePosition === 1 &&
        totalImages === 1 &&
        gallery.status === 'Public'
      ) {
        try {
          await api.put(`/galleries/${id}`, { status: 'Draft' });

          addToast({
            type: 'info',
            message:
              'A galeria mudou para o status: RASCUNHO porque precisa ter ao menos uma imagem para ser pública',
          });
        } catch (err) {
          if (err)
            addToast({
              type: 'error',
              message: 'Erro ao alterar status',
            });
        }
      }

      setDeleted(true); // Block useEffect from reload state

      const { data } = await api.get(`/galleries/images/${id}`);

      setGallery((state) => ({ ...state, images: data }));

      closeModal();
    } catch (error) {
      if (error)
        addToast({
          type: 'error',
          message: 'Erro ao deletar imagem',
        });
    }
  }

  return (
    <Wrapper>
      <Container>
        <CloseWrapper>
          <ButtonClose onClick={() => closeModal()}>
            <MdClose color={colors.grey} size="24" />
          </ButtonClose>
        </CloseWrapper>
        <ImageWrapper fullScreen={fullScreen} src={imageData.url}>
          <ButtonFullScreen
            onClick={() => setFullScreen(!fullScreen)}
            fullScreen={fullScreen}
          >
            {fullScreen ? (
              <MdFullscreenExit color="#fff" size="24" />
            ) : (
              <MdFullscreen color="#fff" size="24" />
            )}
          </ButtonFullScreen>
          {fullScreen && <Image src={imageData.url} />}
        </ImageWrapper>

        <Form onSubmit={handleSubmit(handleDataSubmit)} onChange={handleChange}>
          <InputTitle name="title" label="Título" ref={register} />
          <InputDescription
            name="description"
            label="Descrição"
            ref={register}
          />

          <ButtonsWrapper>
            <ButtonSubmit disabled={!activeSubmit}>Salvar</ButtonSubmit>

            <ButtonCloseImage onClick={() => closeModal()}>
              Fechar Imagem
            </ButtonCloseImage>

            <ButtonDeleteImage onClick={handleDeleteImage}>
              Excluir Imagem
            </ButtonDeleteImage>
          </ButtonsWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
}

ImageEdit.propTypes = {
  imageId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ImageEdit;
