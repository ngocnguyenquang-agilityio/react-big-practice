import { BUTTON_COLLECTION } from '../constants/collection';
import { useReducerWithLocalStorage } from '../hooks/useReducerWithLocalStorage';
import { IButton } from '../interfaces/button.interface';
import { collectionReducer } from '../reducer/collection.reducer';
import { CollectionContext } from './collection.context';

/**
 * Collection Provider
 * @param {Element} children: React component
 * @returns: A provider for collection with value pairs and children as elements
 */
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
