import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  StyledInputRadio,
  IconIdle,
  IconChecked,
} from './styles';

function Radio({ options, name, selected, directionRow, ...rest }) {
  const allRefs = useRef([]);
  const [activeRef, setActiveRef] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    if (allRefs && selected && !hasChanged) {
      setActiveRef(options.findIndex((item) => item === selected));
    }

    allRefs.current[activeRef].checked = true;
  }, [activeRef, options, selected, hasChanged]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: allRefs.current[activeRef],
      path: 'value',
    });
  }, [fieldName, registerField, activeRef]);

  function handleSelect(index) {
    if (!hasChanged) setHasChanged(true);
    setActiveRef(index);
  }

  return (
    <Wrapper directionRow={directionRow}>
      {allRefs &&
        options.map((item, index) => (
          <Container
            {...rest}
            key={index.toString()}
            onClick={() => handleSelect(index)}
            className={activeRef === index ? 'check' : ''}
            directionRow
            data-testid={`option-${index + 1}`}
          >
            {activeRef === index ? <IconChecked /> : <IconIdle />}
            <label htmlFor={item}>{item}</label>
            <StyledInputRadio
              ref={(ref) => (allRefs.current[index] = ref)} /* eslint-disable-line */
              type="radio"
              name={name}
              value={item}
            />
          </Container>
        ))}
    </Wrapper>
  );
}

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  directionRow: PropTypes.bool,
};

Radio.defaultProps = {
  selected: '',
  directionRow: false,
};

export default Radio;
