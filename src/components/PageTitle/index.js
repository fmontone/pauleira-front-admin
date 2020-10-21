import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function PageTitle({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
