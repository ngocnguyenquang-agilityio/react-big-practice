import React from 'react';

const InputRange = ({ ...rest }: React.ComponentPropsWithoutRef<'input'>): React.ReactElement => {
  return (
    <input
      type='range'
      className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm'
      {...rest}
    />
  );
};
export default InputRange;
