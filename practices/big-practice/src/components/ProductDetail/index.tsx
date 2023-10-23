import { Button } from '@components/Button';

const ProductDetail = () => {
  return (
    <div className='flex flex-col rounded-lg border p-8 border-neutral-800 bg-black md:p-12 lg:flex-row lg:gap-8'>
      <div className='h-full w-full basis-full lg:basis-4/6'>
        <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
          <img
            src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
            className='h-full w-full object-contain'
          />
        </div>
        <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
          <li className='h-20 w-20'>
            <a className='h-full w-full' href=''>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black border-2 border-blue-600'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
                  alt=''
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='basis-full lg:basis-2/6'>
        <div className='mb-6 flex flex-col border-b pb-6 border-neutral-700'>
          <h1 className='mb-2 text-5xl font-medium'>Acme Circles T-Shirt</h1>
          <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
            <p>
              $20.00
              <span className='ml-1 inline'>USD</span>
            </p>
          </div>
        </div>
        <div className='mb-8'>
          <p className='mb-4 text-sm uppercase tracking-wide'>Color</p>
          <ul className='flex flex-wrap gap-3'>
            <li>
              <Button variant='secondary'>Black</Button>
            </li>
            <li>
              <Button variant='secondary'>White</Button>
            </li>
          </ul>
        </div>
        <div className='mb-8'>
          <p className='mb-4 text-sm uppercase tracking-wide'>Color</p>
          <ul className='flex flex-wrap gap-3'>
            <li>
              <Button variant='secondary'>XS</Button>
            </li>
            <li>
              <Button variant='secondary'>S</Button>
            </li>
            <li>
              <Button variant='secondary'>M</Button>
            </li>
            <li>
              <Button variant='secondary'>L</Button>
            </li>
          </ul>
        </div>
        <Button size='xl'>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
