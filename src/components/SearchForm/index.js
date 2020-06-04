import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Input } from '~/components/Form';

import { Form, ButtonSubmit } from './styles';

import colors from '~/styles/colors';

function SearchForm({ placeholder, ...rest }) {
  return (
    <Form {...rest}>
      <Input placeholder={placeholder} />
      <ButtonSubmit>
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
