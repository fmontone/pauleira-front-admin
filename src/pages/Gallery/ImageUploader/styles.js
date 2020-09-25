import styled from 'styled-components';

import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
`;

export const ContainerIdle = styled(Container)`
  padding: 0 32px;
  border: 1px dashed ${colors.greyLight};

  h5 {
    color: ${colors.grey};
  }
`;

export const ContainerDrop = styled(Container)`
  height: 160px;
  padding: 0 32px;
  border: 1px dashed ${colors.statusInfo};
`;

export const ContainerReject = styled(Container)`
  padding: 16px;
  border: 1px solid ${colors.statusDanger};
  background-color: ${colors.statusDanger};
`;

export const ContainerLoading = styled(Container)`
  padding: 16px;
  background-color: ${colors.statusInfo};
`;

export const ButtonUpload = styled(ButtonCustom).attrs({
  width: 'stretch',
  model: 'outline',
  size: 'small',
})`
  margin-bottom: 8px;
`;
