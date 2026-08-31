import { useState } from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types';
import { useAppDispatch } from '../../hooks/useRedux';
import { addToCart } from '../../redux/slices/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const discountPercent = Math.round(product.discountPercentage);
  const originalPrice = discountPercent > 0 
    ? Math.round(product.price / (1 - product.discountPercentage / 100)) 
    : product.price;

  return (
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
      {discountPercent > 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
          -{discountPercent}%
        </span>
      )}

      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
          <Eye size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="relative h-[220px] flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add To Cart
        </button>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-medium text-gray-900 mb-1 truncate">{product.title}</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-500 font-semibold">${product.price}</span>
          {discountPercent > 0 && (
            <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm">({product.stock})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


// import { useState } from 'react';
// import { Heart, Eye, ShoppingCart } from 'lucide-react';
// import { Product } from '../../types';
// import { useAppDispatch } from '../../hooks/useRedux';
// import { addToCart } from '../../redux/slices/cartSlice';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   const dispatch = useAppDispatch();
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   // DummyJSON API se discount percentage aata hai
//   const discountPercent = Math.round(product.discountPercentage);
//   const originalPrice = Math.round(product.price / (1 - product.discountPercentage / 100));

//   return (
//     <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
//       {/* Discount Badge */}
//       {discountPercent > 0 && (
//         <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
//           -{discountPercent}%
//         </span>
//       )}

//       {/* Action Buttons */}
//       <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
//         <button
//           onClick={() => setIsWishlisted(!isWishlisted)}
//           className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
//         >
//           <Heart
//             size={16}
//             className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
//           />
//         </button>
//         <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
//           <Eye size={16} className="text-gray-600" />
//         </button>
//       </div>

//       {/* Product Image */}
//       <div className="relative h-[220px] flex items-center justify-center p-4">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="max-h-full max-w-full object-contain"
//         />
//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
//         >
//           <ShoppingCart size={16} />
//           Add To Cart
//         </button>
//       </div>

//       {/* Product Info */}
//       <div className="p-4 bg-white">
//         <h3 className="font-medium text-gray-900 mb-1 truncate">{product.title}</h3>
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-red-500 font-semibold">${product.price}</span>
//           {discountPercent > 0 && (
//             <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
//           )}
//         </div>
//         <div className="flex items-center gap-1">
//           <div className="flex text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`}
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//           <span className="text-gray-400 text-sm">({product.stock})</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;