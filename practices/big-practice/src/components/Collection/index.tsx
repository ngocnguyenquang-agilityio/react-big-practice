// Libs
import { Link } from 'react-router-dom';

// Types
import { ICollection } from '@interfaces';

const Collection = ({ title, list, type }: ICollection): JSX.Element => {
  return (
    <nav>
      <h3 className='text-xs text-neutral-400 md:block'>{title}</h3>
      <ul
        className='block'
        data-testid='collection'
      >
        <li className='mt-2 flex text-white'>
          <Link
            to='/'
            className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'
          >
            All
          </Link>
        </li>
        {list.map((item, index) => (
          <li
            className='mt-2 flex text-white'
            key={index}
          >
            <Link
              to={`?${type}=${item.value}`}
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
