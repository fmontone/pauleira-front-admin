import styled from 'styled-components';

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 16px;
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
`;

export const MyInput = styled.input`
  margin-bottom: 16px;
`;

export const MyButton = styled(ButtonCustom)`
  margin-bottom: 16px;
`;
