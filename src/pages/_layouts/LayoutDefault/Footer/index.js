import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MdMenu,
  MdClose,
  MdPerson,
  MdPhotoLibrary,
  MdExitToApp,
} from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import Menu from './Menu';

import { Wrapper, Container, ButtonMenu, StyledLink } from './styles';

import colors from '~/styles/colors';

function Footer() {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Wrapper>
      <Container>
        <ButtonMenu onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? (
            <MdClose color={colors.grey} size="24" />
          ) : (
            <MdMenu color={colors.grey} size="24" />
          )}
        </ButtonMenu>

        <StyledLink
          to="/admin-users"
          className={menuToggle ? 'animate' : ''}
          delay={0.05}
        >
          <MdPerson color={colors.grey} size="24" />
        </StyledLink>
        <StyledLink
          to="/galleries"
          className={menuToggle ? 'animate' : ''}
          delay={0.075}
        >
          <MdPhotoLibrary color={colors.grey} size="24" />
        </StyledLink>
        <StyledLink
          to="/"
          className={menuToggle ? 'animate' : ''}
          delay={0.15}
          onClick={() => dispatch(signOut())}
        >
          <MdExitToApp color={colors.grey} size="24" />
        </StyledLink>

        <Menu menuToggle={menuToggle} onClick={() => setMenuToggle(false)} />
      </Container>
    </Wrapper>
  );
}

export default Footer;
