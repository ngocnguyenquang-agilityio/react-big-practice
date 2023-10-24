// Libs
import useSWR from 'swr';

// Components
import Collection from '@components/Collection';
import ProductList from '@components/ProductList';
import HomeLayout from '@layouts/HomeLayout';
import { fetcher } from '@services/fetcher';
import Loading from '@components/Loading';

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt'];

const HomePage = () => {
  const { data, isLoading } = useSWR('https://dummyjson.com/products?limit=20&select=title,price,images,category,thumbnail,id', fetcher);

  if(isLoading) return <Loading />

  return (
    <HomeLayout
      leftAside={
        <Collection
          list={mockListCollection}
          title='Collection'
        />
      }
      rightAside={
        <Collection
          list={['Price: Low to High', 'Price: High to Low']}
          title='Sort by'
        />
      }
    >
      <ProductList products={data.products} />
    </HomeLayout>
  );
};

export default HomePage;
