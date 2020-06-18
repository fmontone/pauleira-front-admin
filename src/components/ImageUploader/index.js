import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uniqueId } from 'lodash';

import { Container, IconUpload, TextIdle, TextActive } from './styles';

import ImageList from './ImageList';

function ImageUploader() {
  const [imageFiles, setImageFiles] = useState([]);

  function processUpload(uploadedFile) {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    console.log('uploadedFile', uploadedFile);
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDropAccepted: (files) => {
      const uploadedFiles = files.map((file) => ({
        file,
        id_key: uniqueId(),
        name: file.name,
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: null,
      }));

      setImageFiles(imageFiles.concat(uploadedFiles));

      uploadedFiles.forEach((item) => processUpload(item));
    },
  });

  function renderDragMessage() {
    if (!isDragActive) {
      return (
        <>
          <IconUpload />

          <TextIdle>
            Arraste suas imagens ou <span>clique</span> para carregá-las do seu
            dispositivo.
          </TextIdle>
        </>
      );
    }

    if (isDragActive && !isDragReject) {
      return <TextActive>Pode soltar os arquivos aqui!</TextActive>;
    }

    if (isDragReject && isDragReject) {
      return (
        <TextActive>
          Formato Inválido. Este campo aceita apenas imagens
        </TextActive>
      );
    }

    return undefined;
  }

  return (
    <>
      <Container
        {...getRootProps()}
        active={isDragActive}
        reject={isDragReject}
      >
        <input {...getInputProps()} />

        {renderDragMessage(isDragActive, isDragReject)}
      </Container>

      {!!imageFiles.length && <ImageList files={imageFiles} />}
    </>
  );
}

export default ImageUploader;
