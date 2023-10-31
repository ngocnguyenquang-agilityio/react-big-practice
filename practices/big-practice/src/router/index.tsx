// Libs
import { createBrowserRouter } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Pages
import HomePage from '@pages/HomePage';
import Main from '@pages/Main';
import ProductDetailsPage from '@pages/ProductDetailsPage';

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
