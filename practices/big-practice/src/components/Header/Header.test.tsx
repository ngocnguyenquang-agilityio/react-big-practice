import { render } from '@testing-library/react';

// Components
import Header from '.';

// TODO: Update props and more test case when implement functions

const props = {
  toggleCart: jest.fn(),
};

describe('Header component', () => {
  test('Should render successfully', () => {
    const comp = render(<Header {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Header {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
