import styled from 'styled-components';

import colors from '~/styles/colors';

export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  input {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-weight: 700;
`;

export const TextOn = styled.span`
  color: ${colors.greyMedium};
`;

export const TextOff = styled.span`
  color: ${colors.statusInfo};
`;

export const ButtonToggle = styled.div`
  position: relative;
  width: 56px;
  height: 24px;
  border-radius: 32px;

  transition: all 0.3s ease-out;

  background-color: ${(props) =>
    props.toggle ? colors.statusInfo : colors.grey};

  cursor: ${(props) => (props.disabled ? 'pointer' : 'not-allowed')};

  ::before {
    content: '';
    width: 18px;
    height: 18px;
    margin: 3px;
    position: absolute;
    top: 0;
    right: ${(props) => (props.toggle ? '0' : 'unset')};
    left: ${(props) => (props.toggle ? 'unset' : '0')};

    border-radius: 50%;

    transition: all 0.3s ease-out;

    background-color: #fff;
  }
`;
