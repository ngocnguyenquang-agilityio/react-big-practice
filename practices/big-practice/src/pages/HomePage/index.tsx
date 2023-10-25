// Libs
import useSWR from 'swr';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Loading from '@components/Loading';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Services
import { fetcher } from '@services/fetcher';

// Constants
import { DEFAULT_ENDPOINT } from '@constants';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const { data, isLoading } = useSWR(`${DEFAULT_ENDPOINT}`, fetcher);

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
