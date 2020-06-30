import React from 'react';
import { render } from '@testing-library/react';

import Card from '~/components/Card';

describe('Card Component', () => {
  it('Should return something', () => {
    const { getByTestId } = render(<Card />);

    expect(getByTestId('card')).toBeTruthy();
  });

  it('Should Render with child', () => {
    const { getByText } = render(
      <Card>
        <h1>TESTE</h1>
      </Card>
    );

    expect(getByText('TESTE')).toBeTruthy();
  });
});
