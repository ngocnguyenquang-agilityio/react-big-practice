// Libs
import { Link } from 'react-router-dom';

// Components
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import { Input } from '@components/Input/Input';

// Icons
import logoIcon from '@assets/logoIcon.svg';

// Constants
import { APP_ROUTERS } from '@constants';

export const ShippingForm = () => {
  return (
    <>
      <div className='flex items-center justify-center border border-neutral-700 bg-black h-[50px] w-[50px] rounded-xl'>
        <Link
          to={APP_ROUTERS.HOMEPAGE}
          reloadDocument
        >
          <Icon
            svg={logoIcon}
            name='logo-icon'
            width={30}
            height={30}
          />
        </Link>
      </div>
      <form>
        <fieldset className='mt-6'>
          <legend className='text-lg font-bold mb-2'>Contact</legend>
          <label
            htmlFor='email-or-phone'
            className='block mb-2 text-sm font-medium text-neutral-400'
          >
            Email or phone
          </label>
          <Input
            type='text'
            name='email-or-phone'
            id='email-or-phone'
            placeholder='Email or mobile phone number'
            className='py-3 focus:outline-none focus:border-blue-600'
          />
        </fieldset>

        <fieldset className='mt-6'>
          <legend className='text-lg font-bold mb-2'>Shipping address</legend>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-neutral-400'
            >
              Your email
            </label>
            <Input
              type='text'
              name='email'
              id='email'
              placeholder='name@flowbite.com'
              className='py-3 focus:outline-none focus:border-blue-600'
            />
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-4 group'>
              <label
                htmlFor='first-name'
                className='block mb-2 text-sm font-medium text-neutral-400'
              >
                First name
              </label>
              <Input
                id='first-name'
                name='first-name'
                placeholder='First name'
                className='py-3 focus:outline-none focus:border-blue-600'
              />
            </div>
            <div className='relative z-0 w-full mb-4 group'>
              <label
                htmlFor='last-name'
                className='block mb-2 text-sm font-medium text-neutral-400'
              >
                Last name
              </label>
              <Input
                type='text'
                id='last-name'
                name='last-name'
                placeholder='Last name'
                className='py-3 focus:outline-none focus:border-blue-600'
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='address'
              className='block mb-2 text-sm font-medium text-neutral-400'
            >
              Address
            </label>
            <Input
              type='text'
              id='address'
              name='address'
              placeholder='Address'
              className='py-3 focus:outline-none focus:border-blue-600'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='apartment'
              className='block mb-2 text-sm font-medium text-neutral-400'
            >
              Apartment
            </label>
            <Input
              type='text'
              id='apartment'
              name='apartment'
              placeholder='Apartment, suite, etc.'
              className='py-3 focus:outline-none focus:border-blue-600'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='city'
              className='block mb-2 text-sm font-medium text-neutral-400'
            >
              City
            </label>
            <Input
              type='text'
              id='city'
              name='city'
              placeholder='City'
              className='py-3 focus:outline-none focus:border-blue-600'
            />
          </div>
          <div className='flex justify-end'>
            <Button
              className='px-5 py-8 rounded-md'
              size='lg'
            >
              Continue to shipping
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

const ShippingFormContainer = () => {
  return <ShippingForm />;
};

export default ShippingFormContainer;
