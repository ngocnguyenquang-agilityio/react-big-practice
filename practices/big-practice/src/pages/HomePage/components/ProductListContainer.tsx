// Libs
import { useCallback } from 'react';
import useSWR from 'swr';
import { useParams, useSearchParams } from 'react-router-dom';

// Components
import Pagination from '@components/Pagination/Pagination';
import ProductList from '@components/ProductList/ProductList';
import Skeleton from '@components/Skeleton/Skeleton';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

export const ProductListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page') || '';
  const sort = searchParams.get('sort') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category });

  const { data, isLoading } = useSWR(endpoint, { keepPreviousData: true, suspense: true });

  const totalPage = parseInt((data.total / 9).toFixed(0)) + 1;

  const handleChangePagination = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      searchParams.set('page', e.currentTarget.value);

      setSearchParams(searchParams);
    },
    [searchParams],
  );

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

      {data.total > 9 && (
        <Pagination
          totalPages={totalPage}
          standingPage={standingPage || '1'}
          handleChangePagination={handleChangePagination}
        />
      )}
    </>
  );
};

export default ProductListContainer;
