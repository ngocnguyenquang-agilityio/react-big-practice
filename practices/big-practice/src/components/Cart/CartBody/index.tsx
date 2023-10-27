// Components
import CartItem from '../CartItem';

const CartBody = () => {
  // TODO: Handle increase number of item by 1
  const handleIncrease = () => {};

  // TODO: Handle decrease number of item by 1
  const handleDecrease = () => {};

  // TODO: Handle remove item from cart
  const handleRemoveItemFromCart = () => {};

  // TODO: Remove when data is fetched
  const mockProduct = {
    id: 1,
    title: 'Product Detail',
    price: 20,
    thumbnail:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
    category: 'Product',
  };

  return (
    <div className='flex h-full flex-col justify-between overflow-hidden p-1'>
      <ul className='flex-grow overflow-auto py-4'>
        {/* TODO: map function with list products */}
        <li className='flex w-full flex-col border-b border-neutral-700'>
          <CartItem
            product={mockProduct}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </li>
      </ul>
      <div className='py-4 text-sm text-neutral-400'>
        <div className='mb-3 flex items-center justify-between border-b pb-1 border-neutral-700'>
          <p>Taxes</p>
          <p className='text-right text-base text-white'>
            $7.00
            <span className='ml-1 inline'>USD</span>
          </p>
        </div>
        <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
          <p>Shipping</p>
          <p className='text-right'>Calculated at checkout</p>
        </div>
        <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
          <p>Total</p>
          <p className='text-right text-base text-white'>
            $7.00
            <span className='ml-1 inline'>USD</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
