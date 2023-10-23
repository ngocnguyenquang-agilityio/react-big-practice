// Libs
import { Outlet } from "react-router-dom";

// Components
import MainLayout from "@layouts/MainLayout";

const Main = () => {
  return (
    <MainLayout >
      <Outlet />
    </MainLayout>
  )
};

export default Main;
