// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MainLayout from '@layouts/MainLayout/MainLayout';
import Loading from '@components/Loading/Loading';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

// Stores
import { useCartStore } from '@stores/cartStore';

const Main = () => {
  const { isOpenCart, toggleCart } = useCartStore();

  return (
    <Suspense fallback={<Loading />}>
      <MainLayout
        header={<HeaderContainer />}
        footer={<Footer />}
      >
        {isOpenCart && <Cart handleToggleCart={toggleCart} />}
        <Outlet />
      </MainLayout>
    </Suspense>
  );
};

export default Main;
