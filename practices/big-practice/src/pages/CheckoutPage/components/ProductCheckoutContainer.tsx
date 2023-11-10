export const ProductCheckout = () => {
  return (
    <div className='relative flex w-full flex-col px-4 py-4'>
      <div className='pb-6'>
        <div className='absolute z-40 -mt-2 ml-[55px]'>
          <div className='ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200'>
            1
          </div>
        </div>
        <div className='z-30 flex flex-row space-x-4 justify-between'>
          <div className='flex gap-4'>
            <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
              <img
                className='h-full w-full object-cover'
                data-testid='item-thumbnail'
                loading='lazy'
                src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75'
              />
            </div>
            <span className='text-md'>Product 1</span>
          </div>
          <div className='flex items-center'>
            <p className='space-y-2 text-right text-md'>$120</p>
          </div>
        </div>
      </div>
      <div className='py-4 text-sm text-neutral-400'>
        <div className='mb-3 flex items-center justify-between'>
          <p className='text-white'>Shipping</p>
          <p className='text-sm text-white font-bold'>$0.00</p>
        </div>
        <div className='mb-3 flex items-center justify-between'>
          <p className='text-white'>Shipping</p>
          <p className='text-sm text-neutral-400'>Calculated at next step</p>
        </div>
        <div className='mb-3 flex items-center justify-between pb-1 pt-1 text-white'>
          <p className='font-bold text-xl'>Total</p>
          <div className='flex items-baseline'>
            <span className='inline pr-2 text-neutral-400 text-sm'>USD</span>
            <p className='text-xl font-bold'>$120</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCheckoutContainer = () => {
  return <ProductCheckout />;
};

export default ProductCheckoutContainer;
