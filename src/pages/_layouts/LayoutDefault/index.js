import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './styles';

import Header from './Header';
import Footer from './Footer';

function LayoutDefault({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}

LayoutDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

export default LayoutDefault;
