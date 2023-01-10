import { BORDER_SIZE, ROUNDED_SIZE, SIZE, VARIANT } from '../enums/button';

/**
 * Get the size of the button
 * @param {SIZE} size: size of the button
 * @returns {string}: class to style the button size
 */
export const getBtnSize = (size: SIZE): string => {
  const btnSize = {
    [SIZE.SMALL]: 'h-8 px-4 m-2 text-sm',
    [SIZE.MEDIUM]: 'h-10 px-5 m-2',
    [SIZE.LARGE]: 'h-12 px-6 m-2 text-lg',
  };

  return btnSize[size];
};

/**
 * Get the border size of the button
 * @param {BORDER_SIZE} borderSize: size of the border
 * @returns {string}: class to style the border size of button
 */
export const getBtnBorderSize = (borderSize: BORDER_SIZE): string => {
  const btnBorderSize = {
    [BORDER_SIZE.SMALL]: 'border-solid border',
    [BORDER_SIZE.MEDIUM]: 'border-solid border-2',
    [BORDER_SIZE.LARGE]: 'border-solid border-4',
    [BORDER_SIZE.EXTRA_LARGE]: 'border-solid border-8',
  };

  return btnBorderSize[borderSize];
};

/**
 * Get the text color of the button
 * @param {VARIANT} textColor: color of the text of button
 * @returns {string}: class to style the color of text of button
 */
export const getBtnTextColor = (textColor: VARIANT): string => {
  const btnTextColor = {
    [VARIANT.PRIMARY]: 'text-white',
    [VARIANT.SECONDARY]: 'text-black',
    [VARIANT.SUCCESS]: 'text-green',
    [VARIANT.DANGER]: 'text-red',
  };

  return btnTextColor[textColor];
};

/**
 * Get the background color of the button
 * @param {VARIANT} bgColor: background color of the button
 * @returns {string}: class to style the background color of button
 */
export const getBtnBgColor = (bgColor: VARIANT): string => {
  const btnBgColor = {
    [VARIANT.PRIMARY]: 'bg-sky-500 hover:bg-sky-600',
    [VARIANT.SECONDARY]: 'bg-gray-500 hover:bg-gray-600',
    [VARIANT.SUCCESS]: 'bg-green-500 hover:bg-green-600',
    [VARIANT.DANGER]: 'bg-red-500 hover:bg-red-600',
  };

  return btnBgColor[bgColor];
};

/**
 * Get the border color of the button
 * @param {VARIANT} borderColor: border color of the button
 * @returns {string}: class to style the border color of the button
 */
export const getBtnBorderColor = (borderColor: VARIANT): string => {
  const btnBorderColor = {
    [VARIANT.PRIMARY]: 'border-sky-600',
    [VARIANT.SECONDARY]: 'border-gray-600',
    [VARIANT.SUCCESS]: 'border-green-600',
    [VARIANT.DANGER]: 'border-red-600',
  };

  return btnBorderColor[borderColor];
};

/**
 * Get the border radius of the button
 * @param {VARIANT} borderRadius: border radius of the button
 * @returns {string}: class to style the border radius of the button
 */
export const getBtnBorderRadius = (borderRadius: ROUNDED_SIZE): string => {
  const btnBorderRadius = {
    [ROUNDED_SIZE.SMALL]: 'rounded-sm',
    [ROUNDED_SIZE.MEDIUM]: 'rounded-md',
    [ROUNDED_SIZE.LARGE]: 'rounded-lg',
    [ROUNDED_SIZE.FULL]: 'rounded-full',
  };

  return btnBorderRadius[borderRadius];
};

/**
 * Get the text consistent with the button size value
 * @param {SIZE} value: the value of button size
 * @returns {string}: the text consistent with the button size value
 */
export const getBtnSizeValue = (value: SIZE): string => {
  const btnSizeValue = {
    [SIZE.SMALL]: 'Small',
    [SIZE.MEDIUM]: 'Medium',
    [SIZE.LARGE]: 'Large',
  };

  return btnSizeValue[value];
};

/**
 * Get the text consistent with the button border size value
 * @param {BORDER_SIZE} value: the value of border button size
 * @returns {string}: the text consistent with the button border size value
 */
export const getBtnBorderSizeValue = (value: BORDER_SIZE): string => {
  const btnBorderSizeValue = {
    [BORDER_SIZE.SMALL]: 'Small',
    [BORDER_SIZE.MEDIUM]: 'Medium',
    [BORDER_SIZE.LARGE]: 'Large',
    [BORDER_SIZE.EXTRA_LARGE]: 'Extra Large',
  };

  return btnBorderSizeValue[value];
};

/**
 * Get the text consistent with the button border radius size value
 * @param {ROUNDED_SIZE} value: the value of border radius button size
 * @returns {string}: the text consistent with the button border radius size value
 */
export const getBtnBorderRadiusValue = (value: ROUNDED_SIZE): string => {
  const btnBorderRadiusValue = {
    [ROUNDED_SIZE.SMALL]: 'Small',
    [ROUNDED_SIZE.MEDIUM]: 'Medium',
    [ROUNDED_SIZE.LARGE]: 'Large',
    [ROUNDED_SIZE.FULL]: 'Full',
  };

  return btnBorderRadiusValue[value];
};
