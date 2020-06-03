import styled from 'styled-components';

import colors from '~/styles/colors';

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  position: relative;
  color: ${colors.black};
  border: 1px solid ${colors.greyLight};
  border-radius: 6px;
  background-color: ${colors.white};

  ::placeholder {
    color: ${colors.greyLight};
  }
`;
