import styled from 'styled-components';

import { device } from '~/styles/queries';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tabletLs} {
    padding: 24px 0;
  }
  @media ${device.laptop} {
    padding: 32px 0;
  }
  @media ${device.desktop} {
    padding: 40px 0;
  }

  h1 {
    margin: unset;
    text-align: center;
    color: ${colors.black};

    @media ${device.mobile} {
      font-size: 32px;
    }
  }
`;
