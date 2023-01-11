// TODO: Button interface

import { VARIANT, ROUNDED_SIZE, SIZE, BORDER_SIZE } from '../enums/button';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly id?: string;
  textContent: string;
  size?: SIZE;
  borderSize?: BORDER_SIZE;
  textColor?: VARIANT;
  bgColor?: VARIANT;
  borderColor?: VARIANT;
  borderRadius?: ROUNDED_SIZE;
  isDisplayBlock?: boolean;
  isDisabled?: boolean;
}
