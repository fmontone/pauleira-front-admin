import React from 'react';
import { useSelector } from 'react-redux';

import Icon from '~/components/Icon';
import { Wrapper, Container, IconWrapper } from './styles';
import colors from '~/styles/colors';

function Header() {
  const activePage = useSelector((state) => state.activePage.page);

  return (
    <Wrapper>
      <Container>
        <IconWrapper>
          <Icon name="logo-flying-p" color={colors.greyLighter} size="32" />
        </IconWrapper>
        <h2>{activePage}</h2>
      </Container>
    </Wrapper>
  );
}

export default Header;
