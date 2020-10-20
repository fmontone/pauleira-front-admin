import React from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';

import { Container } from './styles';

// eslint-disable-next-line import/no-cycle
import ToastBox from './ToastBox';

function Toast({ messages }) {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: {
        transform: 'translateY(-8px)',
        opacity: 0,
      },
      enter: {
        transform: 'translateY(0)',
        opacity: 1,
      },
      leave: {
        transform: 'translateY(8px)',
        opacity: 0,
      },
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastBox key={String(key)} style={props} message={item} />
      ))}
    </Container>
  );
}

Toast.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      message: PropTypes.string.isRequired,
    })
  ),
};

Toast.defaultProps = {
  messages: {
    message: {
      type: 'info',
    },
  },
};

export default Toast;
