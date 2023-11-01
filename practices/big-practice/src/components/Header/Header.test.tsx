// Libs
import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from '.';

const props = {
  onToggleCart: jest.fn(),
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

  test('Should render number of footer items correctly', async () => {
    const items = await screen.getByTestId('header-items');
    expect(items.children).toHaveLength(3);
  });

  test('Should call toggleCart', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(props.onToggleCart).toBeCalledTimes(1);
  });
});
