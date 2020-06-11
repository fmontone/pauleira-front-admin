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

function Radio({ options, name, ...rest }) {
  const allRefs = useRef([]);
  const [activeRef, setActiveRef] = useState(0);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    allRefs.current[activeRef].checked = true;
  }, [activeRef]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: allRefs.current[activeRef],
      path: 'value',
    });
  }, [fieldName, registerField, activeRef]);

  return (
    <Wrapper>
      {allRefs &&
        options.map((item, index) => (
          <Container
            {...rest}
            key={index.toString()}
            onClick={() => setActiveRef(index)}
            className={activeRef === index ? 'check' : ''}
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
};

export default Radio;
