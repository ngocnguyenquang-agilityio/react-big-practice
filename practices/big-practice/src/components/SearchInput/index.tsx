// Icons
import { SearchIcon } from '@assets/icons';

// Components
import { Input } from '@components/Input';

// Types
import { InputProps } from "@components/Input";

const SearchInput = ({ ...rest }: InputProps): React.ReactElement => {
  return (
    <div className='relative w-full'>
      <Input {...rest} />
      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <SearchIcon />
      </div>
    </div>
  )
};

export default SearchInput;
