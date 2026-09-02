import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../common/ProductCard';
import { useAppSelector } from '../../hooks/useRedux';

const BestSelling = () => {
  const { products } = useAppSelector((state) => state.product);
  const bestSellingProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="container-custom py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <SectionTitle subtitle="This Month" title="Best Selling Products" />
        
        {/* ✅ Click karne par seedha Wishlist page open hoga */}
        <Link
          to="/wishlist"
          className="mt-4 md:mt-0 bg-[#DB4444] text-white px-10 py-3 rounded font-medium hover:bg-[#c93939] transition-colors self-start md:self-auto text-sm inline-block"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
