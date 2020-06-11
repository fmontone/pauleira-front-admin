import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { StyledLabel, StyledInput } from './styles';
import ErrorSpan from '~/components/Form/ErrorSpan';

function Input({ label, name, isRequired, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledLabel htmlFor={name}>
        {label && (
          <span>
            {label}
            {isRequired && <span className="asterisk">*</span>}
          </span>
        )}
        <StyledInput
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </StyledLabel>
      <ErrorSpan>{error}</ErrorSpan>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  isRequired: false,
};

export default Input;
