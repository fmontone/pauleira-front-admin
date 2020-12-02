import React from 'react';

import { Container } from './styles';

function Slider({ ...rest }) {
  return (
    <Container>
      <input type="range" {...rest} />
    </Container>
  );
}

export default Slider;
