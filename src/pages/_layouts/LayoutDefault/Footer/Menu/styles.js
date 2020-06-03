import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: ${(props) => (props.menuToggle ? '0' : '100%')};
  left: 0;
  padding: 16px 16px 64px 16px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.blackDeep};
  z-index: -1;

  transition: top 0.1s ease-out;
`;

export const LinkWrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: auto;
  color: ${colors.grey};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;

  opacity: 0;
  transform: translateY(4px);
  transition: all 0.3s ease-out;
  transition-delay: ${(props) => `${props.delay}s`};

  & svg {
    margin-right: 8px;
  }

  & + a {
    margin-top: 32px;
  }

  &:active {
    color: ${colors.primary};
  }

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;
