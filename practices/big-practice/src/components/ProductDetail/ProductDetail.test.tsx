import { RenderResult, render } from '@testing-library/react';

// Components
import ProductDetail from '.';

const mockProduct = {
  id: 1,
  title: 'Product Detail',
  price: 20,
  thumbnail:
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
  category: 'Product',
};

describe('ProductCard Component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(<ProductDetail product={mockProduct} />);
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });
});
