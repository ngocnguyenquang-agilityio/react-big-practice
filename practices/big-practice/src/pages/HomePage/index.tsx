// Components
import ProductCard from "@components/ProductCard";
import HomeLayout from "@layouts/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <li className="aspect-square transition-opacity animate-fadeIn">
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
        </li>
        <li className="aspect-square transition-opacity animate-fadeIn">
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
        </li>
        <li className="aspect-square transition-opacity animate-fadeIn">
          <ProductCard
            name='Test Product'
            price={20}
            image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
          />
        </li>
      </ul>
    </HomeLayout>
  )
};

export default HomePage;
