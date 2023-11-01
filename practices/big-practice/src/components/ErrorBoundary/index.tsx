// Components
import { Button } from "@components/Button";

export const ErrorBoundary = () => {
  return (
    <div className='error-page min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold text-red-600 mb-4'>Something went wrong</h1>
        <p className='text-2xl text-gray-300 font-semibold'>Unknown Error</p>
        <Button
          className='mt-4'
          onClick={() => window.location.reload()}
        >
          Reload Page
        </Button>
      </div>
    </div>
  );
};
