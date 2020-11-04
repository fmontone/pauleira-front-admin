import React, { useEffect, useState, createRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

import api from '~/services/api';

import { useAuth } from '~/hooks/AuthContext';
import { useToast } from '~/hooks/ToastContext';
import { useConfirm } from '~/hooks/ConfirmContext';
import { useGallery } from '~/hooks/GalleryContext';

import {
  StyledInput,
  StyledTextArea,
  MainButtonWrapper,
  ButtonSubmit,
  ButtonCancel,
  ToggleWrapper,
  Toggler,
  ButtonDeleteWrapper,
  ButtonDelete,
} from './styles';

function GalleryForm({ editGallery }) {
  const history = useHistory();
  const { id } = useParams();

  const { user } = useAuth();
  const { gallery } = useGallery();

  const { register, reset, handleSubmit, watch, errors } = useForm();

  const [published, setPublished] = useState(null);
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);

  const toggleRef = createRef(null);

  const { addToast } = useToast();
  const { confirm } = useConfirm();

  useEffect(() => {
    reset(gallery);

    if (gallery && !!gallery.status)
      setPublished(gallery.status.toLowerCase() === 'public');
  }, [gallery, reset]);

  useEffect(() => {
    if (!editGallery) {
      setActiveSubmit(true);

      return;
    }

    if (editGallery && dataChanged) {
      Object.keys(dataChanged).map((item) => {
        if (dataChanged[item] === gallery[item]) {
          delete dataChanged[item];
        }

        return null;
      });
    }

    if (dataChanged && Object.keys(dataChanged).length > 0) {
      setActiveSubmit(true);
    } else if (dataChanged && Object.keys(dataChanged).length === 0) {
      setDataChanged(null);
      setActiveSubmit(false);
    }
  }, [dataChanged, gallery, editGallery]);

  function handleCancel() {
    if (dataChanged === null) {
      history.push('/galleries');

      return;
    }

    confirm(
      'Ao cancelar você perderá suas alterações. Você tem certeza que quer cancelar?',
      () => () => history.push('/galleries')
    );
  }

  async function handleDataSubmit(data) {
    if (editGallery && dataChanged && Object.keys(dataChanged).length > 0) {
      api.put(`/galleries/${id}`, dataChanged);

      addToast({
        type: 'success',
        message: 'Galeria atualizada com sucesso',
      });
    } else if (!editGallery) {
      try {
        const response = await api.post('/galleries', {
          ...data,
          user_id: user.id,
        });

        addToast({
          type: 'success',
          message: 'Galeria Criada com Sucesso!',
        });

        history.push(`/galleries/${response.data.id}`);
      } catch (err) {
        addToast({
          type: 'error',
          message: 'Erro ao criar galeria',
        });
      }
    }
  }

  function handleChange(e) {
    if (editGallery) {
      setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
    }
  }

  async function handleUpdateStatus(e) {
    const status = e.target.value === 'true' ? 'Public' : 'Draft';

    try {
      await api.put(`/galleries/${id}`, { status });

      if (status === 'Public') {
        addToast({
          type: 'success',
          message: 'Sua galeria foi publicada com sucesso',
        });
      } else {
        addToast({
          type: 'info',
          message: 'Status alterado para rascunho',
        });
      }
    } catch (err) {
      if (err)
        addToast({
          type: 'error',
          message: 'Erro ao alterar status',
        });
    }
  }

  function handleDeleteGallery() {
    confirm(
      'Você tem certeza que quer excluir permanentemente esta galeria? Não esqueça que você pode mantê-la como rascunho.',
      () => async () => {
        try {
          await api.delete(`/galleries/${id}`);

          addToast({
            type: 'success',
            message: 'Galeria excluída com sucesso!',
          });

          history.push('/galleries');
        } catch (err) {
          addToast({
            type: 'error',
            message: 'Erro ao excluir galeria',
          });
        }
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleDataSubmit)} onChange={handleChange}>
        <StyledInput
          name="title"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.title && errors.title.message}
          autoComplete="off"
        />

        <StyledTextArea
          name="description"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.description && errors.description.message}
          autoComplete="off"
        />

        <MainButtonWrapper>
          <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>

          <ButtonSubmit disabled={!activeSubmit}>
            {editGallery ? 'Salvar' : 'Salvar'}
          </ButtonSubmit>
        </MainButtonWrapper>
      </form>

      {gallery && gallery.images && gallery.images.length >= 1 && (
        <form onChange={(e) => handleUpdateStatus(e)}>
          <ToggleWrapper>
            <Toggler
              name="status"
              toggleValue={published}
              textOn="Galeria Publicada"
              textOff="Publicar Galeria"
              toggleRef={toggleRef}
            />
          </ToggleWrapper>
        </form>
      )}

      <ButtonDeleteWrapper>
        {editGallery && (
          <ButtonDelete onClick={handleDeleteGallery}>
            Excluir Galeria
          </ButtonDelete>
        )}
      </ButtonDeleteWrapper>
    </>
  );
}

GalleryForm.propTypes = {
  editGallery: PropTypes.bool.isRequired,
};

export default GalleryForm;
