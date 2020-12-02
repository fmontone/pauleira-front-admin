import React, { useState, useEffect, useRef } from 'react';

import DummyGuitar from '~/assets/dummy_guitar.jpg';

import { Container, ButtonAddImage, PreviewCard, PreviewThumb } from './styles';

function ImageUpload() {
  const inputRef = useRef();

  const [loaded, setLoaded] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (previewImages.length < 1) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [previewImages.length]);

  useEffect(() => {
    console.log(previewImages);
  }, [previewImages]);

  function handleChange(e) {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(filesArray);

      setPreviewImages((state) => [...state, ...filesArray]);

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  }

  return (
    <Container>
      {!loaded && (
        <p>
          Sua Galeria foi salva com sucesso, agora é só fazer o upload de uma ou
          mais imagens.
        </p>
      )}

      {previewImages.map((image, index) => (
        <PreviewCard key={String(index)}>
          <PreviewThumb src={image} />
        </PreviewCard>
      ))}

      <ButtonAddImage type="button" onClick={() => inputRef.current.click()}>
        Adicionar Imagem
      </ButtonAddImage>

      <input
        type="file"
        multiple
        accept="image/jpeg, image/png"
        onChange={handleChange}
        hidden
        ref={inputRef}
        className="upload__input"
      />
    </Container>
  );
}

export default ImageUpload;
