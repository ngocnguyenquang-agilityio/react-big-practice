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
    expect(comp.getByPlaceholderText('Phone number')).toBeTruthy();
    expect(comp.getByPlaceholderText('name@flowbite.com')).toBeTruthy();
    expect(comp.getByPlaceholderText('First name')).toBeTruthy();
    expect(comp.getByPlaceholderText('Last name')).toBeTruthy();
    expect(comp.getByPlaceholderText('Address')).toBeTruthy();
    expect(comp.getByPlaceholderText('Apartment')).toBeTruthy();
    expect(comp.getByPlaceholderText('City')).toBeTruthy();
    expect(comp.getByText(/continue to shipping/i, { selector: 'button' })).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render error messages', () => {
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.click(button);

    expect(comp.findByText('Phone is required')).toBeTruthy();
    expect(comp.findByText('Email is required')).toBeTruthy();
    expect(comp.findByText('First name is required')).toBeTruthy();
    expect(comp.findByText('Last name is required')).toBeTruthy();
    expect(comp.findByText('Address is required')).toBeTruthy();
    expect(comp.findByText('City is required')).toBeTruthy();
  });
});

describe('ShippingForm component phone number field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for phone number field', async () => {
    const phoneInput = comp.getByPlaceholderText('Phone number');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(phoneInput, { target: { value: 'this is not phone number' } });
    await fireEvent.click(button);

    expect(comp.findByText('Phone number is not valid')).toBeTruthy();
  });
});

// TODO: Update UT for the rest input field the same as phone number
