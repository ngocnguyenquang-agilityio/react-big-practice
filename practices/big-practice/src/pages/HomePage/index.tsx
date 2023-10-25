// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Loading from '@components/Loading';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Hooks
import { useLoader } from '@hooks/useLoader';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const { data, isLoading } = useLoader();

  if (isLoading) return <Loading />;

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
          list={['Price: Low to High', 'Price: High to Low']}
          title='Sort by'
        />
      }
    >
      <ProductList products={data.products} />
    </HomeLayout>
  );
};

export default HomePage;
