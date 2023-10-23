// Icons
import { MinusIcon, PlusIcon, RemoveIcon } from "@assets/icons";

// Components
import { Button } from "@components/Button";
import { IProductCard } from "@components/ProductCard";
import { useState } from "react";

const ItemInCart = ({ name, price, image }: IProductCard) => {

  const [quantity, setQuantity] = useState(1)

  // Handle increase number of item by 1
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  // Handle decrease number of item by 1
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // TODO: Handle remove item from cart
  const handleRemoveItemFromCart = () => { }

  return (
    <div className="relative flex w-full flex-row justify-between px-1 py-4">
      <div className="absolute z-40 -mt-2 ml-[55px]">
        <button
          className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
          onClick={handleRemoveItemFromCart}
        >
          <RemoveIcon />
        </button>
      </div>
      <a className="z-30 flex flex-row space-x-4" href="">
        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800">
          <img
            className="h-full w-full object-cover"
            loading="lazy"
            src={image}
          />
        </div>
        <div className="flex flex-1 flex-col text-base">
          <span className="leading-tight">{name}</span>
          <p className="text-sm text-neutral-400">Black / 7 x 9 inch</p>
        </div>
      </a>
      <div className="flex h-16 flex-col justify-between">
        <p className="flex justify-end space-y-2 text-right text-sm">
          {price}
          <span className="ml-1 inline">USD</span>
        </p>
        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-700">
          <Button
            className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
            variant='link'
            onClick={handleDecrease}
          >
            <MinusIcon />
          </Button>
          <p className="w-6 text-center">
            <span className="w-full text-sm">{quantity}</span>
          </p>
          <Button
            className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
            variant='link'
            onClick={handleIncrease}
          >
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  )
};

export default ItemInCart;
