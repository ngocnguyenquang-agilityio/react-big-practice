// Libs
import { useParams } from 'react-router-dom';

// Components
import Collection from '@components/Collection';

const CategoryListContainer = ({ categories }: { categories: Array<{ label: string; value: string }> }) => {
  const { category } = useParams();
  return (
    <Collection
      categories={categories}
      selectingItem={category}
    />
  );
};

export default CategoryListContainer;
