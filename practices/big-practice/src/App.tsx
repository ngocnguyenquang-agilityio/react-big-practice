// Libs
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Services
import { fetcher } from '@services/fetcher';

// Router
import { router } from './router';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something wrong</div>}>
      <SWRConfig value={{ provider: () => new Map(), fetcher }}>
        <RouterProvider router={router} />
      </SWRConfig>
    </ErrorBoundary>
  );
}

export default App;
