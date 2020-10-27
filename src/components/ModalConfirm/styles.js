import styled from 'styled-components';

import Card from '~/components/Card';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000090;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const Container = styled(Card)`
  width: 100%;
  height: auto;
  max-width: 400px;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
`;

export const ButtonWrapper = styled.div`
  border-top: 1px solid ${colors.greyLight};
  display: flex;

  button {
    height: 40px;
    width: 50%;

    font-weight: 500;
    color: ${colors.statusDanger};

    border-radius: 0 0 0 6px;

    &:active {
      background-color: ${colors.greyLighter};
    }
  }

  button + button {
    border-left: 1px solid ${colors.greyLight};
    color: ${colors.statusInfo};

    border-radius: 0 0 6px 0;
  }
`;

export const ButtonCancel = styled.button``;

export const ButtonConfirm = styled.button``;
