import { createContext } from 'react';
import { BUTTON_COLLECTION } from '../constants/collection';
import { useReducerWithLocalStorage } from '../hooks/useReducerWithLocalStorage';
import { IButton } from '../interfaces/button.interface';
import { Action } from '../reducer/button.reducer';

/**
 * Collection reducer function
 * @param {IButton[]} state: the state of the collection is a array of buttons
 * @param {Action} action: action to change the state of the collection
 * @returns {IButton[]}: new collection state
 */
const collectionReducer = (state: IButton[], action: Action) => {
  switch (action.type) {
    case 'ADD_BTN':
      return [...state, action.data];
    case 'REMOVE_BTN':
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
};

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
