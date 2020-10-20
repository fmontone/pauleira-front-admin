import styled from 'styled-components';
import { animated } from 'react-spring';

import ButtonBlank from '~/components/ButtonBlank';

import colors from '~/styles/colors';

export const Container = styled(animated.div)`
  position: relative;
  padding: 16px;
  margin-top: 8px;

  color: ${colors.greyLighter};

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  background-color: ${colors.blackDeep};

  p {
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  margin-right: 16px;
`;

export const ButtonClose = styled(ButtonBlank)`
  margin-left: 16px;
`;
