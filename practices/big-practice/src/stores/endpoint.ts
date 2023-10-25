// Libs
import { create } from 'zustand';

// Constants
import { DEFAULT_ENDPOINT } from '@constants';

type Store = {
  endpoint: string;
  updateEndpoint: (value: string) => void;
};

export const useEndpoint = create<Store>((set) => ({
  endpoint: DEFAULT_ENDPOINT,
  updateEndpoint: (value) => set((state) => ({ ...state, endpoint: value === '' ? DEFAULT_ENDPOINT :  value})),
}));
