import React from 'react';

import colors from '~/styles/colors';
import { Container, ButtonAdd } from './styles';

function Courses() {
  return (
    <Container>
      <ButtonAdd color={colors.statusInfo}>Adicionar Curso</ButtonAdd>
    </Container>
  );
}

export default Courses;
