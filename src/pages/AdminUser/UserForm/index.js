import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import generator from 'generate-password';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  StyledFieldset,
  StyledInput,
  ButtonWrapper,
  ButtonCancel,
  ButtonDelete,
  ButtonSubmit,
} from './styles';

function UserForm({ formData, editUser }) {
  const history = useHistory();
  const password = generator.generate({
    length: 6,
    numbers: 2,
  });

  const { register, reset, handleSubmit, watch, errors } = useForm();
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  useEffect(() => {
    if (editUser && dataChanged) {
      Object.keys(dataChanged).map((item) => {
        if (dataChanged[item] === formData[item]) {
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
  }, [dataChanged, formData, editUser]);

  async function handleDataSubmit(data) {
    if (editUser && dataChanged && Object.keys(dataChanged).length > 0) {
      console.log('PUT: ', dataChanged);  /* eslint-disable-line */
    } else if (!editUser) {
      try {
        await api.post('/admin-users', { ...data, password });

        await api.put('/admin-users/activate/', { email: data.email });

        history.push('/admin-users');
      } catch (err) {
        alert('ERRO AO ADICIONAR USUÁRIO'); /* eslint-disable-line */
      }

      console.log('POST: ', {...data, password}); /* eslint-disable-line */
    }
  }

  function handleChange(e) {
    setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
  }

  async function handleDeteleUser() {
    try {
      await api.delete(`/admin-users/${formData.id}`);

      history.push('/admin-users');
    } catch (err) {
      alert('ERRO AO DELETAR USUÁRIO'); /* eslint-disable-line */
    }
  }

  function handleDeleteConfirm() {
    if (window.confirm('Você tem certeza que deseja deletar o usuário?')) { /* eslint-disable-line */
      handleDeteleUser();
    }
  }

  return (
    <form onSubmit={handleSubmit(handleDataSubmit)} onChange={handleChange}>
      <StyledFieldset title="Dados Básicos">
        <StyledInput
          name="name"
          label="Nome"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.name && errors.name.message}
        />
        <StyledInput
          name="email"
          label="Email"
          ref={register({
            required: 'Campo Obrigatório',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Este não é um email válido',
            },
          })}
          errorText={errors.email && errors.email.message}
        />
      </StyledFieldset>

      <ButtonWrapper>
        <ButtonCancel onClick={() => history.push('/admin-users')}>
          Cancelar
        </ButtonCancel>
        {editUser && (
          <ButtonDelete onClick={handleDeleteConfirm}>
            Deletar Usuário
          </ButtonDelete>
        )}
        <ButtonSubmit disabled={!activeSubmit}>
          {editUser ? 'Salvar' : 'Adicionar'}
        </ButtonSubmit>
      </ButtonWrapper>
    </form>
  );
}

UserForm.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object]),
  editUser: PropTypes.bool.isRequired,
};

UserForm.defaultProps = {
  formData: null,
};

export default UserForm;
