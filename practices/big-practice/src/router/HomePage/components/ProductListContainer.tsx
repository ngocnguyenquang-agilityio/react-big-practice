// Libs
import { useCallback } from 'react';
import useSWR from 'swr';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// Components
import Pagination from '@components/Pagination';
import ProductList from '@components/ProductList';
import Skeleton from '@components/Skeleton';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

export const ProductListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();
  const { product } = useParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page') || '';
  const sort = searchParams.get('sort') || '';
  // const product = searchParams.get('productId') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category, productId: product });

  const { data, isLoading } = useSWR(endpoint, { keepPreviousData: true });
  console.log('endpoint', product);

  const handleChangePagination = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      searchParams.set('page', e.currentTarget.value);

      setSearchParams(searchParams);
    },
    [searchParams],
  );

  const handleClickCard = (e) => {
    searchParams.set('product', e.currentTarget.value.toString());
    setSearchParams(searchParams);
    console.log(product);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton pagination={9} />
      ) : (
        <ProductList
          products={data?.products || []}
          sortBy={sort}
          handleClickCard={handleClickCard}
        />
      )}
      {data?.products.length !== 9 ||
        (!searchKeyword && (
          <Pagination
            totalPages={4}
            standingPage={standingPage || '1'}
            handleChangePagination={handleChangePagination}
          />
        ))}
    </>
  );
};

export default ProductListContainer;
