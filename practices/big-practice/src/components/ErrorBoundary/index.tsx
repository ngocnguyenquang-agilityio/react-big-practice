// Components
import { Button } from '@components/Button';
import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  const onClickReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className='error-page min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold text-red-600 mb-4'>Something went wrong</h1>
        <p className='text-2xl text-gray-300 font-semibold'>{error.message}</p>
        <Button
          className='mt-4'
          onClick={onClickReloadPage}
        >
          Reload Page
        </Button>
      </div>
    </div>
  );
};
