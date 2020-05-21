import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function PageWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};
