import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;

  border: 3px solid lemonchiffon;
`;

export const Step = styled.div`
  max-width: 600px;
  opacity: 0;
  position: absolute;

  transition: opacity 0.4s ease-in;

  &.active {
    opacity: 1;
    position: relative;

    &.upload_image {
      display: flex;
      justify-content: center;
    }
  }
`;
