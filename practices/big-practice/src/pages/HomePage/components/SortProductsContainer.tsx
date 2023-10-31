// Libs
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import { Button } from '@components/Button';

type SortProducts = {
  sortCondition: Array<{ value: string; label: string }>;
  selectingItem: string;
  onSelectSort: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SortProducts = ({ sortCondition = [], selectingItem, onSelectSort }: SortProducts): JSX.Element => {
  return (
    <nav>
      <h3 className='text-xs text-neutral-400 md:block'>Sort By</h3>
      <ul className='block'>
        {sortCondition.map((item) => (
          <li
            className={`mt-2 flex text-white ${item.value === selectingItem ? 'font-bold underline' : ''}`}
            key={item.value}
          >
            <Button
              variant='link'
              className='font-normal p-0 text-sm underline-offset-4 hover:underline hover:text-neutral-100'
              value={item.value}
              onClick={onSelectSort}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SortProductContainer = ({ sortConditions = [] }: { sortConditions: Array<{ label: string; value: string }> }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || '';

  const handleSelectSort = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      searchParams.set('sort', e.currentTarget.value);
      setSearchParams(searchParams);
    },
    [searchParams],
  );

  return (
    <SortProducts
      selectingItem={sortBy}
      sortCondition={sortConditions}
      onSelectSort={handleSelectSort}
    />
  );
};

export default SortProductContainer;
