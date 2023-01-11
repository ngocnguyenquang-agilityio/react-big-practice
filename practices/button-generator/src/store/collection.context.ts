import { createContext } from 'react';
import { IButton } from '../interfaces/button.interface';

export type CollectionType = {
  value: IButton[];
  addToCollectionButton: (button: IButton) => void;
};

export const CollectionContext = createContext<CollectionType>({
  value: [],
  addToCollectionButton: () => [],
});
