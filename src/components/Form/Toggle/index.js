import React, { useEffect, useState, forwardRef } from 'react';

import { Label, Content, TextOn, TextOff, ButtonToggle } from './styles';

function Toggle({ name, toggleValue, textOn, textOff, ...rest }, ref) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggleValue) setToggle(toggleValue);

    console.log({ toggle });
  }, [toggleValue, toggle]);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <Label>
      <Content>
        {toggle && <TextOn>{textOn}</TextOn>}

        {!toggle && <TextOff>{textOff || textOn}</TextOff>}
      </Content>
      <ButtonToggle onClick={handleToggle} toggle={toggle} />
      <input name={name} type="checkbox" value={toggle} {...rest} ref={ref} />
    </Label>
  );
}

export default forwardRef(Toggle);
