import { render } from '@testing-library/react';

// Components
import Footer from './Footer';

describe('Footer component', () => {
  test('Should render successfully', () => {
    const comp = render(<Footer />)
    expect(comp).toBeTruthy()
  })

  test('Should match snapshot', () => {
    const comp = render(<Footer />)
    expect(comp).toMatchSnapshot()
  })
})
