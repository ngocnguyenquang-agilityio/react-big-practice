import { BORDER_SIZE, ROUNDED_SIZE, SIZE, VARIANT } from '../enums/button';
import { IButton } from '../interfaces/button.interface';

export const defaultButton: IButton = {
  textContent: 'Button',
  size: SIZE.SMALL,
  bgColor: VARIANT.PRIMARY,
  borderSize: BORDER_SIZE.SMALL,
  borderColor: VARIANT.PRIMARY,
  borderRadius: ROUNDED_SIZE.SMALL,
};

export type Action = {
  type: string;
  data?: any;
};

/**
 *
 * @param {IButton} state: the state of the button
 * @param {Action} action: to change the state of the button
 * @returns {IButton}: new button state after did action
 */
export const buttonReducer = (state: IButton, action: Action): IButton => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return {
        ...state,
        size: action.data,
      };
    case 'CHANGE_BG_COLOR':
      return {
        ...state,
        bgColor: action.data,
      };
    case 'CHANGE_BORDER_SIZE':
      return {
        ...state,
        borderSize: action.data,
      };
    case 'CHANGE_BORDER_COLOR':
      return {
        ...state,
        borderColor: action.data,
      };
    case 'CHANGE_BORDER_RADIUS':
      return {
        ...state,
        borderRadius: action.data,
      };
    case 'SET_BUTTON_TO_BLOCK':
      return {
        ...state,
        isDisplayBlock: action.data,
      };
    default:
      return state;
  }
};
