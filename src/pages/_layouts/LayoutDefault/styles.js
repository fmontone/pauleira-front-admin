import styled from 'styled-components';

import colors from '~/styles/colors';

import PageWrapper from '~/components/PageWrapper';
import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled(PageWrapper)`
  background-color: ${colors.greyLighter};
`;

export const Container = styled(ContainerCustom)`
  padding-top: 16px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;
