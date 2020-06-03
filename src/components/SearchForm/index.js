import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Input } from '~/components/Form';

import { Form, ButtonSubmit } from './styles';

import colors from '~/styles/colors';

function SearchForm({ ...rest }) {
  return (
    <Form {...rest}>
      <Input />
      <ButtonSubmit>
        <MdSearch color={colors.greyLight} size="24" />
      </ButtonSubmit>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
