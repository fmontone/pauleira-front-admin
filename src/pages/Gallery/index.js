import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import colors from '~/styles/colors';
import ImageList from './ImagesList';

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

const STATUS_OPTIONS = ['rascunho', 'publicado'];

function Gallery() {
  const history = useHistory();

  const { id } = useParams();
  const [galleryData, setGalleryData] = useState();
  const [loading, setLoading] = useState(false); /* eslint-disable-line */
  const [editGallery, setEditGallery] = useState(false);
  const [allowAddImages, setAllowAddImages] = useState(false); /* eslint-disable-line */
  const [statusSelected, setStatusSelected] = useState(STATUS_OPTIONS[0]);

  useEffect(() => {
    if (id) {
      setEditGallery(true);
      setGalleryData([]);
    }
  }, [id]);

  useEffect(() => {
    if (galleryData) {
      setStatusSelected(galleryData.status);
      setAllowAddImages(true);
    }
  }, [galleryData]);

  function handleSubmitGallery(data) {
    console.log(data);
  }

  return (
    <Container>
      <h2>{editGallery ? 'Editar Galeria' : 'Adicionar Galeria'}</h2>
      <form
        onSubmit={(data) => handleSubmitGallery(data)}
        initialData={galleryData}
      >
        <StyledInput
          name="title"
          label="Título"
          autoComplete="off"
          isRequired
        />

        <StyledTextArea name="description" label="Descrição" isRequired />

        <StyledFieldset title="Status">
          <StyledRadio
            name="status"
            options={STATUS_OPTIONS}
            selected={statusSelected}
            directionRow
          />
        </StyledFieldset>

        <ButtonWrapper>
          <ButtonSave type="submit" color={colors.statusSuccess}>
            {editGallery ? 'Salvar Alterações' : 'Criar Galeria'}
          </ButtonSave>
          <ButtonCancel
            onClick={() => history.push('/galleries')}
            color={colors.statusSuccess}
          >
            Cancelar
          </ButtonCancel>
        </ButtonWrapper>
      </form>

      {editGallery && !!galleryData.images.length && (
        <StyledFieldset title="Imagens">
          <ImageList files={galleryData.images} />
        </StyledFieldset>
      )}

      {allowAddImages && (
        <StyledFieldset title="Adicionar Imagens">
          <StyledImageUploader />
        </StyledFieldset>
      )}
    </Container>
  );
}

export default Gallery;
