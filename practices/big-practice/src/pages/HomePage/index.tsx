// Libs
import { useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';
import SortProducts from './components/SortProducts';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Types
import ProductListContainer from './ProductListContainer';

// Constants
import { CATEGORIES } from '@constants';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  const sortAscProduct = () => {
    setSearchParams({ sort: 'low-to-high' });
  };

  const sortDescProduct = () => {
    setSearchParams({ sort: 'high-to-low' });
  };

  return (
    <HomeLayout
      leftAside={
        <Collection
          list={CATEGORIES}
          title='Collection'
          selected={category}
        />
      }
      rightAside={
        <SortProducts
          sortAscProduct={sortAscProduct}
          sortDescProduct={sortDescProduct}
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
