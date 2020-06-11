import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import { Fieldset, Input, Radio } from '~/components/Form';

import colors from '~/styles/colors';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;

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
})`
  margin-right: 8px;
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  color: colors.statusSuccess,
})``;
