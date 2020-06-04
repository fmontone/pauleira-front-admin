import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';

export const Container = styled(ContainerCustom)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonAdd = styled(ButtonCustom)`
  margin: 30px 0;
`;
