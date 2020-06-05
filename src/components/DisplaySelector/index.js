import React from 'react';
import PropTypes from 'prop-types';

import Icon from '~/components/Icon';

import { Container, StyledIconButton } from './styles';

import colors from '~/styles/colors';

function DisplaySelector({ onClick, displayList, ...rest }) {
  return (
    <Container {...rest}>
      <StyledIconButton data-selector="list" onClick={onClick}>
        <Icon
          name="settings-list"
          color={displayList === 'list' ? colors.primary : colors.greyLight}
        />
      </StyledIconButton>
      <StyledIconButton data-selector="block" onClick={onClick}>
        <Icon
          name="settings-block"
          color={displayList !== 'list' ? colors.primary : colors.greyLight}
        />
      </StyledIconButton>
    </Container>
  );
}

DisplaySelector.propTypes = {
  displayList: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

DisplaySelector.defaultProps = {
  displayList: 'list',
};

export default DisplaySelector;
