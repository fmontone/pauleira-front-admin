import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';

import dummyData from '../Users/dummy_users.json';

import {
  Container,
  StyledFieldset,
  StyledInput,
  StyledRadio,
  ButtonWrapper,
  ButtonCancel,
  ButtonSubmit,
} from './styles';

function User() {
  const history = useHistory();
  const { id } = useParams();
  const [editUser, setEditUser] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (id) {
      setEditUser(true);
      setUserData(dummyData.find((item) => item.id.toString() === id));
    }
  }, [id]);

  return (
    <Container>
      <h2>{editUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>

      <Form onSubmit={(data) => console.log(data)} initialData={userData}>
        <StyledFieldset title="Dados Básicos">
          <StyledInput name="name" label="Nome" isRequired />
          <StyledInput name="a_k_a" label="Apelido / Nome da Oficina" />
          <StyledInput name="email" label="Email" isRequired />
        </StyledFieldset>

        <StyledFieldset title="Tipo de Perfil">
          <StyledRadio
            name="profile_type"
            options={['aluno', 'instrutor', 'administrador']}
          />
        </StyledFieldset>

        <ButtonWrapper>
          <ButtonCancel onClick={() => history.push('/users')}>
            Cancelar
          </ButtonCancel>
          <ButtonSubmit>{editUser ? 'Salvar' : 'Adicionar'}</ButtonSubmit>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default User;
