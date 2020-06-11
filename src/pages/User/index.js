import React from 'react';
import { Form } from '@unform/web';

import { Container, StyledFieldset, StyledInput, StyledRadio } from './styles';

function User() {
  return (
    <Container>
      <h2>Adicionar Usuário</h2>

      <Form>
        <StyledFieldset title="Dados Básicos">
          <StyledInput name="name" label="Nome" isRequired />
          <StyledInput name="a_k_a" label="Apelido / Nome da Oficina" />
          <StyledInput name="email" label="Email" isRequired />
        </StyledFieldset>

        <StyledFieldset title="Tipo de Perfil">
          <StyledRadio
            name="profile_type"
            options={['Aluno', 'Instrutor', 'Administrador']}
          />
        </StyledFieldset>
      </Form>
    </Container>
  );
}

export default User;
