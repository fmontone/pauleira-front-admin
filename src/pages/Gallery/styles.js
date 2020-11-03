import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';

import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  width: 100%;
  height: 100%;
  padding: unset;

  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${device.tabletLs} {
    padding: unset;
  }
`;

export const ContentWrapper = styled.div`
  @media ${device.tabletLs} {
    display: flex;
    justify-content: center;
    flex: 1;
  }
`;

export const BlockImages = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media ${device.tabletLs} {
    width: 60%;
  }
`;

export const BlockForm = styled.div`
  width: 100%;
  margin-left: unset;
  padding-bottom: 16px;

  @media ${device.tabletLs} {
    margin-left: 16px;
    width: 40%;
    padding-bottom: unset;
  }
`;
