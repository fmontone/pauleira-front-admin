import styled from 'styled-components';
import { Form, Input } from 'unform';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';

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
  background-color: lightgrey;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 16px;
`;

export const MyForm = styled(Form)`
  max-width: 500px;
`;

export const MyInput = styled(Input)`
  margin-bottom: 16px;
`;

export const MyButton = styled(ButtonCustom)`
  margin-bottom: 16px;
`;
