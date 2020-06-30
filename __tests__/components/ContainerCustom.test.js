import React from 'react';
import { render } from '@testing-library/react';

import ContainerCustom from '~/components/ContainerCustom';

describe('ContainerCustom Component', () => {
  it('Should return something', () => {
    const { getByTestId } = render(<ContainerCustom />);

    expect(getByTestId('container-custom')).toBeTruthy();
  });

  it('Should Render with child', () => {
    const { getByText } = render(
      <ContainerCustom>
        <h1>TESTE</h1>
      </ContainerCustom>
    );

    expect(getByText('TESTE')).toBeTruthy();
  });
});
