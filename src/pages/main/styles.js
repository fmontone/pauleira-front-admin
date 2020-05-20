import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.greyLighter};
  background-color: ${colors.primary};
`;
