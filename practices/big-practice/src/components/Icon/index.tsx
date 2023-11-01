export const Icon = ({svg}: {svg: string}) => {
  return (
    <img className='w-5 h-5'
      src={svg}
      alt='search-icon'
    />
  );
};
