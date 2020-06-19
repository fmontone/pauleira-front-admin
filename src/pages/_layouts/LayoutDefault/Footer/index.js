import React, { useState } from 'react';

import {
  MdMenu,
  MdClose,
  MdPerson,
  MdPhotoLibrary,
  MdExitToApp,
} from 'react-icons/md';
import Menu from './Menu';

import { Wrapper, Container, ButtonMenu, StyledLink } from './styles';

import colors from '~/styles/colors';

function Footer() {
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
          to="/users"
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
        <StyledLink to="/" className={menuToggle ? 'animate' : ''} delay={0.15}>
          <MdExitToApp color={colors.grey} size="24" />
        </StyledLink>

        <Menu menuToggle={menuToggle} onClick={() => setMenuToggle(false)} />
      </Container>
    </Wrapper>
  );
}

export default Footer;
