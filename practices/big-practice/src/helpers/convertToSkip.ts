/**
 * Times value by 9 and convert to number
 * @param {T extends string} value
 * @returns {number}
 */
export const convertToSkip = <T extends string>(value: T) => {
  return (parseInt(value) - 1) * 9;
};
