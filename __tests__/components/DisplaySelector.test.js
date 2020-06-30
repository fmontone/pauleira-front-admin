import React from 'react';
import { render } from '@testing-library/react';

import DisplaySelector from '~/components/DisplaySelector';

console.error = jest.fn(); /*eslint-disable-line*/

const onClick = jest.fn();

describe('DisplaySelector Component', () => {
  it('Should Crash if no onClick & displayList passed to props', () => {
    render(<DisplaySelector />);

    expect(console.error).toBeCalledTimes(1); /*eslint-disable-line*/
  });

  it('Should Render Without Crash', () => {
    const { getByTestId } = render(<DisplaySelector onClick={onClick} />);

    expect(getByTestId('display-selector')).toBeTruthy();
  });
});
