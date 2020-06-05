import styled from 'styled-components';

import IconButton from '~/components/IconButton';

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  & > * {
    pointer-events: none;
  }

  :last-child {
    margin-left: 4px;
  }
`;
