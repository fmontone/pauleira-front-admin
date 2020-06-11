import styled from 'styled-components';

import colors from '~/styles/colors';

export const Form = styled.form`
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  position: relative;
  font-size: 16px;
  color: ${colors.black};
  border: 1px solid ${colors.greyLight};
  border-radius: 6px;
  background-color: ${colors.white};

  ::placeholder {
    color: ${colors.greyLight};
  }
`;

export const ButtonSubmit = styled.button`
  height: 30px;
  width: 32px;
  position: absolute;
  right: 1px;
  top: 1px;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    transform: translate(0, 1px);
    height: 29px;
    width: 31px;
  }
`;
