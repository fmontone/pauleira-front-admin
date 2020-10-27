import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import {
  Wrapper,
  Container,
  ButtonClose,
  Content,
  ButtonWrapper,
  ButtonCancel,
  ButtonConfirm,
} from './styles';

function ModalConfirm({ text, handleConfirm }) {
  return (
    <Wrapper>
      <ButtonClose>
        <MdClose color="#fff" size={24} />
      </ButtonClose>
      <Container>
        <Content>
          {/* <h4>Você tem certeza?</h4> */}
          <span>{text}</span>
        </Content>
        <ButtonWrapper>
          <ButtonCancel onClick={() => handleConfirm(false)}>
            Cancelar
          </ButtonCancel>
          <ButtonConfirm onClick={() => handleConfirm(true)}>
            Confirmar
          </ButtonConfirm>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}

ModalConfirm.propTypes = {
  text: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default ModalConfirm;
