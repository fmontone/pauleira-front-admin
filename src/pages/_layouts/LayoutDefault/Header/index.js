import React from 'react';

import Icon from '~/components/Icon';
import { Wrapper, Container, IconWrapper } from './styles';
import colors from '~/styles/colors';

function Header() {
  return (
    <Wrapper>
      <Container>
        <IconWrapper>
          <Icon name="logo-flying-p" color={colors.greyLighter} size="32" />
        </IconWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
