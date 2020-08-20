import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';

import { Form, InputField, ButtonSubmit } from './styles';

import colors from '~/styles/colors';

function SearchForm({ placeholder, onSubmit, onChange, ...rest }) {
  return (
    <Form {...rest} onSubmit={onSubmit}>
      <InputField
        type="search"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      <ButtonSubmit type="submit">
        <MdSearch color={colors.greyLight} size="24" />
      </ButtonSubmit>
    </Form>
  );
}

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

SearchForm.defaultProps = {
  placeholder: '',
  onSubmit: (e) => e.preventDefault(),
  onChange: () => {},
};

export default SearchForm;
