import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  max-width: 100%;
  left: 0;
  bottom: 0;
  padding: 32px;
  overflow: hidden;
  z-index: 200;

  display: flex;
  flex-direction: column-reverse;

  transition: height 0.3 ease;
`;
