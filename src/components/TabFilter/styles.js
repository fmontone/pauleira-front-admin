import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 26px;
  margin-bottom: 32px;
  border-top: 1px solid ${colors.greyLight};
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.div`
  height: 26px;
  position: relative;

  button {
    height: 26px;
    padding-top: 8px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.grey};
    background-color: transparent;

    cursor: pointer;

    &.active {
      color: ${colors.black};
    }
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: -1px;
    left: 0;
    background: transparent;

    transition: all 0.2s ease-in;

    &.active {
      background-color: ${colors.terceary};
    }
  }
`;
