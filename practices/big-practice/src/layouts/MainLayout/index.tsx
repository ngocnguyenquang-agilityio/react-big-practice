import Footer from "@components/Footer"
import Header from "@components/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
