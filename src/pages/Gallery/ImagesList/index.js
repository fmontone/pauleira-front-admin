import React, { useState } from 'react';
// import PropTypes from 'prop-types';
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
} from './styles';

function ImageList({ files }) {
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
                <ButtonIcon>
                  <IconEdit />
                </ButtonIcon>
              </>
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

// ImageList.propTypes = {
//   files: PropTypes.arrayOf([PropTypes.shape()]),
// };
// ImageList.defaultProps = {
//   files: [],
// };

export default ImageList;
