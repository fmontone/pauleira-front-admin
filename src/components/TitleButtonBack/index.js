import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdArrowBack } from 'react-icons/md';

import { Button } from './styles';

import colors from '~/styles/colors';

function TitleButtonBack({ goTo }) {
  const history = useHistory();
  return (
    <Button onClick={() => history.push(goTo)}>
      <MdArrowBack size="24" color={colors.black} />
    </Button>
  );
}

TitleButtonBack.propTypes = {
  goTo: PropTypes.string.isRequired,
};

export default TitleButtonBack;
