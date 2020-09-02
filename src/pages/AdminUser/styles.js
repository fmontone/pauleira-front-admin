import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

export const Container = styled(ContainerCustom)`
  margin-bottom: 16px;
  padding: 0;

  h2 {
    margin-bottom: 32px;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const ProfilePic = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 50%;
  overflow: hidden;

  background-image: url(${(props) => props.src || ProfilePlaceholder});
  background-position: center center;
  background-size: contain;
`;

export const ButtonDeleteProfilePic = styled(ButtonCustom).attrs({
  model: 'outline',
  size: 'small',
})`
  margin-left: 16px;
`;
