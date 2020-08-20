import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';

import api from '~/services/api';

import {
  Container,
  StyledFieldset,
  StyledInput,
  ButtonWrapper,
  ButtonCancel,
  ButtonSubmit,
} from './styles';

function AdminUser() {
  const history = useHistory();
  const { id } = useParams();
  const [editUser, setEditUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/admin-users/${id}`);
      setUserData(data);
    }
    setEditUser(true);
    fetchData();
  }, [id]);

  function handleDataUpdate(e) {
    if (editUser && e.target.value !== userData[e.target.name]) {
      setDataChanged(true);
    } else if (editUser && e.target.value === userData[e.target.name]) {
      setDataChanged(false);
    }
  }

  return (
    <Container>
      <h2>{editUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>

      <Form
        onSubmit={(data) => console.log(data)}
        onChange={(e) => handleDataUpdate(e)}
        initialData={userData}
      >
        <StyledFieldset title="Dados Básicos">
          <StyledInput name="name" label="Nome" isRequired />
          <StyledInput name="email" label="Email" isRequired />
        </StyledFieldset>

        <ButtonWrapper>
          <ButtonCancel onClick={() => history.push('/admin-users')}>
            Cancelar
          </ButtonCancel>
          <ButtonSubmit disabled={!dataChanged}>
            {editUser ? 'Salvar' : 'Adicionar'}
          </ButtonSubmit>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default AdminUser;
