import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, ...rest }) {
  return (
    <Container {...rest} data-testid="card">
      {children}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  children: '',
};
