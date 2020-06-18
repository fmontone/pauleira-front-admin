import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '~/components/Form';
import colors from '~/styles/colors';

import {
  Container,
  StyledInput,
  StyledTextArea,
  StyledFieldset,
  StyledRadio,
  ButtonWrapper,
  ButtonSave,
  ButtonCancel,
  StyledImageUploader,
} from './styles';

function Gallery() {
  const history = useHistory();

  const [loading, setLoading] = useState(false); /* eslint-disable-line */
  const [hasImages, setHasImages] = useState(false); /* eslint-disable-line */
  const [allowAddImages, setAllowAddImages] = useState(true); /* eslint-disable-line */

  return (
    <Container>
      <h2>Adicionar Galeria</h2>
      <Form onSubmit={(data) => console.log(data)}>
        <StyledInput
          name="title"
          label="Título"
          autoComplete="off"
          isRequired
        />

        <StyledTextArea name="description" label="Descrição" isRequired />

        <StyledFieldset title="Status">
          <StyledRadio
            name="profile_type"
            options={['Rascunho', 'Publicado']}
            selected="Rascunho"
            directionRow
          />
        </StyledFieldset>

        {hasImages && (
          <StyledFieldset title="Imagens">
            <h3>Imagens</h3>
          </StyledFieldset>
        )}

        {allowAddImages && (
          <StyledFieldset title="Adicionar Imagens">
            <StyledImageUploader />
          </StyledFieldset>
        )}

        <ButtonWrapper>
          <ButtonSave type="submit" color={colors.statusSuccess}>
            Salvar Para Adicionar Imagens
          </ButtonSave>
          <ButtonCancel
            onClick={() => history.push('/galleries')}
            color={colors.statusSuccess}
          >
            Cancelar
          </ButtonCancel>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default Gallery;
