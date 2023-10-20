import Collection from "@components/Collection"
import ProductCard from "@components/ProductCard"

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

const Home = () => {
  return (
    <>
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Collection list={mockListCollection} title="Collection" />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
        </ul>
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <Collection list={mockListCollection} title="Sort by" />
      </div>
    </>
  )
}

export default Home
