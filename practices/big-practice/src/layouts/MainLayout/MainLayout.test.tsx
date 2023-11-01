import { MemoryRouter } from 'react-router-dom';
import { RenderResult, render } from '@testing-library/react';

import MainLayout from '.';

describe('MainLayout', () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <MainLayout>
          <div>Children</div>
        </MainLayout>
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should render correctly', () => {
    expect(comp).toMatchSnapshot();
  });
});
