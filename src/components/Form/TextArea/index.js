import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledLabel, TextEditor } from './styles';

import ErrorSpan from '~/components/Form/ErrorSpan';

const TextArea = forwardRef(
  ({ label, name, isRequired, error, ...rest }, ref) => {
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
            init={{
              height: 500,
              menubar: false,
            }}
            ref={ref}
            {...rest}
          />
        </StyledLabel>
        <ErrorSpan>{error}</ErrorSpan>
      </Container>
    );
  }
);

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
};

TextArea.defaultProps = {
  label: '',
  isRequired: false,
  error: '',
};

export default TextArea;
