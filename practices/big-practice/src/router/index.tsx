// Libs
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import Main from '@pages/Main';
const HomePage = lazy(() => import('@pages/HomePage'));
const ProductDetailsPage = lazy(() => import('@pages/ProductDetailsPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: APP_ROUTERS.DETAILS_PAGE,
        element: <ProductDetailsPage />,
      },
      {
        path: APP_ROUTERS.CATEGORY,
        element: <HomePage />,
      },
      {
        path: `${APP_ROUTERS.CATEGORY}/:category`,
        element: <HomePage />,
      },
    ],
  },
]);
