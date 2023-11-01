// Icons
import { LogoIcon } from '@assets/icons';

// Components
import { Button } from '@components/Button';

// Constants
import { footerItems } from '@constants';

const Footer = (): JSX.Element => {
  return (
    <footer className='text-sm text-neutral-400'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 border-t px-6 py-12 text-sm border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0'>
        <Button
          variant='link'
          size='icon'
        >
          <LogoIcon />
        </Button>

        <nav>
          <ul data-testid='footer-items'>
            {footerItems.map((item) => (
              <li
                key={item.value}
                className='block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer'
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        <div className='md:ml-auto'>
          <a className='flex h-8 w-max flex-none items-center justify-center rounded-md border text-xs border-neutral-700 bg-black text-white'>
            <span className='px-3'>▲</span>
            <hr className='h-full border-r border-neutral-700' />
            <span className='px-3'>Deploy</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
