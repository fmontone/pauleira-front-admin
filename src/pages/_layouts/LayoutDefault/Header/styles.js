import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${colors.blackDeep};
  display: flex;
  justify-content: center;
`;

export const Container = styled(ContainerCustom)`
  height: 100%;
  color: ${colors.greyLight};
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    text-transform: capitalize;
    margin-left: 8px;
    padding-left: 8px;
    border-left: 2px solid ${colors.greyHeavy};
  }
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
