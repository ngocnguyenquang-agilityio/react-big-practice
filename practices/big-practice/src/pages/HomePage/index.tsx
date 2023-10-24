// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import HomeLayout from '@layouts/HomeLayout';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];
// TODO: Will remove after fetching
const mockProductList = [
  {
    name: 'Test Product 1',
    price: 20,
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
  },

  {
    name: 'Test Product 2',
    price: 10,
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
  },
];

const HomePage = () => {
  return (
    <HomeLayout
      leftAside={
        <Collection
          list={mockListCollection}
          title='Collection'
        />
      }
      rightAside={
        <Collection
          list={['Price: Low to Hight', 'Price: High to Low']}
          title='Sort by'
        />
      }
    >
      <ProductList products={mockProductList} />
    </HomeLayout>
  );
};

export default HomePage;
