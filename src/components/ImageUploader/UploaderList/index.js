import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';

import {
  Container,
  ImageItem,
  Thumbnail,
  Filename,
  CircularProgress,
  StatusWrapper,
  ButtonIcon,
  IconDelete,
  IconError,
  IconSuccess,
  ModalPreview,
  ModalClick,
  ButtonClosePreview,
  IconClose,
} from './styles';

function UploaderList({ files }) {
  const [showPreview, setShowPreview] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  function handlePreview(filename) {
    setPreviewFile(filename);
    setShowPreview(true);
  }

  function handleClosePreview() {
    setShowPreview(false);
    setPreviewFile(null);
  }

  return (
    <Container>
      {files.map((file) => (
        <ImageItem key={file.id_key}>
          <Thumbnail onClick={() => handlePreview(file.preview)}>
            <img src={file.preview} alt="preview" />
          </Thumbnail>
          <Filename>{file.name}</Filename>

          <StatusWrapper>
            {!file.uploaded && !file.error && (
              <CircularProgress value={file.progress} />
            )}

            {file.uploaded && <IconSuccess />}
            {file.error && <IconError />}

            {!!file.url && (
              <ButtonIcon>
                <IconDelete />
              </ButtonIcon>
            )}
          </StatusWrapper>
        </ImageItem>
      ))}

      {showPreview && (
        <ModalPreview>
          <ButtonClosePreview onClick={handleClosePreview}>
            <IconClose />
          </ButtonClosePreview>
          <img src={previewFile} alt="preview" />
          <ModalClick onClick={handleClosePreview} />
        </ModalPreview>
      )}
    </Container>
  );
}

// UploaderList.propTypes = {
//   files: PropTypes.arrayOf([PropTypes.shape()]),
// };
// UploaderList.defaultProps = {
//   files: [],
// };

export default UploaderList;
