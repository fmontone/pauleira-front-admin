import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
  border: 1px solid ${colors.greyLight};
  border-radius: 6px;
  background-color: ${colors.white};
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  position: absolute;
  top: 0;
  left: 0;
  font-family: inherit;
  font-size: 16px;
  color: ${colors.black};
  border: unset;
  background-color: rgba(0, 0, 0, 0);
  appearance: none;
  z-index: 10;
`;

export const Arrow = styled.div`
  width: 24px;
  height: 28px;
  position: absolute;
  top: 1px;
  right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
