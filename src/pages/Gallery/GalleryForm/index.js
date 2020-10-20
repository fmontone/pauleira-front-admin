import React, { useEffect, useState, useContext, createRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { GalleryContext } from '../GalleryContext';
import { useToast } from '~/hooks/ToastContext';

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

function GalleryForm({ formData, editGallery }) {
  const history = useHistory();
  const { id } = useParams();
  const { galleryData, setGalleryData } = useContext(GalleryContext);

  const { user_id } = useSelector((state) => state.auth);

  const { register, reset, handleSubmit, watch, errors } = useForm();

  const [published, setPublished] = useState(null);
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);

  const toggleRef = createRef(null);

  const { addToast } = useToast();

  useEffect(() => {
    reset(formData);

    if (formData) setPublished(formData.status.toLowerCase() === 'public');
  }, [formData, reset]);

  useEffect(() => {
    if (!editGallery) {
      setActiveSubmit(true);

      return;
    }

    if (editGallery && dataChanged) {
      Object.keys(dataChanged).map((item) => {
        if (dataChanged[item] === formData[item]) {
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
  }, [dataChanged, formData, editGallery]);

  function handleCancel() {
    if (window.confirm('Ao cancelar você perderá suas alterações. Você tem certeza que quer cancelar?')) { /* eslint-disable-line */
      history.push('/galleries');
    }
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
        const response = await api.post('/galleries', { ...data, user_id });

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

      setGalleryData({ ...galleryData, status });

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

  return (
    <>
      <form onSubmit={handleSubmit(handleDataSubmit)} onChange={handleChange}>
        <StyledInput
          name="title"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.title && errors.title.message}
        />

        <StyledTextArea
          name="description"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.description && errors.description.message}
        />

        <MainButtonWrapper>
          <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>

          <ButtonSubmit disabled={!activeSubmit}>
            {editGallery ? 'Salvar' : 'Salvar'}
          </ButtonSubmit>
        </MainButtonWrapper>
      </form>

      {formData && (
        <form onChange={(e) => handleUpdateStatus(e)}>
          <ToggleWrapper>
            <Toggler
              name="status"
              toggleValue={published}
              textOn="Galeria Publicada"
              textOff="Publicar Galeria"
              active={galleryData && !!galleryData.images.length}
              toggleRef={toggleRef}
            />
          </ToggleWrapper>
        </form>
      )}

      <ButtonDeleteWrapper>
        {editGallery && <ButtonDelete>Excluir Galeria</ButtonDelete>}
      </ButtonDeleteWrapper>
    </>
  );
}

GalleryForm.propTypes = {
  formData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  editGallery: PropTypes.bool.isRequired,
};

GalleryForm.defaultProps = {
  formData: null,
};

export default GalleryForm;
