import { render } from '@testing-library/react';

// Components
import CartItem from '.';

// Types
import { ICartItem, IProducts } from '@interfaces';

const mockProduct: IProducts = {
  name: 'Test Product Card',
  price: 20,
  image:
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
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
