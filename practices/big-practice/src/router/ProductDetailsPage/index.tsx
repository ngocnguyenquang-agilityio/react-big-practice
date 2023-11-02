// Libs
import useSWR from 'swr';
import { useParams } from 'react-router-dom';

// Components
import ProductDetail from '@components/ProductDetail';
import ProductDetailLayout from '@layouts/ProductDetailLayout';
import Skeleton from '@components/Skeleton';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const endpoint = buildQueryProductEndpoint({ productId });

  const { data: product, isLoading, isValidating } = useSWR(endpoint, { keepPreviousData: true });

  return (
    <>
      {isLoading || isValidating ? (
        <Skeleton />
      ) : (
        <ProductDetailLayout productDetail={!isLoading && <ProductDetail product={product} />} />
      )}
    </>
  );
};

export default ProductDetailsPage;
