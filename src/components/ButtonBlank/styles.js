import styled from 'styled-components';

import colors from '~/styles/colors';

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 8px;

  display: flex;
  align-items: center;

  color: ${colors.statusInfo};

  border-radius: 6px;

  &:hover {
    background-color: #7b7b7b30;
  }
`;
