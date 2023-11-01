// Libs
import { ChangeEvent, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// Icons
import { CartIcon, LogoIcon } from '@assets/icons';

// Components
import { Button } from '@components/Button';
import SearchInput from '@components/SearchInput';

// Helpers
import { debounce } from '@helpers/utils';

// Constants
import { APP_ROUTERS, headerItems } from '@constants';

const Header = ({ onToggleCart }: { onToggleCart: () => void }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchKeyword = searchParams.get('search');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value;

    navigate(`/?search=${inputValue.trim()}`);
  }, []);

  const searchWithDebounce = debounce(handleSearch, 1000);

  return (
    <header className='relative flex items-center justify-between p-4 lg:px-6'>
      <div className='flex w-full items-center'>
        <div className='flex w-full md:w-1/3 items-center'>
          <Link
            to={APP_ROUTERS.HOMEPAGE}
            reloadDocument
            className='mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6'
          >
            <LogoIcon />
            <span className='ml-2 text-sm font-medium uppercase text-white'>acme store</span>
          </Link>
          <ul
            data-testid='header-items'
            className='gap-6 text-sm md:flex md:items-center'
          >
            {headerItems.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                className='underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer'
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className='justify-center md:flex md:w-1/3'>
          <SearchInput
            type='text'
            placeholder='Search Products...'
            onChange={searchWithDebounce}
            defaultValue={searchKeyword || ''}
          />
        </div>
        <div className='flex justify-end md:w-1/3'>
          <Button
            variant='outline'
            size='icon'
            onClick={onToggleCart}
          >
            <CartIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
