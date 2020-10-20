import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { MdFullscreen, MdFullscreenExit, MdClose } from 'react-icons/md';

import api from '~/services/api';
import { ImageEditContext, GalleryContext } from '../GalleryContext';
import { useToast } from '~/hooks/ToastContext';

import colors from '~/styles/colors';

import {
  Wrapper,
  Container,
  CloseWrapper,
  ButtonClose,
  ImageWrapper,
  Image,
  ButtonFullScreen,
  InputTitle,
  InputDescription,
  ButtonSubmit,
  ButtonDeleteImage,
} from './styles';

function ImageEdit() {
  const { id } = useParams();
  const { setEditImage, editImageData } = useContext(ImageEditContext);
  const { galleryData } = useContext(GalleryContext);
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const { register, reset, handleSubmit, watch } = useForm();

  const { addToast } = useToast();

  useEffect(() => {
    reset(editImageData);
  }, [editImageData, reset]);

  useEffect(() => {
    if (dataChanged) {
      Object.keys(dataChanged).map((item) => {
        if (dataChanged[item] === editImageData[item]) {
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
  }, [dataChanged, editImageData]);

  function handleChange(e) {
    setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
  }

  async function handleDataSubmit() {
    if (dataChanged && Object.keys(dataChanged).length > 0) {
      try {
        await api.put(
          `/galleries/images/${id}/${editImageData.id}`,
          dataChanged
        );

        window.location.reload();
      } catch (err) {
        if (err)
          addToast({
            type: 'error',
            message: 'Erro ao alterar dados da imagem',
          });
      }
      setDataChanged(null);
      setActiveSubmit(false);
      addToast({
        type: 'success',
        message: 'Imagem salva com sucesso',
      });
    }
  }

  async function handleDeleteImage() {
    const totalImages = galleryData.images.length;
    const deletePosition = Number(editImageData.position);

    try {
      await api.delete(`/galleries/remove-img/${id}/${editImageData.id}`);

      addToast({
        type: 'success',
        message: 'Imagem deletada com sucesso',
      });
    } catch (error) {
      if (error)
        addToast({
          type: 'error',
          message: 'Erro ao deletar imagem',
        });
      return;
    }

    if (deletePosition < totalImages) {
      galleryData.images.forEach(async (image) => {
        if (Number(image.position) > deletePosition) {
          try {
            await api.put(`/galleries/images/${2}/${image.id}`, {
              position: Number(image.position - 1),
            });

            addToast({
              type: 'info',
              message: 'Imagens reposicionadas',
            });
          } catch (error) {
            if (error)
              addToast({
                type: 'error',
                message: 'Erro ao reposicionar imagens',
              });
          }
        }
      });
    }

    if (
      deletePosition === 1 &&
      totalImages === 1 &&
      galleryData.status === 'Public'
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

    window.location.reload();
  }

  return (
    <Wrapper>
      <Container>
        <CloseWrapper>
          <ButtonClose onClick={() => setEditImage(false)}>
            <MdClose color={colors.grey} size="24" />
          </ButtonClose>
        </CloseWrapper>
        <ImageWrapper fullScreen={fullScreen} src={editImageData.url}>
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
          {fullScreen && <Image src={editImageData.url} />}
        </ImageWrapper>

        <form onSubmit={handleSubmit(handleDataSubmit)} onChange={handleChange}>
          <InputTitle name="title" label="Título" ref={register} />
          <InputDescription
            name="description"
            label="Descrição"
            ref={register}
          />
          <ButtonSubmit disabled={!activeSubmit}>Salvar</ButtonSubmit>
        </form>

        <ButtonDeleteImage onClick={handleDeleteImage}>
          Excluir Imagem
        </ButtonDeleteImage>
      </Container>
    </Wrapper>
  );
}

export default ImageEdit;
