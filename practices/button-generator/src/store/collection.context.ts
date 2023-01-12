import { createContext } from 'react';
import { IButton } from '../interfaces/button.interface';

export type CollectionType = {
  value: IButton[];
  addToCollectionButton: (button: IButton) => void;
  removeButtonFromCollection: (id: string) => void;
};

// TODO: Create individual folder
export const CollectionContext = createContext<CollectionType>({
  value: [],
  addToCollectionButton: (button: IButton) => {},
  removeButtonFromCollection: (id: string) => {},
});
