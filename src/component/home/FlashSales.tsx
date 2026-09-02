import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppSelector } from '../../hooks/useRedux';
import SectionTitle from '../common/SectionTitle';
import CountdownTimer from '../common/CountdownTimer';
import ProductCard from '../common/ProductCard';

const FlashSales = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { products } = useAppSelector((state) => state.product);

  const flashSaleProducts = products
    .filter((p) => p.discountPercentage > 10)
    .slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="container-custom py-12">
      <div className="flex items-end justify-between mb-8">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
          <div>
            <SectionTitle title="Flash Sales" subtitle="Today's" showViewAll={false} />
          </div>
          <CountdownTimer targetHours={23} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="min-w-[270px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;

