import { useReducer } from 'react';
import { IButton } from '../interfaces/button.interface';
import { buttonCollection, collectionReducer } from '../reducer/collection.reducer';
import { CollectionContext } from './collection.context';

/**
 * Add button to localStorage
 * @param {IButton} button: the button to be added
 */
const addButtonToLocalStorage = (button: IButton) => {
  const collection: IButton[] = JSON.parse(localStorage.getItem('collection') as string) || [];
  collection.push(button);
  localStorage.setItem('collection', JSON.stringify(collection));
};

/**
 * Collection Provider
 * @param {Element} children: React component
 * @returns: A provider for collection with value pairs and children as elements
 */
const CollectionProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(collectionReducer, buttonCollection);

  const addToCollectionButton = (button: IButton) => {
    addButtonToLocalStorage(button);
    dispatch({ type: 'ADD_BTN', data: button });
    alert('Added to collection')
  };

  return (
    <CollectionContext.Provider value={{ value: state.collection, addToCollectionButton }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
