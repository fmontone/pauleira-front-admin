import styled from 'styled-components';

import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

import colors from '~/styles/colors';

export const Wrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.directionRow ? 'row' : 'column')};
`;

export const Container = styled.li`
  width: 100%;
  min-height: 48px;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};

  & + li {
    margin-left: ${(props) => (props.directionRow ? '8px' : 'unset')};
  }

  &.check {
    color: ${colors.white};
    background-color: ${colors.statusInfo};
  }
`;

export const IconIdle = styled(MdRadioButtonUnchecked).attrs({
  size: 16,
  color: colors.greyHeavy,
})`
  margin-right: 8px;
`;

export const IconChecked = styled(MdRadioButtonChecked).attrs({
  size: 16,
  color: colors.white,
})`
  margin-right: 8px;
`;

export const StyledInputRadio = styled.input`
  display: none;
`;
