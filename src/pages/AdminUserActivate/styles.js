import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import { Input } from '~/components/Form';

import colors from '~/styles/colors';

export const Container = styled(ContainerCustom)`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 64px;
  height: 70px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const StyledCard = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 16px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  text-align: left;
  align-self: center;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(ButtonCustom)`
  margin-bottom: 16px;
  width: 100%;
`;

export const LoginButton = styled(ButtonCustom).attrs({
  model: 'outline',
  color: colors.primary,
})`
  width: 100%;
`;
