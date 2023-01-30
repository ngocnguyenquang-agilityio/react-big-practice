import { memo } from 'react';
import { IDropDownMenu } from '../../interfaces/dropdownMenu.interface';

const DropDownMenu = memo(({ dropdownOptions, ...rest }: IDropDownMenu): React.ReactElement => {
  return (
    <select
      className='form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      {...rest}
    >
      {dropdownOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default DropDownMenu;
