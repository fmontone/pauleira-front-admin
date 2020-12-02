import React, { useState } from 'react';

import PageTitle from '~/components/PageTitle';
import ShowcaseForm from './ShowcaseForm';
import ImageUpload from './ImageUpload';

import { Container, Step } from './styles';

function ShowcaseCreate() {
  const [activeStep, setActiveStep] = useState(2);
  const [galleryId, setGalleryId] = useState(21);

  return (
    <>
      <PageTitle>Adicionar Galeria</PageTitle>

      <Container>
        <Step className={activeStep === 1 ? 'active' : ''}>
          <ShowcaseForm
            setActiveStep={setActiveStep}
            setGalleryId={setGalleryId}
            galleryId={galleryId}
          />
        </Step>
        <Step className={`${activeStep === 2 ? 'active' : ''} upload_image`}>
          <ImageUpload />
        </Step>
        <Step className={`${activeStep === 3 ? 'active' : ''}`}>
          Step Publish
        </Step>
      </Container>
    </>
  );
}

export default ShowcaseCreate;
