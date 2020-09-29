import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;
  padding: 0;

  display: flex;
  flex-direction: column;

  @media ${device.tabletLs} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  h2 {
    margin-bottom: 32px;
  }

  .galley-image__placeholder {
    padding: 16px;
    margin-bottom: 32px;
    text-align: center;
    color: ${colors.grey};
    border-radius: 6px;
    border: 1px dashed ${colors.greyLight};
  }
`;

export const BlockTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletLs} {
    flex: 0 0 100%;
  }
`;

export const BlockImages = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 60%;
`;

export const BlockForm = styled.div`
  @media ${device.tabletLs} {
    flex: 1;
    padding: 0 16px;
  }
`;
