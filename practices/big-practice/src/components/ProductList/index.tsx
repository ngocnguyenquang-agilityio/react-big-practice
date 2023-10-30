// Types
import { descendingSort, dynamicSort } from '@helpers/products';
import { IProduct } from '../../interfaces/product';

// Components
import ProductCard from '@components/ProductCard';

const ProductList = ({ products = [], sortBy }: { products: IProduct[]; sortBy: string }) => {
  return (
    <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {products
        .sort(() => {
          if (sortBy === 'high-to-low') {
            return products.sort(dynamicSort('price'));
          }
          if (sortBy === 'low-to-high') {
            return products.sort(descendingSort('price'));
          }

          return true;
        })
        .map((item) => (
          <li
            className='aspect-square transition-opacity animate-fadeIn'
            key={item.id}
          >
            <ProductCard
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
            />
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
