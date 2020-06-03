import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled.footer`
  position: fixed;
  width: 100%;
  height: 64px;
  bottom: 0;
  background-color: ${colors.white};
`;

export const Container = styled(ContainerCustom)`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonMenu = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

export const StyledLink = styled(Link)`
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease;
  transition-delay: ${(props) => `${props.delay}s`};

  &.animate {
    opacity: 0;
  }

  :active {
    transform: translate(1px, 1px);
  }
`;
