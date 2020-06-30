import React from 'react';
import { render } from '@testing-library/react';

import Icon from '~/components/Icon';

const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

afterEach(() => {
  spy.mockRestore();
});

describe('Icon', () => {
  it('Should Crash if called without name prop', () => {
    render(<Icon />);

    expect(spy).toBeCalled();
  });

  it('Should Load error span if loaded with invalid name', () => {
    const { getByText } = render(<Icon name="invalid-name" />);

    expect(getByText('icon-missing')).toBeTruthy();
  });

  it('Should Render SVG icon with correct name attribute', () => {
    const { container } = render(<Icon name="logo-flying-p" />);

    expect(container.firstChild.nodeName).toBe('svg');
  });
});
