import { render } from '@testing-library/react';

// Components
import Pagination from '.';

const props = {
  totalPages: 4,
  standingPage: '1',
  handleChangePagination: jest.fn(),
};

describe('Pagination Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Pagination {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Pagination {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
