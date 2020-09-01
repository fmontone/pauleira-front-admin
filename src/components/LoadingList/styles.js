import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  width: 100%;
  padding: none;
  list-style: none;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  height: 64px;
  margin-bottom: 16px;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);

  overflow: hidden;
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
