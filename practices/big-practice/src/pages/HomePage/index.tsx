// Libs
import useSWR from 'swr';
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Skeleton from '@components/Skeleton';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Services
import { fetcher } from '@services/fetcher';

// Stores
import { useEndpoint } from '@stores/endpoint';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const { endpoint } = useEndpoint();
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('search');
  const { data, isLoading } = useSWR(searchKeyword ? `/search?q=${searchKeyword}` : endpoint, fetcher);

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
      {isLoading ? <Skeleton /> : <ProductList products={data.products} />}
    </HomeLayout>
  );
};

export default HomePage;
