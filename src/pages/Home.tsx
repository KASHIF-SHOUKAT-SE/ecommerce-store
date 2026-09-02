import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { fetchProducts } from '../redux/slices/productSlice';
import HeroBanner from '../component/home/HeroBanner';
import FlashSales from '../component/home/FlashSales';
import BrowseByCategory from '../component/home/BrowseByCategory';
import BestSelling from '../component/home/BestSelling';
import MusicExperience from '../component/home/MusicExperience';
import ExploreProducts from '../component/home/ExploreProducts';
import NewArrival from '../component/home/NewArrival';
import Features from '../component/home/Features';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <HeroBanner />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <MusicExperience />
      <ExploreProducts />
      <NewArrival />
      <Features />
    </div>
  );
};

export default Home;

