import styled from 'styled-components';

import { Input, TextArea, Toggle } from '~/components/Form';
import ButtonCustom from '~/components/ButtonCustom';
import Card from '~/components/Card';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const StyledInput = styled(Input).attrs({
  label: 'Título',
})`
  margin-bottom: 16px;
`;

export const StyledTextArea = styled(TextArea).attrs({
  label: 'Descrição',
})`
  margin-bottom: 32px;
`;

export const MainButtonWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonSubmit = styled(ButtonCustom).attrs({
  color: colors.statusSuccess,
  type: 'submit',
})``;

export const ButtonCancel = styled(ButtonCustom).attrs({
  color: colors.grey,
  model: 'outline',
})``;

export const ToggleWrapper = styled(Card)`
  padding: 16px;
`;

export const Toggler = styled(Toggle)``;

export const ButtonDeleteWrapper = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  flex-direction: column;

  @media ${device.tabletLs} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ButtonDelete = styled(ButtonCustom).attrs({
  color: colors.statusDanger,
  model: 'outline',
  size: 'small',
})``;
