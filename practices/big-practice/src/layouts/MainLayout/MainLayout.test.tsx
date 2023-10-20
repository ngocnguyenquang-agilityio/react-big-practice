import { render } from '@testing-library/react';
import MainLayout from '.';

describe('MainLayout', () => {
  test('Should render correctly', () => {
    const comp = render(<MainLayout />)
    expect(comp).toBeTruthy()
  })

  test('Should match snapshot', () => {
    const comp = render(<MainLayout />)
    expect(comp).toMatchSnapshot()
  })
})
