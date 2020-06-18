import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div``;

export const StyledLabel = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${colors.grey};

  .asterisk {
    margin-left: 3px;
    color: ${colors.statusDanger};
  }
`;

export const TextEditor = styled.textarea`
  width: 100%;
  min-height: 227px;
  padding: 8px;
  position: relative;
  font-size: 16px;
  color: ${colors.black};
  border: 1px solid ${colors.greyLight};
  border-radius: 6px;
  background-color: ${colors.white};
`;
