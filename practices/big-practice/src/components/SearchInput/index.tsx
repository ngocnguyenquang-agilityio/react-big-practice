// Icons
import { Icon } from '@components/Icon';
import searchIcon from '@assets/searchIcon.svg';

// Components
import { Input } from '@components/Input';

// Types
import { InputProps } from '@components/Input';

const SearchInput = ({ ...rest }: InputProps): React.ReactElement => {
  return (
    <>
      <Input {...rest} />
      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <Icon
          svg={searchIcon}
          name='search-icon'
        />
      </div>
    </>
  );
};

export default SearchInput;
