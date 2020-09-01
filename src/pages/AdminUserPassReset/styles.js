import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import { Input } from '~/components/Form';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  max-width: 400px;
  padding-top: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.tabletLs} {
    padding-top: unset;
    justify-content: center;
  }
`;

export const PageHeader = styled.div`
  width: 100%;
  height: auto;

  p {
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 16px;
  }
`;

export const Logo = styled.div`
  width: 90px;
  height: auto;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;

  &.title__error {
    color: ${colors.statusDanger};
  }
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  text-align: left;
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
