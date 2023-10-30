// Libs
import useSWR from 'swr';
import { Form, useSearchParams } from 'react-router-dom';

// Components
import Pagination from '@components/Pagination';
import ProductList from '@components/ProductList';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

export const ProductListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page');
  const category = searchParams.get('category') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category, productId: null });

  const { data } = useSWR(endpoint, { keepPreviousData: true });

  const handleChangePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const standingPage = target.value;

    setSearchParams({ category, page: standingPage });
  };

  return (
    <>
      <ProductList products={data?.products || []} />
      <Form
        className={`delay-1000 relative right-0 bottom-0 ${
          data?.products.length && !searchKeyword ? 'block' : 'hidden'
        }`}
      >
        <Pagination
          totalPages={4}
          standingPage={standingPage || '1'}
          handleChangePagination={handleChangePagination}
        />
      </Form>
    </>
  );
};

export default ProductListContainer;
