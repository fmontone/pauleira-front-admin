import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

function IconButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

export default IconButton;
