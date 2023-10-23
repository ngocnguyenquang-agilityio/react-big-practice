// Components
import Footer from "@components/Footer";
import Header from "@components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-900 text-white selection:bg-pink-500 selection:text-white">
      <Header />
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row">
        {children}
      </div>
      <Footer />
    </div>
  )
};

export default MainLayout;
