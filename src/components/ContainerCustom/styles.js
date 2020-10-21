import styled from 'styled-components';

import { device } from '~/styles/queries';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  padding: 0 16px;

  @media ${device.tabletLs} {
    padding: 0;
  }
`;
