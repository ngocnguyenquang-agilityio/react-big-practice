// Libs
import useSWR from 'swr';
import { useParams, useSearchParams } from 'react-router-dom';

// Components
import Pagination from '@components/Pagination';
import ProductList from '@components/ProductList';
import Skeleton from '@components/Skeleton';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

export const ProductListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page');
  const sort = searchParams.get('sort') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category, productId: null });

  const { data, isLoading } = useSWR(endpoint, { keepPreviousData: true });

  const handleChangePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const standingPage = target.value;

    setSearchParams({ category, page: standingPage, sort });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton pagination={9} />
      ) : (
        <ProductList
          products={data?.products || []}
          sortBy={sort}
        />
      )}
      {!searchKeyword && (
        <Pagination
          totalPages={4}
          standingPage={standingPage || '1'}
          handleChangePagination={handleChangePagination}
        />
      )}
    </>
  );
};

export default ProductListContainer;
