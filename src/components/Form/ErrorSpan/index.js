import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ErrorSpan({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ErrorSpan.propTypes = {
  children: PropTypes.string,
};
ErrorSpan.defaultProps = {
  children: null,
};

export default ErrorSpan;
