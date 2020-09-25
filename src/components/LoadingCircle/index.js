import React from 'react';
import PropTypes from 'prop-types';

import { VscLoading } from 'react-icons/vsc';

import colors from '~/styles/colors';

import { Container } from './styles';

function LoadingCircle({ width, color }) {
  return (
    <Container width={width}>
      <VscLoading width={Number(width) - 8} color={color} />
    </Container>
  );
}

LoadingCircle.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

LoadingCircle.defaultProps = {
  width: '32px',
  color: colors.statusInfo,
};

export default LoadingCircle;
