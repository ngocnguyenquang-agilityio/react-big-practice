// Libs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Constants
import { APP_ROUTERS } from '@constants';

// Services
import { fetcher } from '@services/fetcher';

// Pages
import HomePage from '@pages/HomePage';
import Main from '@pages/Main';
import ProductDetailsPage from '@pages/ProductDetailsPage';

function App() {
  return (
    <SWRConfig value={{ provider: () => new Map(), fetcher }}>
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route
              key='home-page'
              path={APP_ROUTERS.HOMEPAGE}
              element={<HomePage />}
            />
            <Route
              key='product-details-page'
              path={APP_ROUTERS.DETAILSPAGE}
              element={<ProductDetailsPage />}
            />
          </Route>
        </Routes>
      </Router>
    </SWRConfig>
  );
}

export default App;
