import React, { createContext, useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

// eslint-disable-next-line import/no-cycle
import ToastContainer from '~/components/Toast';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ type, message }) => {
    const id = uniqueId();

    const toast = {
      id,
      type,
      message,
    };

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
}

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { ToastProvider, useToast };
