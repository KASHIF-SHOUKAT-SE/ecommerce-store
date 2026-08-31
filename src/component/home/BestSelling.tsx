import { useAppSelector } from '../../hooks/useRedux';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../common/ProductCard';

const BestSelling = () => {
  const { products } = useAppSelector((state) => state.product);

  const bestSellingProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="container-custom py-12 border-t">
      <SectionTitle
        title="Best Selling Products"
        subtitle="This Month"
        showViewAll={true}
        onViewAll={() => console.log('View All')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;

// import { useAppSelector } from '../../hooks/useRedux';
// import SectionTitle from '../common/SectionTitle';
// import ProductCard from '../common/ProductCard';

// const BestSelling = () => {
//   const { products } = useAppSelector((state) => state.product);

//   // Sabse zyada rating wale products
//   const bestSellingProducts = [...products]
//     .sort((a, b) => b.rating - a.rating)
//     .slice(0, 4);

//   return (
//     <section className="container-custom py-12 border-t">
//       <SectionTitle
//         title="Best Selling Products"
//         subtitle="This Month"
//         showViewAll={true}
//         onViewAll={() => console.log('View All')}
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {bestSellingProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BestSelling;