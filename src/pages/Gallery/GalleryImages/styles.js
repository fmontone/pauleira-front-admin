import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 80px;
  margin-bottom: 32px;
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-bottom: 16px;

  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  cursor: pointer;

  button {
    opacity: 0.4;
  }

  :hover,
  :active {
    button {
      opacity: 1;
    }
  }
`;

export const Thumbnails = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;

  overflow: hidden;

  background-color: #00000010;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100px;
  padding-bottom: 56.25%;

  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  border: 1px solid salmon;
  cursor: pointer;

  button {
    opacity: 0.4;
  }

  :hover,
  :active {
    button {
      opacity: 1;
    }
  }
`;

export const ButtonEditImage = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 4px;
  top: 4px;

  border-radius: 4px;

  background: ${colors.statusInfo};

  transition: opacity 0.2s ease;

  :active {
    transform: translate(1px, 1px);
  }
`;
