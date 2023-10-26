import { Button } from '@components/Button';
import { useState } from 'react';

interface IPagination {
  totalPages: number;
  standingPage?: number;
  handleChangePage: () => void;
}

const Pagination = ({ totalPages, standingPage = 1, handleChangePage }: IPagination) => {
  const listPage = [];
  const [page, setPage] = useState(standingPage);


  for (let i = 1; i <= totalPages; i++) {
    listPage.push(
      <li key={i}>
        <Button
          size='icon'
          variant='secondary'
          className={`${standingPage === i ? 'bg-blue-600' : ''}`}
          onClick={() => console.log(i)}
        >
          {i}
        </Button>
      </li>,
    );
  }

  return (
    <nav className='pt-4 flex justify-end'>
      <ul className='inline-flex -space-x-px text-md gap-4'>{listPage}</ul>
    </nav>
  );
};

export default Pagination;
