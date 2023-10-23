import { render } from '@testing-library/react';

// Components
import Cart from '.';

describe('Cart Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Cart />)
    expect(comp).toBeTruthy()
  });

  test('Should match snapshot', () => {
    const comp = render(<Cart />)
    expect(comp).toMatchSnapshot()
  });
})
