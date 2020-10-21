import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {transform:rotate(0deg);}
    to {transform:rotate(359deg);}
`;

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${spin} 0.5s ease infinite;
  }
`;
