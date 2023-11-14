// Libs
import { render, RenderResult } from '@testing-library/react';

// Components
import FormControl from '../FormControl';

const props = {
  label: 'Label 1',
  value: 'value1',
  placeholder: 'Placeholder1',
  onChange: jest.fn(),
  errorMessage: 'Error messages',
};

describe('FormControl component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(<FormControl {...props} />);
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  // TODO: update unit test
});
