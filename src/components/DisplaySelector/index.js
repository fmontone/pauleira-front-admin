import React from 'react';
import PropTypes from 'prop-types';

import Icon from '~/components/Icon';

import { Container, StyledIconButton } from './styles';

import colors from '~/styles/colors';

function DisplaySelector({ displayList, ...rest }) {
  return (
    <Container {...rest}>
      <StyledIconButton>
        <Icon
          name="settings-list"
          color={displayList ? colors.primary : colors.greyLight}
        />
      </StyledIconButton>
      <StyledIconButton>
        <Icon
          name="settings-block"
          color={!displayList ? colors.primary : colors.greyLight}
        />
      </StyledIconButton>
    </Container>
  );
}

DisplaySelector.propTypes = {
  displayList: PropTypes.bool.isRequired,
};

export default DisplaySelector;
