import React from 'react';
import { render } from '@testing-library/react';

import {
  Form,
  Fieldset,
  Input,
  Radio,
  Select,
  TextArea,
} from '~/components/Form';

describe('Form', () => {
  it('Should render properly with children and props', () => {
    const {
      queryByText,
      queryByTestId,
      queryAllByDisplayValue,
      queryAllByText,
    } = render(
      <Form>
        <Fieldset title="Title Test">
          <Input name="test-name" label="test-label" isRequired />
          <Radio
            name="test-radio"
            options={['Radio Option 1', 'Radio Option 2']}
          />
          <Select
            name="test-select"
            dropOptions={['Select Option 1', 'Select Option 2']}
          />
          <TextArea name="test-textarea" label="Text Area" />
        </Fieldset>
      </Form>
    );

    expect(queryByText('test-label')).toBeTruthy();
    expect(queryByText('*')).toBeTruthy();
    expect(queryByTestId('input')).toBeTruthy();
    expect(queryByTestId('test-fieldset')).toBeTruthy();
    expect(queryByText('Title Test')).toBeTruthy();
    expect(queryAllByDisplayValue(/Radio Option/i).length).toBe(2);
    expect(queryAllByText(/Select Option /i).length).toBe(2);
  });
});
