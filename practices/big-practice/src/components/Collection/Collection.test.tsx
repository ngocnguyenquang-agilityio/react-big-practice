// Libs
import { MemoryRouter } from 'react-router-dom';
import { screen, render, RenderResult } from '@testing-library/react';

// Components
import Collection from '.';

const mockListCollection = [
  { value: 'phones', label: 'Phone' },
  { value: 'laptops', label: 'Laptop' },
];

describe('Collection component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <Collection
          list={mockListCollection}
          title='Collection'
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
    const items = await screen.getByTestId('collection');
    expect(items.children).toHaveLength(2);
  });

  test('Should render correct title', () => {
    const title = screen.getByText('Collection');
    expect(title).toBeTruthy();
  });
});
