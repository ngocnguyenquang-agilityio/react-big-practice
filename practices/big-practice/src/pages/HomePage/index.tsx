// Libs
import useSWR from 'swr';
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Pagination from '@components/Pagination';
import Skeleton from '@components/Skeleton';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Services
import { fetcher } from '@services/fetcher';

// Stores
import { useEndpoint } from '@stores/endpoint';
import { buildAPIEndpoint } from '@helpers/buildQueryProductAPIEndpoint';
import { useState } from 'react';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { endpoint } = useEndpoint();
  const handleChangePage = () => {};

  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page');
  // const { data, isLoading } = useSWR(searchKeyword ? `/search?q=${searchKeyword}` : endpoint, fetcher);
  const { data, isLoading } = useSWR(
    searchKeyword
      ? `/search?q=${searchKeyword}`
      : standingPage
      ? buildAPIEndpoint({ skip: page })
      : buildAPIEndpoint({ skip: 0 }),
    fetcher,
  );

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
      {!searchKeyword && (
        <Pagination
          totalPages={4}
          standingPage={page}
          handleChangePage={() => {}}
        />
      )}
    </HomeLayout>
  );
};

export default HomePage;
