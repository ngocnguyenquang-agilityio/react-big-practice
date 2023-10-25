// Libs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Pages
import HomePage from '@pages/HomePage';
import Main from '@pages/Main';
import ProductDetailsPage from '@pages/ProductDetailsPage';
import { SWRConfig } from 'swr';
import { request } from '@services/request';

function App() {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
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
