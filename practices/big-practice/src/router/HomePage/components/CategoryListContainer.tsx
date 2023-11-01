// Libs
import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';

// Helpers
import { isEmpty } from '@helpers/utils';

export const Categories = memo(
  ({
    categories = [],
    selectingItem,
  }: {
    categories: Array<{ value: string; label: string }>;
    selectingItem?: string;
  }): JSX.Element => {
    return (
      <nav>
        <h3 className='text-xs text-neutral-400 md:block'>Category</h3>
        <ul
          className='block'
          data-testid='categories'
        >
          {categories.map((item) => (
            <li
              className={`mt-2 flex text-white ${selectingItem === item.value ? 'font-bold underline' : ''}`}
              key={item.value}
            >
              <Link
                to={isEmpty(item.value) ? '/' : `/category/${item.value}`}
                className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

const CategoryListContainer = ({ categories }: { categories: Array<{ label: string; value: string }> }) => {
  const { category } = useParams();
  return (
    <Categories
      categories={categories}
      selectingItem={category}
    />
  );
};

export default CategoryListContainer;
