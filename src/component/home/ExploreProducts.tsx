import { useState } from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../common/ProductCard';

const ExploreProducts = () => {
  const { products } = useAppSelector((state) => state.product);
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleProducts = products.slice(0, visibleCount);

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className="container-custom py-12 border-t">
      <SectionTitle
        title="Explore Our Products"
        subtitle="Our Products"
        showViewAll={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewAll}
            className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ExploreProducts;

