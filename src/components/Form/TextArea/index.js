import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container, StyledLabel, TextEditor } from './styles';

import ErrorSpan from '~/components/Form/ErrorSpan';

function TextArea({ label, name, isRequired, ...rest }) {
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
    <Container>
      <StyledLabel htmlFor={name}>
        {label && (
          <span>
            {label}
            {isRequired && <span className="asterisk">*</span>}
          </span>
        )}
        <TextEditor
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          init={{
            height: 500,
            menubar: false,
          }}
          {...rest}
        />
      </StyledLabel>
      <ErrorSpan>{error}</ErrorSpan>
    </Container>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

TextArea.defaultProps = {
  label: '',
  isRequired: false,
};

export default TextArea;
