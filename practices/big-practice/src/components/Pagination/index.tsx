// Component
import { Button } from '@components/Button';

interface IPagination {
  totalPages: number;
  standingPage: null | string;
  handleChangePagination: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination = ({ totalPages, standingPage, handleChangePagination }: IPagination) => {
  return (
    <nav className='pt-4 flex justify-end'>
      <ul className='inline-flex -space-x-px text-md gap-4'>
        {Array.apply(0, new Array(totalPages)).map((_, idx) => {
          const isActivePage = (idx + 1).toString() === standingPage;

          return (
            <li key={idx}>
              <Button
                size='icon'
                variant='secondary'
                value={(idx + 1).toString()}
                onClick={handleChangePagination}
                className={isActivePage ? 'bg-blue-600' : ''}
              >
                {(idx + 1).toString()}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
