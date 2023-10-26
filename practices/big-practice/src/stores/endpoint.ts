// Libs
import { create } from 'zustand';

// Constants
import { DEFAULT_ENDPOINT } from '@constants';

type Store = {
  endpoint: string;
};

export const useEndpoint = create<Store>(() => ({
  endpoint: DEFAULT_ENDPOINT,
}));
