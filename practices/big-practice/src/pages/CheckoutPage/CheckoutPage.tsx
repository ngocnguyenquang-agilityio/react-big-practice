// Components
import CheckoutLayout from '@layouts/CheckoutLayout/CheckoutLayout';
import ShippingFormContainer from './components/ShippingFormContainer';
import ProductCheckoutContainer from './components/ProductCheckoutContainer';

const CheckoutPage = () => {
  return (
    <CheckoutLayout rightAside={<ProductCheckoutContainer />}>
      <ShippingFormContainer />
    </CheckoutLayout>
  );
};

export default CheckoutPage;
