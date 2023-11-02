// Libs
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

// Components
import ProductDetail from '@components/ProductDetail';
import ProductDetailLayout from '@layouts/ProductDetailLayout';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const endpoint = buildQueryProductEndpoint({ productId });

  const { data: product, isLoading, isValidating } = useSWR(endpoint, { keepPreviousData: true });

  return <ProductDetailLayout productDetail={ <ProductDetail product={product} />} />;
};

export default ProductDetailsPage;
