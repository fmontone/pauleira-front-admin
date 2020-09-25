import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';

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

  const { user_id } = useSelector((state) => state.auth);

  const { register, reset, handleSubmit, watch, errors } = useForm();

  const [published, setPublished] = useState(null);
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);

  useEffect(() => {
    reset(formData);

    if (formData) setPublished(formData.status.toLowerCase() === 'public');
  }, [formData, reset, published]);

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

      alert('GALERIA ATUALIZADA COM SUCESSO'); /* eslint-disable-line */
    } else if (!editGallery) {
      try {
        const response = await api.post('/galleries', { ...data, user_id });

        history.push(`/galleries/${response.data.id}`);
      } catch (err) {
        alert('ERRO AO CRIAR GALERIA'); /* eslint-disable-line */
      }
    }
  }

  function handleChange(e) {
    if (editGallery) {
      setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
    }
  }

  async function handleUpdateStatus() {
    if (formData.images.length === 0) {
      alert( /* eslint-disable-line */
        'VOCÊ PRECISA ADICIONAR PELO MENOS UMA IMAGEM PARA PODER PUBLICAR UMA GALERIA'
      );
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

      {formData && 2 + 2 === 5 && (
        <form onChange={(e) => handleUpdateStatus(e)}>
          <ToggleWrapper>
            <Toggler
              name="status"
              toggleValue={published}
              textOn="Publicar Galeria"
              textOff="Galeria Publicada"
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
