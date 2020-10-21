import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';

export const Container = styled(ContainerCustom)`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(ButtonCustom).attrs({
  color: colors.primary,
})`
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
`;
