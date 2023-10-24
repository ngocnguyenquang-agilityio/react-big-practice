// Components
import { CartIcon } from '@assets/icons';

const CartEmpty = () => {
  return (
    <div className='mt-20 flex w-full flex-col items-center justify-center overflow-hidden'>
      <CartIcon width={64} height={64} />
      <p className='mt-6 text-center text-2xl font-bold'>Your cart is empty.</p>
    </div>
  );
};

export default CartEmpty;
