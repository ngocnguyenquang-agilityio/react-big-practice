// Libs
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, RenderResult } from '@testing-library/react';

// Components
import { ShippingForm } from '../ShippingFormContainer';

describe('ShippingForm component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /phone/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /email/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /address/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /apartment/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /city/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /last name/i })).toBeTruthy();
    expect(comp.getByRole('textbox', { name: /first name/i })).toBeTruthy();
    expect(comp.getByText(/continue to shipping/i, { selector: 'button' })).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render error messages', () => {
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.click(button);

    expect(comp.findByText('Enter phone number')).toBeTruthy();
    expect(comp.findByText('Email is required')).toBeTruthy();
    expect(comp.findByText('First name is required')).toBeTruthy();
    expect(comp.findByText('Last name is required')).toBeTruthy();
    expect(comp.findByText('Address is required')).toBeTruthy();
    expect(comp.findByText('City is required')).toBeTruthy();
  });
});
