import { useContext } from 'react';
import { CollectionContext, CollectionType } from '../context/CollectionContext';

export const useCollection = () => {
  const { value, addToCollectionButton, removeButtonFromCollection } = useContext(CollectionContext) as CollectionType;

  return { value, addToCollectionButton, removeButtonFromCollection };
};
