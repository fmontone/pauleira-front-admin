import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const LabelLike = styled.div`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 12px;
  margin-bottom: 8px;

  background: ${darken(0.04, colors.greyLighter)};
`;

export const InputLike = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 32px;
  margin-bottom: 24px;

  border-radius: 6px;

  background: ${darken(0.04, colors.greyLighter)};
`;

export const TextAreaLike = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  margin-bottom: 16px;

  border-radius: 6px;

  background: ${darken(0.04, colors.greyLighter)};
`;

export const pulse = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(300%);
  }
`;

export const ContentAnimation = styled.div`
  background: linear-gradient(
    to right,
    rgba(15, 15, 15, 0) 0%,
    rgba(219, 219, 219, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000f0f0f', endColorstr='#00ffffff',GradientType=1 );
  display: block;
  height: inherit;
  left: 0;
  position: absolute;
  top: 0;
  width: 70%;
  will-change: transform;

  animation: ${pulse} 2.5s infinite;
`;
