import React from 'react';

import colors from '~/styles/colors';
import { Container, ButtonAdd } from './styles';

function Galleries() {
  return (
    <Container>
      <ButtonAdd color={colors.statusInfo}>Adicionar Galeria</ButtonAdd>
    </Container>
  );
}

export default Galleries;
