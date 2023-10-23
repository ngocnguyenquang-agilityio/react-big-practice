import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from '@layouts/HomeLayout';
import MainLayout from '@layouts/MainLayout';
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
                  key='/list-products'
                  path={`/list-products`}
                  element={<ListProductPage />}
                />
              ]
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
