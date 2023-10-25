// Libs
import useSWR from 'swr';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Loading from '@components/Loading';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Services
import { request } from '@services/request';

// Constants
import { BASE_URL } from '@constants';

// Store
import { useEndpoint } from '@stores/endpoint';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const { endpoint } = useEndpoint();
  const { data, isLoading } = useSWR(`${BASE_URL + endpoint}`, request);

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
