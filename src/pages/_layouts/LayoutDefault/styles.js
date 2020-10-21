import styled from 'styled-components';

import PageWrapper from '~/components/PageWrapper';
import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled(PageWrapper)`
  background-color: #fff;
`;

export const Container = styled(ContainerCustom)`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
