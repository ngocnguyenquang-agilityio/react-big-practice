// Libs
import { create } from 'zustand';

// Types
import { ICartItem } from '@interfaces';

type Store = {
  cart: ICartItem[];
  isOpenCart: boolean;
  toggleCart: () => void;
  addToCart: (item: ICartItem) => void;
};

export const useCart = create<Store>((set) => ({
  cart: [],
  isOpenCart: false,
  toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),
  addToCart: (item: ICartItem) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));
