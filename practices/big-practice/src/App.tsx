// Libs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Layouts
import HomeLayout from '@layouts/HomeLayout';
import MainLayout from '@layouts/MainLayout';

// Pages
import ListProductPage from '@pages/ListProductsPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            key='/'
            path='/'
            element={<HomeLayout />}
            children={
              [
                <Route
                  key='list-products'
                  path={APP_ROUTERS.LIST_PRODUCTS}
                  element={<ListProductPage />}
                />
              ]
            }
          />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;
