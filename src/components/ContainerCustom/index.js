import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ContainerCustom({ children, ...rest }) {
  return (
    <Container {...rest} data-testid="container-custom">
      {children}
    </Container>
  );
}

ContainerCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
};

ContainerCustom.defaultProps = {
  children: '',
};

export default ContainerCustom;
