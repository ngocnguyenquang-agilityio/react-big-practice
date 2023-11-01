import { render } from '@testing-library/react';

// Components
import CartItem from '.';

// Types
import { ICartItem } from '@interfaces';

// Mocks
import { mockProduct } from '@mocks';

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
