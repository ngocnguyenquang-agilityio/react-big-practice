type SortProducts = {
  sortAscProduct: () => void;
  sortDescProduct: () => void;
};

const SortProducts = ({ sortAscProduct, sortDescProduct }: SortProducts): JSX.Element => {
  return (
    <nav>
      <h3 className='text-xs text-neutral-400 md:block'>Sort By</h3>
      <ul className='block'>
        <li
          className={`mt-2 flex text-white`}
          key='low-to-high'
          value='low-to-high'
          onClick={sortAscProduct}
        >
          <a className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'>Low to High</a>
        </li>
        <li
          className={`mt-2 flex text-white`}
          key='high-to-low'
          value='high-to-low'
          onClick={sortDescProduct}
        >
          <a className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'>High to Low</a>
        </li>
      </ul>
    </nav>
  );
};

export default SortProducts;
