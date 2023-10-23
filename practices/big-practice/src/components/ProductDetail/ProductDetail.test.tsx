import { render } from '@testing-library/react';

// Components
import ProductDetail from '.';

describe('ProductCard Component', () => {
  test('Shoudl render sucessfully', () => {
    const comp = render(<ProductDetail />)
    expect(comp).toBeTruthy()
  });

  test('Should match snapshot', () => {
    const comp = render(<ProductDetail  />)
    expect(comp).toMatchSnapshot()
  });
});
