// Components
import { Button } from '@components/Button';
import { IProduct } from '@interfaces';

const ProductDetail = ({ product }: { product: IProduct }) => {
  return (
    <div className='flex flex-col rounded-lg border p-8 border-neutral-800 bg-black md:p-12 lg:flex-row lg:gap-8'>
      <div className='h-full w-full basis-full lg:basis-4/6'>
        <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
          <img
            src={product.thumbnail}
            className='h-full w-full object-contain'
          />
        </div>
        <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
          {/* TODO: Update 'image' prop type to 'string[]' and use map function to render */}
          <li className='h-20 w-20'>
            <a
              className='h-full w-full'
              href=''
            >
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black border-2 border-blue-600'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='basis-full lg:basis-2/6'>
        <div className='mb-6 flex flex-col border-b pb-6 border-neutral-700'>
          <h1 className='mb-2 text-5xl text-white font-medium'>Acme Circles T-Shirt</h1>
          <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
            <p>
              {'$' + `${product.price}`}
              <span className='ml-1 inline'>USD</span>
            </p>
          </div>
        </div>
        <Button size='xl'>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
