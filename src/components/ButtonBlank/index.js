import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

function ButtonBlank({ children, type, ...rest }) {
  return (
    <Button {...rest} type={type}>
      {children}
    </Button>
  );
}

ButtonBlank.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
  type: PropTypes.string,
};

ButtonBlank.defaultProps = {
  children: 'Button',
  type: 'button',
};

export default ButtonBlank;
