import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContainerCustom({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
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
