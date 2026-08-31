import { useState } from 'react';
import { categories } from '../../data/categories';
import SectionTitle from '../common/SectionTitle';

const BrowseByCategory = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className="container-custom py-12 border-t">
      <SectionTitle title="Browse By Category" subtitle="Categories" showViewAll={false} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
              activeCategory === category.id
                ? 'bg-red-500 text-white border-red-500'
                : 'bg-white text-gray-700 border-gray-200 hover:border-red-500 hover:text-red-500'
            }`}
          >
            <span className="text-4xl mb-3">{category.icon}</span>
            <span className="font-medium text-sm">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
// import { useState } from 'react';
// import { categories } from '../../data/categories';
// import SectionTitle from '../common/SectionTitle';

// const BrowseByCategory = () => {
//   const [activeCategory, setActiveCategory] = useState<number | null>(null);

//   return (
//     <section className="container-custom py-12 border-t">
//       <SectionTitle title="Browse By Category" subtitle="Categories" showViewAll={false} />

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.id)}
//             className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
//               activeCategory === category.id
//                 ? 'bg-red-500 text-white border-red-500'
//                 : 'bg-white text-gray-700 border-gray-200 hover:border-red-500 hover:text-red-500'
//             }`}
//           >
//             <span className="text-4xl mb-3">{category.icon}</span>
//             <span className="font-medium text-sm">{category.name}</span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BrowseByCategory;