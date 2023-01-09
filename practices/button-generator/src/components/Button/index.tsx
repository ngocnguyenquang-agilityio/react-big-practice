import { VARIANT, ROUNDED_SIZE, SIZE, BORDER_SIZE } from '../../enums/button';
import {
  getBtnBgColor,
  getBtnBorderColor,
  getBtnBorderRadius,
  getBtnBorderSize,
  getBtnSize,
  getBtnTextColor,
} from '../../helpers/buttonHelpers';
import { IButton } from '../../interfaces/button.interface';

const Button = ({
  textContent = '',
  size = SIZE.MEDIUM,
  borderSize = BORDER_SIZE.SMALL,
  textColor = VARIANT.PRIMARY,
  bgColor = VARIANT.PRIMARY,
  borderColor = VARIANT.PRIMARY,
  borderRadius = ROUNDED_SIZE.MEDIUM,
  isDisplayBlock = false,
  isDisabled = false,
  ...rest
}: IButton): React.ReactElement => {
  const baseClass = 'text-white text-center m-2 border-solid border-2';

  const classes = [
    baseClass,

    getBtnSize(size),
    getBtnBorderSize(borderSize),
    getBtnTextColor(textColor),
    getBtnBgColor(bgColor),
    getBtnBorderColor(borderColor),
    getBtnBorderRadius(borderRadius),

    isDisplayBlock === true ? 'block w-full' : '',
    isDisplayBlock === false ? '' : '',

    isDisabled === true ? 'opacity-50 cursor-not-allowed' : '',
    isDisabled === false ? '' : '',
  ].join(' ');
  return (
    <button className={`${classes}`} {...rest}>
      {textContent}
    </button>
  );
};

export default Button;
