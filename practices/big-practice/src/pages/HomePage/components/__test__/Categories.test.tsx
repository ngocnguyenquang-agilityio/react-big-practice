// Libs
import { MemoryRouter } from 'react-router-dom';
import { screen, render, RenderResult } from '@testing-library/react';

// Components
import { Categories } from '../CategoryListContainer';

const mockListCollection = [
  { value: 'phones', label: 'Phone' },
  { value: 'laptops', label: 'Laptop' },
];

describe('Categories component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <Categories
          categories={mockListCollection}
          selectingItem='smartphones'
        />
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct number of items', async () => {
    const items = await screen.getByTestId('categories');
    expect(items.children).toHaveLength(2);
  });

  test('Should has no underline item in first render', async () => {
    const items = await screen.getByTestId('categories');
    expect(items.getElementsByClassName('font-bold underline').length).toBe(0);
  });
});
