import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

function IconLink({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}

IconLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

export default IconLink;
