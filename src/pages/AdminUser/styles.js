import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tabletLs} {
    max-width: 60%;
  }
`;

export const PageHeader = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${device.tabletLs} {
    button {
      margin-left: 16px;
    }
  }

  button + div {
    margin-left: 16px;
  }
`;

export const ProfilePic = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 50%;
  overflow: hidden;

  background-image: url(${(props) => props.src || ProfilePlaceholder});
  background-position: center center;
  background-size: contain;

  @media ${device.tabletLs} {
    width: 80px;
    height: 80px;
  }
`;

export const ButtonAddProfilePic = styled(ButtonCustom).attrs({
  model: 'outline',
  size: 'small',
})`
  margin-left: 16px;

  @media ${device.tabletLs} {
    margin-left: unset;
  }
`;

export const ButtonDeleteProfilePic = styled(ButtonCustom).attrs({
  model: 'outline',
  size: 'small',
})`
  margin-left: 16px;

  @media ${device.tabletLs} {
    margin-left: unset;
  }
`;
