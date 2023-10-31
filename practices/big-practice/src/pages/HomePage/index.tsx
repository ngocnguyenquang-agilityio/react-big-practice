// Libs
import { useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';
import SortProducts from './components/SortProducts';

// Layouts
import HomeLayout from '@layouts/HomeLayout';

// Types
import ProductListContainer from './ProductListContainer';

// Constants
import { CATEGORIES, SORT_CONDITIONS } from '@constants';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const { category = '' } = useParams();

  const handleSelectSort = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const sortValue = target.value;

    setSearchParams({ sort: sortValue });
  }, []);

  return (
    <HomeLayout
      leftAside={
        <Collection
          categories={CATEGORIES}
          selectingItem={category}
        />
      }
      rightAside={
        <SortProducts
          sortCondition={SORT_CONDITIONS}
          selectingItem={sort}
          onSelectSort={handleSelectSort}
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
