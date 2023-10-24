interface IProductDetailLayout {
  productDetail: React.ReactNode;
  relatedProduct: React.ReactNode;
}

const ProductDetailLayout = ({ productDetail, relatedProduct }: IProductDetailLayout): JSX.Element => {
  return (
    <div className='mx-auto max-w-screen-2xl px-4'>
      {productDetail}
      <div className='py-8'>
        <h2 className='mb-4 text-2xl font-bold text-white'>Related Products</h2>
        {/* <ul className='flex w-full gap-4 overflow-x-auto pt-1'>
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <ProductCard
              name='Test Product'
              price={20}
              image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
            />
          </li>
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <ProductCard
              name='Test Product'
              price={20}
              image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
            />
          </li>
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
            <ProductCard
              name='Test Product'
              price={20}
              image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
            />
          </li>
        </ul> */}
        {relatedProduct}
      </div>
    </div>
  );
};

export default ProductDetailLayout;
