import React, { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import ModalConfirm from '~/components/ModalConfirm';

const ConfirmContext = createContext();

function ConfirmProvider({ children }) {
  const [visible, setVisible] = useState(true);
  const [confirmText, setConfirmText] = useState(null);
  const [callBack, setCallBack] = useState(null);

  /**
   *
   * @param text String with message
   * @param cb Callback function to be execute after confirm. Should be a function wrapped inside an argument-less function i.e.: ()=>()=>{<cb function>}
   */

  const confirm = useCallback((text, cb) => {
    setConfirmText(text);
    setCallBack(cb);
    setVisible(true);
  }, []);

  function handleConfirm(confirmation) {
    if (confirmation) {
      callBack();
    }

    setVisible(false);
  }

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {visible && confirmText && (
        <ModalConfirm text={confirmText} handleConfirm={handleConfirm} />
      )}
    </ConfirmContext.Provider>
  );
}

function useConfirm() {
  const context = useContext(ConfirmContext);

  if (!context) {
    throw new Error('useConfirm must be used inside ConfirmProvider');
  }

  return context;
}

ConfirmProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { ConfirmProvider, useConfirm };
