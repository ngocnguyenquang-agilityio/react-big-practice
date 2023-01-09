import { SIZE } from '../enums/button';
import { IButton } from '../interfaces/button.interface';

export const defaultButton: IButton = {
  textContent: 'Button',
  size: SIZE.SMALL,
};

/**
 *
 * @param {IButton} state: the state of the button
 * @param action: to change the state of the button
 * @returns {IButton}: new button state after did action
 */
export const buttonReducer = (state: IButton, action: any) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return {
        ...state,
        size: action.data,
      };
    default:
      return state;
  }
};
