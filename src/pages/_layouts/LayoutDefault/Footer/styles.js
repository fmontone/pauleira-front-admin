import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled.footer`
  position: fixed;
  width: 100%;
  height: 64px;
  bottom: 0;
  background-color: ${colors.white};
`;

export const Container = styled(ContainerCustom)``;
