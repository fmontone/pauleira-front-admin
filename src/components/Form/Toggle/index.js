import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Label, Content, TextOn, TextOff, ButtonToggle } from './styles';

function Toggle({
  name,
  toggleValue,
  textOn,
  textOff,
  active,
  toggleRef,
  ...rest
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggleValue) setToggle(toggleValue);
  }, [toggleValue]);

  function handleToggle() {
    if (!active) return;

    setToggle(!toggle);
  }

  return (
    <Label>
      <Content>
        {toggle && <TextOn>{textOn}</TextOn>}

        {!toggle && <TextOff>{textOff || textOn}</TextOff>}
      </Content>

      <ButtonToggle
        onClick={() => handleToggle()}
        toggle={toggle}
        disabled={active}
      />
      <input
        name={name}
        type="checkbox"
        value={toggle}
        disabled={!active}
        ref={toggleRef}
        {...rest}
      />
    </Label>
  );
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  toggleValue: PropTypes.bool,
  textOn: PropTypes.string.isRequired,
  textOff: PropTypes.string,
  active: PropTypes.bool,
  toggleRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

Toggle.defaultProps = {
  toggleValue: false,
  textOff: '',
  active: true,
  toggleRef: null,
};

export default Toggle;
