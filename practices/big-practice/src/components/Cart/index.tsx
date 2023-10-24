// Icons
import { CrossIcon } from '@assets/icons';

// Components
import { Button } from '@components/Button';
import CartEmpty from '@components/Cart/CartEmpty';
import CartBody from '@components/Cart/CartBody';

// Types
import { IProduct } from '@interfaces';

interface ICart {
  handleToggleCart: () => void;
  cart?: IProduct[];
}

const Cart = ({ handleToggleCart, cart = [] }: ICart) => {
  return (
    <aside className='fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-6 backdrop-blur-xl border-neutral-700 bg-black/80 text-white md:w-[390px] translate-x-0 z-10'>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-semibold'>My Cart</p>
        <Button
          data-testid='close-cart-btn'
          variant='outline'
          size='icon'
          onClick={handleToggleCart}
        >
          <CrossIcon />
        </Button>
      </div>
      {cart.length > 0 ? <CartBody /> : <CartEmpty />}
    </aside>
  );
};

export default Cart;
