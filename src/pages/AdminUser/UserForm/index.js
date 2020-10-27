import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import generator from 'generate-password';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { useToast } from '~/hooks/ToastContext';
import { useConfirm } from '~/hooks/ConfirmContext';

import LoadingCircle from '~/components/LoadingCircle';

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

  const { id } = useParams();

  const { register, reset, handleSubmit, watch, errors } = useForm();
  const [dataChanged, setDataChanged] = useState(null);
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const { confirm } = useConfirm();

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
    setLoading(true);
    if (editUser && dataChanged && Object.keys(dataChanged).length > 0) {
      try {
        await api.put(`/admin-users/${id}`, dataChanged);

        addToast({
          type: 'success',
          message: 'Dados atualizados com sucesso!',
        });
      } catch (err) {
        if (err)
          addToast({
            type: 'error',
            message:
              'Erro ao atualiza usuário. Verifique os dados e tente novamente!',
          });
      }
    } else if (!editUser) {
      try {
        await api.post('/admin-users', { ...data, password });

        await api.put('/admin-users/activate/', { email: data.email });

        addToast({
          type: 'success',
          message: 'Usuário adicionado com sucesso!',
        });

        history.goBack();
      } catch (err) {
        addToast({
          type: 'error',
          message: 'Erro ao adicionar usuário.',
        });
      }
    }
    setLoading(false);
  }

  function handleChange(e) {
    setDataChanged({ ...dataChanged, [e.target.name]: watch(e.target.name) });
  }

  async function handleDeleteUser() {
    confirm(
      'Você tem certeza que deseja deletar este usuário?',
      () => async () => {
        try {
          await api.delete(`/admin-users/${formData.id}`);

          addToast({
            type: 'success',
            message: 'Usuário Deletado com sucesso!',
          });

          history.push('/admin-users');
        } catch (err) {
          addToast({
            type: 'error',
            message: 'Erro ao deletar usuário',
          });
        }
      }
    );
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
          autoComplete="off"
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
          autoComplete="off"
        />
      </StyledFieldset>

      <ButtonWrapper>
        <ButtonCancel onClick={() => history.push('/admin-users')}>
          Cancelar
        </ButtonCancel>
        {editUser && (
          <ButtonDelete onClick={handleDeleteUser}>
            Deletar Usuário
          </ButtonDelete>
        )}
        <ButtonSubmit disabled={!activeSubmit}>
          {editUser ? 'Salvar' : 'Adicionar'}
          {loading && <LoadingCircle color="#fff" />}
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
