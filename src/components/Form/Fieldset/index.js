import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function Fieldset({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      {title && <Title title={title} />}
      {children}
    </Container>
  );
}

Fieldset.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

Fieldset.defaultProps = {
  title: null,
};

export default Fieldset;
