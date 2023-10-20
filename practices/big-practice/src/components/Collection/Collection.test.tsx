import { screen, render, RenderResult } from '@testing-library/react';

import Collection from '.';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

describe('Collection component', () => {
  let comp: RenderResult
  beforeEach(() => {
    comp = render(<Collection list={mockListCollection} title='Collection' />)
  })
  test('Should render correctly', () => {
    expect(comp).toBeTruthy()
  })

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot()
  })

  test('Should render correct number of items', async () => {
    const items = await screen.getByTestId('collection')
    expect(items.children).toHaveLength(4)
  })

  test('Should render correct title', () => {
    const title = screen.getByText('Collection')
    expect(title).toBeTruthy()
  })
})
