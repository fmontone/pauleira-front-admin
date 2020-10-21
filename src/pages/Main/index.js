import React from 'react';

import { Container, ContentWrapper, Button } from './styles';
import PageTitle from '~/components/PageTitle';

function Main() {
  return (
    <Container>
      <PageTitle>Admin Pauleira</PageTitle>

      <ContentWrapper>
        <Button>Adicionar Galeria</Button>
        <Button>Adicionar Usuário Adm</Button>
      </ContentWrapper>
    </Container>
  );
}

export default Main;
