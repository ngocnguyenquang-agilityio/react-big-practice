import { useState } from "react";

// Icons
import { CartIcon, CrossIcon } from "@assets/icons";

// Components
import { Button } from "@components/Button";
import ItemInCart from "@components/ItemInCart";

const Cart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const handleToggleCart = () => {
    setIsOpenCart(!isOpenCart)
  }

  // TODO: Just for testing UI, will remove in future
  const [cart, setCart] = useState([1])

  return (
    <>
      {!isOpenCart ? (
        <Button variant='outline' size='icon' onClick={handleToggleCart}>
          <CartIcon />
        </Button>
      ) : (
        <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-6 backdrop-blur-xl border-neutral-700 bg-black/80 text-white md:w-[390px] translate-x-0 z-10">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">My Cart</p>
            <Button variant='outline' size='icon' onClick={handleToggleCart}>
              <CrossIcon />
            </Button>
          </div>
          {cart.length > 0 ? (
            <div className="flex h-full flex-col justify-between overflow-hidden p-1">
              <ul className="flex-grow overflow-auto py-4">
                <li className="flex w-full flex-col border-b border-neutral-700">
                  <ItemInCart
                    name='Test Product'
                    price={20}
                    image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
                  />
                </li>
              </ul>
              <div className="py-4 text-sm text-neutral-400">
                <div className="mb-3 flex items-center justify-between border-b pb-1 border-neutral-700">
                  <p>Taxes</p>
                  <p className="text-right text-base text-white">
                    $7.00
                    <span className="ml-1 inline">USD</span>
                  </p>
                </div>
                <div className="mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700">
                  <p>Shipping</p>
                  <p className="text-right">Calculated at checkout</p>
                </div>
                <div className="mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700">
                  <p>Total</p>
                  <p className="text-right text-base text-white">
                    $7.00
                    <span className="ml-1 inline">USD</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <CartIcon width={64} height={64} />
              <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
