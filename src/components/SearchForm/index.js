import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';

import { Form, InputField, ButtonSubmit } from './styles';

import colors from '~/styles/colors';

function SearchForm({ placeholder, ...rest }) {
  return (
    <Form {...rest}>
      <InputField type="search" name="search" placeholder={placeholder} />
      <ButtonSubmit type="submit">
        <MdSearch color={colors.greyLight} size="24" />
      </ButtonSubmit>
    </Form>
  );
}

SearchForm.propTypes = {
  placeholder: PropTypes.string,
};

SearchForm.defaultProps = {
  placeholder: '',
};

export default SearchForm;
