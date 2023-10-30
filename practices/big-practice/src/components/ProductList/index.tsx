// Types
import { descendingSort, ascendingSort } from '@helpers/products';
import { IProduct } from '@interfaces';

// Components
import ProductCard from '@components/ProductCard';

const ProductList = ({ products = [], sortBy }: { products: IProduct[]; sortBy: string }) => {
  return (
    <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {products && sortBy === 'low-to-high'
        ? products.sort(ascendingSort('price')).map((item) => (
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
          ))
        : products && sortBy === 'high-to-low'
        ? products.sort(descendingSort('price')).map((item) => (
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
          ))
        : products.map((item) => (
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
