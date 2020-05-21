import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function LayoutDefault({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

LayoutDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

export default LayoutDefault;
