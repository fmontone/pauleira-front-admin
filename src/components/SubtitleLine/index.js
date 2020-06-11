import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SubtitleLine({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}

SubtitleLine.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubtitleLine;
