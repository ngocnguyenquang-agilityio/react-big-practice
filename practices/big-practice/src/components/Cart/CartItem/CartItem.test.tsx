import { render } from '@testing-library/react';

// Components
import CartItem from '.';

// Types
import { ICartItem, IProduct } from '@interfaces';

const mockProduct: IProduct = {
  id: 1,
  title: 'Product 1',
  price: 20,
  category: 'phone',
  thumbnail:
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
};

const props: ICartItem = {
  product: mockProduct,
  quantity: 1,
  handleRemoveItemFromCart: jest.fn(),
  handleDecrease: jest.fn(),
  handleIncrease: jest.fn(),
};

describe('ProductCard Component', () => {
  test('Should render successfully', () => {
    const comp = render(<CartItem {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<CartItem {...props} />);
    expect(comp).toMatchSnapshot();
  });

  // TODO: Update more test cases when implement functions
});
