import React from 'react';

import {
  MdMenu,
  MdPerson,
  MdPhotoLibrary,
  MdLocalLibrary,
  MdSettings,
} from 'react-icons/md';
import { Wrapper, Container, ButtonMenu, StyledLink } from './styles';

import colors from '~/styles/colors';

function Footer() {
  return (
    <Wrapper>
      <Container>
        <ButtonMenu>
          <MdMenu color={colors.grey} size="24" />
        </ButtonMenu>
        <StyledLink to="/users">
          <MdPerson color={colors.grey} size="24" />
        </StyledLink>
        <StyledLink to="/galleries">
          <MdPhotoLibrary color={colors.grey} size="24" />
        </StyledLink>
        <StyledLink to="/courses">
          <MdLocalLibrary color={colors.grey} size="24" />
        </StyledLink>
        <StyledLink to="/settings">
          <MdSettings color={colors.grey} size="24" />
        </StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Footer;
