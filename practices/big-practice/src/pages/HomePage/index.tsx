// Libs
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Types
import { COLLECTION_TYPE } from '@interfaces';
import ProductListContainer from './ProductListContainer';

// Constants
import { CATEGORIES } from '@constants';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';

  return (
    <HomeLayout
      leftAside={
        <Collection
          list={CATEGORIES}
          title='Collection'
          type={COLLECTION_TYPE.CATEGORY}
          selected={category}
        />
      }
      rightAside={
        <Collection
          list={[
            { value: 'low-to-high', label: 'Price: Low to High' },
            { value: 'high-to-low', label: 'Price: High to Low' },
          ]}
          title='Sort by'
          type={COLLECTION_TYPE.SORT}
          selected={sort}
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
