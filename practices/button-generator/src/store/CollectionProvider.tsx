import { useReducer } from 'react';
import { BUTTON_COLLECTION } from '../constants/collection';
import { IButton } from '../interfaces/button.interface';
import { buttonCollection, collectionReducer } from '../reducer/collection.reducer';
import { CollectionContext } from './collection.context';

/**
 * Add button to localStorage
 * @param {IButton} button: the button to be added
 */
const addButtonToLocalStorage = (button: IButton) => {
  const collection: IButton[] = JSON.parse(localStorage.getItem(BUTTON_COLLECTION) as string) || [];
  collection.push(button);
  localStorage.setItem(BUTTON_COLLECTION, JSON.stringify(collection));
};

/**
 * Remove button from localStorage
 * @param {string} id: id of the button
 */
const removeButtonFromLocalStorage = (id: string) => {
  const collection: IButton[] = JSON.parse(localStorage.getItem(BUTTON_COLLECTION) as string) || [];
  const buttonRemoved = collection.filter((item) => item.id !== id);
  localStorage.setItem(BUTTON_COLLECTION, JSON.stringify(buttonRemoved));
};

/**
 * Collection Provider
 * @param {Element} children: React component
 * @returns: A provider for collection with value pairs and children as elements
 */
const CollectionProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(collectionReducer, buttonCollection);

  /**
   * Add button to collection
   * @param {IButton} button: button to be added
   */
  const addToCollectionButton = (button: IButton) => {
    addButtonToLocalStorage(button);
    dispatch({ type: 'ADD_BTN', data: button });
  };

  /**
   * Remove button from collection by id
   * @param {string} id: id of the button
   */
  const removeButtonFromCollection = (id: string) => {
    removeButtonFromLocalStorage(id);
    dispatch({ type: 'REMOVE_BTN', data: id });
  };

  return (
    <CollectionContext.Provider value={{ value: state.collection, addToCollectionButton, removeButtonFromCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
