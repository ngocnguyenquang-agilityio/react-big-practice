import { RenderResult, render } from '@testing-library/react';

// Components
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

// TODO: Update props and more test case when implement functions

const props = {
  toggleCart: jest.fn(),
};
describe('Header component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>,
    );
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });
});
