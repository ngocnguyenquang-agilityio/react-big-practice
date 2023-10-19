import { render } from '@testing-library/react';

// Components
import Header from '.';

// TODO: Update props and more test case when implement functions

describe('Header component', () => {
  test('Should render successfully', () => {
    const comp = render(<Header />)
    expect(comp).toBeTruthy()
  });

  test('Should match snapshot', () => {
    const comp = render(<Header />)
    expect(comp).toMatchSnapshot()
  });
});
