// Libs
import { create } from 'zustand';

// Constants
import { buildAPIEndpoint } from '@helpers/buildQueryProductAPIEndpoint';

type Store = {
  endpoint: string;
};

export const useEndpoint = create<Store>(() => ({
  endpoint: buildAPIEndpoint({ skip: 0 }),
}));
