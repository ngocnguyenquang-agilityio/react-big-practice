// Libs
import { ChangeEvent, useCallback, useState } from 'react';

// Icons
import { CartIcon, LogoIcon } from '@assets/icons';

// Components
import { Button } from '@components/Button';
import Cart from '@components/Cart';
import SearchInput from '@components/SearchInput';

// Store
import { useEndpoint } from '@stores/endpoint';

// TODO: Update type when implement function

const Header = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { updateEndpoint } = useEndpoint();

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setTimeout(() => {
      updateEndpoint(`/search?q=${inputValue}`);
    }, 1000);
  }, []);

  const handleToggleCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <header className='relative flex items-center justify-between p-4 lg:px-6'>
      <div className='flex w-full items-center'>
        <div className='flex w-full md:w-1/3 items-center'>
          <div className='mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6'>
            <Button
              variant='link'
              size='icon'
            >
              <LogoIcon />
            </Button>
            <a
              className='ml-2 text-sm font-medium uppercase text-white'
              href=''
            >
              acme store
            </a>
          </div>
          <ul className='gap-6 text-sm md:flex md:items-center'>
            <li className='underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer'>
              All
            </li>
            <li className='underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer'>
              Shirts
            </li>
          </ul>
        </div>
        <div className='justify-center md:flex md:w-1/3'>
          <SearchInput
            type='text'
            placeholder='Search Products...'
            onChange={handleSearch}
          />
        </div>
        <div className='flex justify-end md:w-1/3'>
          {!isOpenCart ? (
            <Button
              variant='outline'
              size='icon'
              onClick={handleToggleCart}
            >
              <CartIcon />
            </Button>
          ) : (
            <Cart handleToggleCart={handleToggleCart} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
