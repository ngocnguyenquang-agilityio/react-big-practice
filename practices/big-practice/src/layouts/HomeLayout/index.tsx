// Components
import Collection from "@components/Collection";

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Collection list={mockListCollection} title="Collection" />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        {children}
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <Collection
          list={[
            'Price: Low to Hight',
            'Price: High to Low',
          ]}
          title="Sort by"
        />
      </div>
    </>
  )
};

export default HomeLayout;