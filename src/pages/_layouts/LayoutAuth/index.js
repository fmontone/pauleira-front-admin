import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function LayoutAuth({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

LayoutAuth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};
