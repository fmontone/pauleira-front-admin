import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import ButtonCustom from '~/components/ButtonCustom';

console.error = jest.fn(); /*eslint-disable-line*/
const onSubmit = jest.fn(); /*eslint-disable-line*/

describe('ButtonCustom Component', () => {
  afterEach(() => {
    cleanup();
    console.error.mockClear();/*eslint-disable-line*/
  });/*eslint-disable-line*/

  it('Should Crash if renders Without Child', () => {
    render(<ButtonCustom />);
    expect(console.error).toBeCalled(); /*eslint-disable-line*/
  });

  it('Should Renders Without Crashing When Child is defined', () => {
    const { getByRole } = render(<ButtonCustom>Button</ButtonCustom>);
    expect(getByRole('button')).toBeTruthy();
  });

  it('Should crash with invalid props', () => {
    render(
      <ButtonCustom
        type="invalid-type"
        model="invalid-model"
        size="invalid-size"
        width="invalid-width"
        color={123}
      >
        Button
      </ButtonCustom>
    );

    expect(console.error).toBeCalledTimes(5); /*eslint-disable-line*/
  });

  it('Should add Class animate to child div', () => {
    const { getByRole } = render(<ButtonCustom>Button</ButtonCustom>);
    const button = getByRole('button');

    fireEvent.click(button);

    expect(button.lastElementChild).toHaveClass('animate');
  });
});
