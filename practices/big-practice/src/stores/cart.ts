// Libs
import { create } from 'zustand';

type Store = {
  isOpenCart: boolean;
  toggleCart: () => void;
};

export const useCart = create<Store>((set) => ({
  isOpenCart: false,
  toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),
}));
