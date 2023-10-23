import Collection from "@components/Collection"
import { Outlet } from "react-router-dom"

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

const HomeLayout = () => {
  return (
    <>
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Collection list={mockListCollection} title="Collection" />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <Outlet />
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <Collection list={mockListCollection} title="Sort by" />
      </div>
    </>
  )
}

export default HomeLayout
