import React from 'react';
import PropTypes from 'prop-types';

import {
  MdDashboard,
  MdPerson,
  MdPhotoLibrary,
  MdLocalLibrary,
  MdSettings,
} from 'react-icons/md';

import { Container, LinkWrapper, StyledLink } from './styles';

function Menu({ menuToggle, onClick }) {
  return (
    <Container menuToggle={menuToggle}>
      <LinkWrapper>
        <StyledLink
          to="/dashboard"
          className={menuToggle ? 'animate' : ''}
          delay={0.2}
          onClick={onClick}
        >
          <MdDashboard />
          Dashboard
        </StyledLink>
        <StyledLink
          to="/users"
          className={menuToggle ? 'animate' : ''}
          delay={0.15}
          onClick={onClick}
        >
          <MdPerson />
          Usuários
        </StyledLink>
        <StyledLink
          to="/galleries"
          className={menuToggle ? 'animate' : ''}
          delay={0.1}
          onClick={onClick}
        >
          <MdPhotoLibrary />
          Galerias
        </StyledLink>
        <StyledLink
          to="/courses"
          className={menuToggle ? 'animate' : ''}
          delay={0.05}
          onClick={onClick}
        >
          <MdLocalLibrary />
          Cursos
        </StyledLink>
        <StyledLink
          to="/settings"
          className={menuToggle ? 'animate' : ''}
          delay={0}
          onClick={onClick}
        >
          <MdSettings />
          Configurações
        </StyledLink>
      </LinkWrapper>
    </Container>
  );
}

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Menu;
