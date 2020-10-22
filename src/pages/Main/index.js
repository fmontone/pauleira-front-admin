import React from 'react';

import { Container, ContentWrapper, Button } from './styles';
import PageTitle from '~/components/PageTitle';

import history from '~/services/history';

function Main() {
  return (
    <Container>
      <PageTitle>Dashboard</PageTitle>

      <ContentWrapper>
        <Button onClick={() => history.push('/galleries/new')}>
          Adicionar Galeria
        </Button>
        <Button onClick={() => history.push('/admin-users/new')}>
          Adicionar Usuário Adm
        </Button>
      </ContentWrapper>
    </Container>
  );
}

export default Main;
