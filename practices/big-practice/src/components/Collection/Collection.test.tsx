import { screen, render } from '@testing-library/react';

import Collection from '.';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

describe('Collection component', () => {
  test('Should render correctly', () => {
    const comp = render(<Collection list={mockListCollection} />)
    expect(comp).toBeTruthy()
  })

  test('Should match snapshot', () => {
    const comp = render(<Collection list={mockListCollection} />)
    expect(comp).toMatchSnapshot()
  })

  test('Should render correct number of items', async () => {
    render(<Collection list={mockListCollection} />)
    const items = await screen.getByTestId('collection')
    expect(items.children).toHaveLength(4)
  })
})
