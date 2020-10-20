import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

// eslint-disable-next-line import/no-cycle
import { useToast } from '~/hooks/ToastContext';

import colors from '~/styles/colors';
import { Container, Icon, ButtonClose } from './styles';

const icons = {
  info: <FiInfo size={24} color={colors.statusInfo} />,
  success: <FiCheckCircle size={24} color={colors.statusSuccess} />,
  error: <FiAlertCircle size={24} color={colors.statusDanger} />,
};

function ToastBox({ message, style, ...rest }) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container {...rest} style={style}>
      <Icon>{icons[message.type]}</Icon>

      <p>{message.message}</p>

      <ButtonClose type="button" onClick={() => removeToast(message.id)}>
        Fechar
      </ButtonClose>
    </Container>
  );
}

ToastBox.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  style: PropTypes.shape({}).isRequired,
};

export default ToastBox;
