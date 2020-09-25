import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 80px;
  margin-bottom: 32px;

  .swiper-container {
    width: 100%;
    height: 60px;
  }

  .swiper-slide {
    flex-shrink: unset !important;
    width: unset !important;
    height: unset !important;
    position: unset !important;
  }
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-bottom: 16px;

  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  border-radius: 6px;

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

export const Thumbnail = styled.div`
  position: relative;
  width: 100px;
  padding-bottom: 56.25%;

  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  border-radius: 6px;

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
