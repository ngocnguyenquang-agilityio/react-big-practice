// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/Loading';

const Main = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Suspense>
  );
};

export default Main;
