import React from 'react';

import {
  Container,
  LabelLike,
  InputLike,
  TextAreaLike,
  ContentAnimation,
} from './styles';

function LoadingGallery() {
  return (
    <Container>
      <LabelLike>
        <ContentAnimation />
      </LabelLike>
      <InputLike>
        <ContentAnimation />
      </InputLike>
      <LabelLike>
        <ContentAnimation />
      </LabelLike>
      <TextAreaLike>
        <ContentAnimation />
      </TextAreaLike>
    </Container>
  );
}

export default LoadingGallery;
