import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Option } from './styles';

function TabFilter({ tabOptions, ...rest }) {
  const [settingsTab, setSettingsTab] = useState(tabOptions[0]);

  return (
    <Wrapper {...rest}>
      <Container>
        {tabOptions.map((item) => {
          return (
            <Option key={item}>
              <button
                type="button"
                className={settingsTab === item ? 'active' : ''}
                onClick={() => setSettingsTab(item)}
              >
                {item}
              </button>
              <span className={settingsTab === item ? 'active' : ''} />
            </Option>
          );
        })}
      </Container>
    </Wrapper>
  );
}

TabFilter.propTypes = {
  tabOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabFilter;
