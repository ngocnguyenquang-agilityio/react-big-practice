// Components
import CheckoutLayout from '@layouts/CheckoutLayout/CheckoutLayout';
import ShippingForm from './components/ShippingFormContainer';
import ProductCheckoutContainer from './components/ProductCheckoutContainer';

const CheckoutPage = () => {
  return (
    <CheckoutLayout rightAside={<ProductCheckoutContainer />}>
      <ShippingForm />
    </CheckoutLayout>
  );
};

export default CheckoutPage;
