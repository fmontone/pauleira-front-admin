import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonBlank from '~/components/ButtonBlank';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: none;
  border-top: 1px solid ${colors.greyLight};

  @media ${device.tabletLs} {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled(ContainerCustom)`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  button + button {
    margin-left: 16px;
  }
`;

export const Button = styled(ButtonBlank)`
  font-weight: 500;
  color: ${colors.greyHeavy};

  svg {
    margin-right: 4px;
  }
`;
