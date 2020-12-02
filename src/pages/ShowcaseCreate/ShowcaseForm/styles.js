import styled from 'styled-components';

export const Form = styled.form`
  .button__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    button + button {
      margin-left: 16px;
    }
  }
`;
