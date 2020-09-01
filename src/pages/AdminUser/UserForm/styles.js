import styled from 'styled-components';

import ButtonCustom from '~/components/ButtonCustom';
import { Fieldset, Input } from '~/components/Form';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const StyledFieldset = styled(Fieldset)`
  margin-bottom: 16px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  button + button {
    margin-bottom: 16px;
  }

  @media ${device.tabletLs} {
    flex-direction: row;
    justify-content: flex-end;

    button + button {
      margin-left: 8px;
      margin-bottom: unset;
    }
  }
`;

export const ButtonCancel = styled(ButtonCustom).attrs({
  color: colors.grey,
  model: 'outline',
  width: window.innerWidth <= 400 ? 'stretch' : 'auto',
})`
  :hover,
  :active {
    border-color: ${colors.statusInfo} !important;
    color: ${colors.statusInfo} !important;
  }
`;

export const ButtonDelete = styled(ButtonCustom).attrs({
  color: colors.grey,
  model: 'outline',
  width: window.innerWidth <= 400 ? 'stretch' : 'auto',
})`
  :hover,
  :active {
    border-color: ${colors.statusDanger} !important;
    color: ${colors.statusDanger} !important;
  }
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  color: colors.statusSuccess,
  type: 'submit',
  width: window.innerWidth <= 400 ? 'stretch' : 'auto',
})``;
