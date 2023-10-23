// Libs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Pages  
import HomePage from '@pages/HomePage';
import Main from '@pages/Main';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            key='home-page'
            path={APP_ROUTERS.HOMEPAGE}
            element={<HomePage />}
          />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;
