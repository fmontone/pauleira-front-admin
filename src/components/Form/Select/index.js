import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { MdExpandMore } from 'react-icons/md';

import { Wrapper, StyledSelect, Arrow } from './styles';

import colors from '~/styles/colors';

const Select = forwardRef(({ dropOptions, ...rest }, ref) => {
  return (
    <Wrapper>
      <StyledSelect ref={ref} {...rest}>
        {dropOptions.map((item, index) => {
          return (
            <option key={String(index)} value={index}>
              {item.title}
            </option>
          );
        })}
      </StyledSelect>
      <Arrow>
        <MdExpandMore color={colors.primary} size="24" />
      </Arrow>
    </Wrapper>
  );
});

Select.propTypes = {
  dropOptions: PropTypes.arrayOf(PropTypes.shape({})),
};
Select.defaultProps = {
  dropOptions: [{}],
};

export default Select;
