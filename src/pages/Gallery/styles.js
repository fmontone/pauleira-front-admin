import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import { Input, TextArea, Radio, Fieldset } from '~/components/Form';
import ImageUploader from '~/components/ImageUploader';

import colors from '~/styles/colors';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;
  padding: 0;

  h2 {
    margin-bottom: 32px;
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const StyledTextArea = styled(TextArea)`
  margin-bottom: 16px;
`;

export const StyledFieldset = styled(Fieldset)`
  margin-bottom: 16px;
`;

export const StyledRadio = styled(Radio)`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonSave = styled(ButtonCustom)`
  margin-bottom: 16px;
  width: 100%;
`;

export const ButtonCancel = styled(ButtonCustom).attrs({
  color: colors.grey,
  model: 'outline',
})`
  margin-bottom: 16px;
  width: 100%;
`;

export const StyledImageUploader = styled(ImageUploader)`
  margin-bottom: 16px;
`;
