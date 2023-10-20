import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            key='/'
            path='/'
            element={<Home />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
