import { BUTTON_COLLECTION } from '../constants/collection';
import { IButton } from '../interfaces/button.interface';
import { Action } from './button.reducer';

export const buttonCollection: { collection: IButton[] } = {
  collection: JSON.parse(localStorage.getItem(BUTTON_COLLECTION) as string) || [],
};

/**
 * Collection reducer function
 * @param {IButton[]} state: the state of the collection is a array of buttons
 * @param {Action} action: action to change the state of the collection
 * @returns {IButton[]}: new collection state
 */
export const collectionReducer = (state: IButton[], action: Action) => {
  switch (action.type) {
    case 'ADD_BTN':
      return [...state, action.data];
    case 'REMOVE_BTN':
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
};
