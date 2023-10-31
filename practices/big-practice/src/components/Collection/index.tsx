// Libs
import { Link } from 'react-router-dom';

// Types
import { ICategoryList } from '@interfaces';

const Collection = ({ categories = [], selectingItem }: ICategoryList): JSX.Element => {
  return (
    <nav>
      <h3 className='text-xs text-neutral-400 md:block'>Category</h3>
      <ul
        className='block'
        data-testid='collection'
      >
        {categories.map((item) => (
          <li
            className={`mt-2 flex text-white ${selectingItem === item.value ? 'font-bold underline' : ''}`}
            key={item.value}
          >
            <Link
              to={item.value ? '/' : `/category/${item.value}`}
              className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Collection;
