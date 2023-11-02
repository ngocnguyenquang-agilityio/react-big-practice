// Libs
import { create } from 'zustand';

// Types
import { IProductCartItem } from '@interfaces';

type Store = {
  cartItems: IProductCartItem[];
  isOpenCart: boolean;
  toggleCart: () => void;
  addToCart: (item: IProductCartItem) => void;
};

export const useCart = create<Store>((set) => ({
  cartItems: [],
  isOpenCart: false,
  toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),
  addToCart: (item: IProductCartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
}));
