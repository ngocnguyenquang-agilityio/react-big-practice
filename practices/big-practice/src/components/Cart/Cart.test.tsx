import { render } from '@testing-library/react';

// Components
import Cart from '.';

const mockCart = [
  {
    id: 1,
    title: 'Product Detail',
    price: 10,
    thumbnail:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
    category: 'Product',
  },

  {
    id: 2,
    title: 'Product Detail 2',
    price: 20,
    thumbnail:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
    category: 'Product',
  },
];

const props = {
  handleToggleCart: jest.fn(),
  cart: mockCart,
};

describe('Cart Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Cart {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Cart {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
