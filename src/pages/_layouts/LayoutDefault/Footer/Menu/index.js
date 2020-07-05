import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  MdDashboard,
  MdPerson,
  MdPhotoLibrary,
  MdExitToApp,
} from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import { Container, LinkWrapper, StyledLink } from './styles';

function Menu({ menuToggle, onClick }) {
  const dispatch = useDispatch();

  function handleLogout() {
    onClick();
    dispatch(signOut());
  }

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
          to="/"
          className={menuToggle ? 'animate' : ''}
          delay={0}
          onClick={handleLogout}
        >
          <MdExitToApp />
          Sair
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
