// Libs
import { Link } from 'react-router-dom';

// Types
import { ICollection } from '@interfaces';

const Collection = ({ title, list, selected }: ICollection): JSX.Element => {
  return (
    <nav>
      <h3 className='text-xs text-neutral-400 md:block'>{title}</h3>
      <ul
        className='block'
        data-testid='collection'
      >
        {list.map((item) => (
          <li
            className={`mt-2 flex text-white ${selected === item.value ? 'font-bold underline' : ''}`}
            key={item.value}
          >
            <Link
              to={`/category/${item.value}`}
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
