import ProductCard from '@components/ProductCard';
import { IProducts } from '@interfaces';

const ProductList = ({ products = [] }: { products: IProducts[] }) => {
  return (
    <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((item) => (
        <li className='aspect-square transition-opacity animate-fadeIn'>
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
