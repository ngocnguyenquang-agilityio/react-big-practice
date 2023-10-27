// Libs
import useSWR from 'swr';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import Pagination from '@components/Pagination';
import Skeleton from '@components/Skeleton';

// Layouts
import HomeLayout from '@layouts/HomeLayout';
import { buildQueryProductEndpoint } from '@helpers/products';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page');
  const category = searchParams.get('category');

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category, productId: null });

  const { data, isLoading } = useSWR(endpoint);

  const handleChangePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const standingPage = target.value || '';

    setSearchParams({ page: standingPage });
  };

  // TODO: Remove
  useEffect(() => {
    if (searchParams.get('page') === null) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

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
      {isLoading ? <Skeleton pagination={9} /> : <ProductList products={data.products} />}
      {!searchKeyword && (
        <Pagination
          totalPages={4}
          standingPage={standingPage}
          handleChangePagination={handleChangePagination}
        />
      )}
    </HomeLayout>
  );
};

export default HomePage;
