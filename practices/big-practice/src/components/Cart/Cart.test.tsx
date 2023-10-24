import { render } from '@testing-library/react';

// Components
import Cart from '.';

const mockCart = [
  {
    name: 'Test Product 1',
    price: 20,
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
  },

  {
    name: 'Test Product 2',
    price: 10,
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
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
