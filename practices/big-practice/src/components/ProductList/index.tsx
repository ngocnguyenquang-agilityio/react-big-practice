// Types
import { IProduct } from '@interfaces';

// Components
import ProductCard from '@components/ProductCard';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = ({
  products = [],
  sortBy,
  handleClickCard,
}: {
  products: IProduct[];
  sortBy: string;
  handleClickCard: any;
}) => {
  // const navigate = useNavigate();
  // const handleClickCard = (e) => {
  //   navigate(`/product/${e.currentTarget.value.toString()}`);
  // };

  return (
    <ul
      data-testid='product-list'
      className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    >
      {products
        .sort((a, b): any => {
          if (sortBy === 'low-to-high') {
            return a.price > b.price ? 1 : -1;
          }
          if (sortBy === 'high-to-low') {
            return a.price < b.price ? 1 : -1;
          }
        })
        .map((item) => (
          <li
            className='aspect-square transition-opacity animate-fadeIn'
            key={item.id}
            value={item.id}
            onClick={handleClickCard}
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
