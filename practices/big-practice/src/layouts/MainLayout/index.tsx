import Footer from "@components/Footer"
import Header from "@components/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-neutral-900 text-white selection:bg-pink-500 selection:text-white">
      <Header />
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
