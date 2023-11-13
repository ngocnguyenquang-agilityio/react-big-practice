// Libs
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import { Input } from '@components/Input/Input';

// Icons
import logoIcon from '@assets/logoIcon.svg';

// Constants
import { APP_ROUTERS } from '@constants';

interface IShippingFormSubmit {
  phone: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

const schema = yup
  .object({
    phone: yup.number().required(),
    email: yup.string().email('Invalid email').required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
  })
  .required();

export const ShippingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IShippingFormSubmit>({
    mode: 'onSubmit',
    defaultValues: {},
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IShippingFormSubmit) => {
    // TODO: Handle Submit form
    alert(JSON.stringify(data));
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='mt-6'>
          <legend className='text-lg font-bold mb-2'>Contact</legend>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-neutral-400'
          >
            Phone
          </label>
          <Input
            type='text'
            id='phone'
            placeholder='Mobile phone number'
            variant={errors?.phone ? 'error' : 'secondary'}
            className='py-3'
            {...register('phone')}
          />
          {errors?.phone?.message && <p className='text-sm text-red-500'>Enter phone number</p>}
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
              id='email'
              placeholder='name@flowbite.com'
              variant={errors?.email ? 'error' : 'secondary'}
              className='py-3'
              {...register('email')}
            />
            {errors?.email?.message && <p className='text-sm text-red-500'>{errors?.email?.message}</p>}
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-4 group'>
              <label
                htmlFor='firstName'
                className='block mb-2 text-sm font-medium text-neutral-400'
              >
                First name
              </label>
              <Input
                type='text'
                id='firstName'
                placeholder='First name'
                variant={errors?.email ? 'error' : 'secondary'}
                className='py-3'
                {...register('firstName')}
              />
              {errors?.firstName?.message && <p className='text-sm text-red-500'>{errors?.firstName?.message}</p>}
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
                placeholder='Last name'
                variant={errors?.lastName ? 'error' : 'secondary'}
                className='py-3'
                {...register('lastName')}
              />
              {errors?.lastName?.message && <p className='text-sm text-red-500'>{errors?.lastName?.message}</p>}
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
              placeholder='Address'
              variant={errors?.address ? 'error' : 'secondary'}
              className='py-3'
              {...register('address')}
            />
            {errors?.address?.message && <p className='text-sm text-red-500'>{errors?.address?.message}</p>}
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
              variant='secondary'
              className='py-3'
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
              placeholder='City'
              variant={errors?.city ? 'error' : 'secondary'}
              className='py-3'
              {...register('city')}
            />
            {errors?.city?.message && <p className='text-sm text-red-500'>{errors?.city?.message}</p>}
          </div>
          <div className='flex justify-end'>
            <Button
              type='submit'
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
