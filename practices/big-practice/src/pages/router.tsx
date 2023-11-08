// Libs
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import Main from './Main';
import { ErrorBoundary } from '@components/ErrorBoundary';

const HomePage = lazy(() => import('./HomePage'));
const ProductDetailsPage = lazy(() => import('./ProductDetailsPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `${APP_ROUTERS.DETAILS_PAGE}/:productId`,
        element: <ProductDetailsPage />,
      },
      {
        path: `${APP_ROUTERS.CATEGORY}/:category`,
        element: <HomePage />,
      },
    ],
  },
]);
