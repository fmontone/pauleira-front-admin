import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import IconButton from '~/components/IconButton';
import Icon from '~/components/Icon';

const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

afterEach(() => {
  spy.mockRestore();
});

const clickFunc = jest.fn();

describe('IconButton', () => {
  it('Should Render with SVG child and respond to onClick', () => {
    const { getByRole } = render(
      <IconButton onClick={clickFunc}>
        <Icon name="logo-flying-p" />
      </IconButton>
    );

    expect(getByRole('button')).toBeTruthy();
    fireEvent.click(getByRole('button'));
    expect(clickFunc).toBeCalled();
  });
});
