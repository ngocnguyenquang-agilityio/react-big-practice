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

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

// Types
import { COLLECTION_TYPE } from '@interfaces';

const mockListCollection = [
  { value: 'smartphones', label: 'Phone' },
  { value: 'laptops', label: 'Laptop' },
];

const mockSort = [
  { value: 'low-to-high', label: 'Price: Low to High' },
  { value: 'high-to-low', label: 'Price: High to Low' },
];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page');
  const category = searchParams.get('category') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category, productId: null });

  const { data, isLoading } = useSWR(endpoint);

  const handleChangePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const standingPage = target.value;

    setSearchParams({ category, page: standingPage });
  };

  return (
    <HomeLayout
      leftAside={
        <Collection
          list={mockListCollection}
          title='Collection'
          type={COLLECTION_TYPE.CATEGORY}
        />
      }
      rightAside={
        <Collection
          list={mockSort}
          title='Sort by'
          type={COLLECTION_TYPE.SORT}
        />
      }
    >
      {isLoading ? <Skeleton pagination={9} /> : <ProductList products={data.products} />}
      {!(searchKeyword || category) && (
        <Pagination
          totalPages={4}
          standingPage={standingPage || '1'}
          handleChangePagination={handleChangePagination}
        />
      )}
    </HomeLayout>
  );
};

export default HomePage;
