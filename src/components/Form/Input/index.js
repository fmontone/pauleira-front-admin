import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledLabel, StyledInput } from './styles';
import ErrorSpan from '~/components/Form/ErrorSpan';

const Input = forwardRef(
  ({ label, name, errorText, isRequired, ...rest }, ref) => {
    return (
      <>
        <StyledLabel htmlFor={name}>
          {label && (
            <span>
              {label}
              {isRequired && <span className="asterisk">*</span>}
            </span>
          )}
          <StyledInput name={name} ref={ref} {...rest} data-testid="input" />
        </StyledLabel>
        {errorText && <ErrorSpan>{errorText}</ErrorSpan>}
      </>
    );
  }
);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  errorText: null,
  isRequired: false,
};

export default Input;
