// Libs
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Types
import { COLLECTION_TYPE } from '@interfaces';
import ProductListContainer from './ProductListContainer';

const mockListCollection = [
  { value: 'smartphones', label: 'Phone' },
  { value: 'laptops', label: 'Laptop' },
];

const mockSort = [
  { value: 'low-to-high', label: 'Price: Low to High' },
  { value: 'high-to-low', label: 'Price: High to Low' },
];

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <HomeLayout
      leftAside={
        <Collection
          list={mockListCollection}
          title='Collection'
          type={COLLECTION_TYPE.CATEGORY}
          selected={category}
        />
      }
      rightAside={
        <Collection
          list={mockSort}
          title='Sort by'
          type={COLLECTION_TYPE.SORT}
        />
      }
    >
      <div className='relative'>
        <ProductListContainer />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
