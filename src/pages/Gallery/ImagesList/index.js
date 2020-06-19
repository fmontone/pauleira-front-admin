import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';

import {
  Container,
  ImageItem,
  Thumbnail,
  Filename,
  StatusWrapper,
  ButtonIcon,
  IconDelete,
  IconEdit,
  ModalPreview,
  ModalClick,
  ButtonClosePreview,
  IconClose,
  CardContainer,
  PreviewImage,
  StyledForm,
  StyledInput,
  StyledTextArea,
  ButtonWrapper,
  ButtonCancel,
  ButtonSubmit,
} from './styles';

function ImageList({ files }) {
  const [showPreview, setShowPreview] = useState(false);
  const [previewFile, setPreviewFile] = useState({});
  const [editImage, setEditImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  function handleEdit(file) {
    setEditImage(true);
    previewFile(file);
  }

  function handleCloseEdit() {
    setEditImage(false);
    setPreviewImage(null);
  }

  function handlePreview(filename) {
    setPreviewFile(filename);
    setShowPreview(true);
  }

  function handleClosePreview() {
    setShowPreview(false);
    setPreviewFile({});
  }

  return (
    <>
      <Container>
        {files.map((file) => (
          <ImageItem key={file.id.toString()}>
            <Thumbnail onClick={() => handlePreview(file.url)}>
              <img src={file.url} alt="preview" />
            </Thumbnail>
            <Filename>{file.title}</Filename>

            <StatusWrapper>
              {!!file.url && (
                <>
                  <ButtonIcon>
                    <IconDelete />
                  </ButtonIcon>
                  <ButtonIcon onClick={() => handleEdit(file)}>
                    <IconEdit />
                  </ButtonIcon>
                </>
              )}
            </StatusWrapper>
          </ImageItem>
        ))}
      </Container>

      {editImage && (
        <ModalPreview>
          <ButtonClosePreview onClick={handleCloseEdit}>
            <IconClose />
          </ButtonClosePreview>

          <CardContainer>
            <PreviewImage src={previewFile.url} />
            <StyledForm initialData={previewFile}>
              <StyledInput label="Título" name="title" autoComplete="off" />

              <StyledTextArea
                height="100px"
                label="Descrição"
                name="description"
              />

              <ButtonWrapper>
                <ButtonCancel>Cancelar</ButtonCancel>
                <ButtonSubmit>Salvar</ButtonSubmit>
              </ButtonWrapper>
            </StyledForm>

            <ModalClick onClick={handleClosePreview} />
          </CardContainer>
        </ModalPreview>
      )}

      {showPreview && (
        <ModalPreview>
          <ButtonClosePreview onClick={handleClosePreview}>
            <IconClose />
          </ButtonClosePreview>
          <img src={previewImage} alt="preview" />
          <ModalClick onClick={handleClosePreview} />
        </ModalPreview>
      )}
    </>
  );
}

ImageList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()),
};
ImageList.defaultProps = {
  files: [],
};

export default ImageList;
