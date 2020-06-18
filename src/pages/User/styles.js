import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import { Fieldset, Input, Radio } from '~/components/Form';

import colors from '~/styles/colors';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;
  padding: 0;

  h2 {
    margin-bottom: 32px;
  }
`;

export const StyledFieldset = styled(Fieldset)`
  margin-bottom: 16px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const StyledRadio = styled(Radio)`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonCancel = styled(ButtonCustom).attrs({
  color: colors.grey,
  model: 'outline',
  width: window.innerWidth <= 400 ? 'stretch' : 'auto',
})`
  margin-right: 8px;
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  color: colors.statusSuccess,
  type: 'submit',
  width: window.innerWidth <= 400 ? 'stretch' : 'auto',
})``;
