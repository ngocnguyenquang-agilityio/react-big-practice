import { IButton } from '../interfaces/button.interface';
import { Action } from './button.reducer';

export const buttonCollection: { collection: IButton[] } = {
  collection: [],
};

/**
 * Collection reducer function
 * @param {IButton[]} state: the state of the collection is a array of buttons
 * @param {Action} action: action to change the state of the collection
 * @returns {IButton[]}: new collection state
 */
export const collectionReducer = (state: { collection: IButton[] }, action: Action) => {
  switch (action.type) {
    case 'ADD_BTN':
      return {
        ...state,
        collection: [...state.collection, action.data],
      };
    default:
      return state;
  }
};
