import { render } from '@testing-library/react';

// Components
import CartBody from '.';

describe('CartBody Component', () => {
  test('Should render correctly', () => {
    const comp = render(<CartBody />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<CartBody />);
    expect(comp).toMatchSnapshot();
  });
});
