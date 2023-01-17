import { createContext } from 'react';
import { BUTTON_COLLECTION } from '../constants/collection';
import { useReducerWithLocalStorage } from '../hooks/useReducerWithLocalStorage';
import { IButton } from '../interfaces/button.interface';
import { collectionReducer } from '../reducer/collection.reducer';

export type CollectionType = {
  value: IButton[];
  addToCollectionButton: (button: IButton) => void;
  removeButtonFromCollection: (id: string) => void;
};

export const CollectionContext = createContext<CollectionType | null>(null);

const CollectionProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducerWithLocalStorage(BUTTON_COLLECTION, collectionReducer);

  /**
   * Add button to collection
   * @param {IButton} button: button to be added
   */
  const addToCollectionButton = (button: IButton) => {
    dispatch({ type: 'ADD_BTN', data: { ...button, id: Date.now().toString() } });
  };

  /**
   * Remove button from collection by id
   * @param {string} id: id of the button
   */
  const removeButtonFromCollection = (id: string) => {
    dispatch({ type: 'REMOVE_BTN', data: id });
  };

  return (
    <CollectionContext.Provider value={{ value: state, addToCollectionButton, removeButtonFromCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
