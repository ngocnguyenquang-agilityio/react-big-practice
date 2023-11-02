// Icons
import crossIcon from '@assets/crossIcon.svg';

// Components
import { Button } from '@components/Button';
import CartEmpty from '@components/Cart/CartEmpty';
import CartBody from '@components/Cart/CartBody';
import { Icon } from '@components/Icon';

// Types
import { IProduct } from '@interfaces';

export interface ICart {
  handleToggleCart: () => void;
  cart?: IProduct[];
}

const Cart = ({ handleToggleCart, cart = [] }: ICart) => {
  return (
    <aside className='fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-4 lg:px-6 backdrop-blur-xl border-neutral-700 bg-black/80 text-white md:w-[390px] translate-x-0 z-10'>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-semibold'>My Cart</p>
        <div className='flex justify-end md:w-1/3'>
          <Button
            data-testid='close-cart-btn'
            variant='outline'
            size='icon'
            onClick={handleToggleCart}
          >
            <Icon
              svg={crossIcon}
              name='cross-icon'
            />
          </Button>
        </div>
      </div>
      {cart.length > 0 ? <CartBody /> : <CartEmpty />}
    </aside>
  );
};

export default Cart;
