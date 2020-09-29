import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { MdFullscreen, MdFullscreenExit, MdClose } from 'react-icons/md';

import api from '~/services/api';
import { ImageEditContext, GalleryContext } from '../GalleryContext';

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
        if (err) alert('ERRO AO ATUALIZAR DADOS DA IMAGEM'); /*eslint-disable-line */
      }
      setDataChanged(null);
      setActiveSubmit(false);
      alert('Imagem Salva com Sucesso'); /*eslint-disable-line */
    }
  }

  async function handleDeleteImage() {
    const totalImages = galleryData.images.length;
    const deletePosition = Number(editImageData.position);

    try {
      await api.delete(`/galleries/remove-img/${id}/${editImageData.id}`);

      alert('IMAGEM DELETADA COM SUCESSO'); /*eslint-disable-line */

    } catch (error) {
      if (error) alert('ERRO AO DELETAR IMAGEM'); /*eslint-disable-line */
      return;
    }

    if (deletePosition < totalImages) {
      galleryData.images.forEach(async (image) => {
        if (Number(image.position) > deletePosition) {
          try {
            await api.put(`/galleries/images/${2}/${image.id}`, {
              position: Number(image.position - 1),
            });

            alert('IMAGENS REPOSICIONADAS!'); /*eslint-disable-line */
          } catch (error) {
            if (error) alert('ERRO REPOSICIONANDO IMAGENS'); /*eslint-disable-line */
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

        alert('A galeria mudou para o status: RASCUNHO porque precisa ter ao menos uma imagem para ser pública'); /*eslint-disable-line*/
      } catch (err) {
        if (err) alert('Erro ao alterar status'); /*eslint-disable-line*/
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
