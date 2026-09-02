import { Link } from 'react-router-dom';
import { Trash2, Eye, ShoppingCart, Star } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const { products } = useAppSelector((state) => state.product);

  const justForYouProducts = products.slice(0, 4);

  const handleRemove = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="container-custom py-12 md:py-16">
      {/* 1. Wishlist Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl md:text-2xl font-normal text-black">
          Wishlist ({wishlistItems.length})
        </h1>
        {wishlistItems.length > 0 && (
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="border border-black/50 hover:bg-black hover:text-white px-6 md:px-10 py-3 rounded text-sm md:text-base font-medium transition-colors"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {/* Wishlist Items Grid */}
      {wishlistItems.length === 0 ? (
        <div className="bg-[#F5F5F5] rounded p-8 text-center mb-20">
          <p className="text-gray-500 text-base mb-4">Your wishlist is currently empty.</p>
          <Link
            to="/"
            className="inline-block bg-[#DB4444] text-white px-8 py-2.5 rounded text-sm font-medium hover:bg-[#c93939] transition-colors"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {wishlistItems.map((product) => {
            const discountPercent = Math.round(product.discountPercentage);
            const originalPrice =
              discountPercent > 0
                ? Math.round(product.price / (1 - product.discountPercentage / 100))
                : product.price;

            return (
              <div key={product.id} className="group relative bg-white">
                <div className="relative bg-[#F5F5F5] rounded-sm overflow-hidden h-[240px] flex items-center justify-center p-4">
                  {discountPercent > 0 && (
                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-normal px-3 py-1 rounded">
                      -{discountPercent}%
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(product.id)}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 hover:text-red-500 text-black transition-colors z-10"
                  >
                    <Trash2 size={16} />
                  </button>

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-[160px] max-w-[80%] object-contain mix-blend-multiply"
                  />

                  {/* Add To Cart - No Trigger */}
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Add To Cart
                  </button>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium text-base text-black mb-1 truncate">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-medium">${product.price}</span>
                    {discountPercent > 0 && (
                      <span className="text-gray-400 line-through text-sm">
                        ${originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Just For You Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-4 h-9 bg-[#DB4444] rounded-sm" />
          <h2 className="text-xl md:text-2xl font-normal text-black">Just For You</h2>
        </div>
        <Link
          to="/"
          className="border border-black/50 hover:bg-black hover:text-white px-6 md:px-10 py-3 rounded text-sm md:text-base font-medium transition-colors"
        >
          See All
        </Link>
      </div>

      {/* Just For You Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {justForYouProducts.map((product, index) => {
          const discountPercent = Math.round(product.discountPercentage);
          const originalPrice =
            discountPercent > 0
              ? Math.round(product.price / (1 - product.discountPercentage / 100))
              : product.price;

          return (
            <div key={product.id} className="group relative bg-white">
              <div className="relative bg-[#F5F5F5] rounded-sm overflow-hidden h-[240px] flex items-center justify-center p-4">
                {index === 2 ? (
                  <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs font-normal px-3 py-1 rounded">
                    NEW
                  </span>
                ) : (
                  discountPercent > 0 && (
                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-normal px-3 py-1 rounded">
                      -{discountPercent}%
                    </span>
                  )
                )}

                <button
                  type="button"
                  aria-label="View product"
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 text-black transition-colors z-10"
                >
                  <Eye size={16} />
                </button>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-h-[160px] max-w-[80%] object-contain mix-blend-multiply"
                />

                {/* Add To Cart - No Trigger */}
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add To Cart
                </button>
              </div>

              <div className="pt-4">
                <h3 className="font-medium text-base text-black mb-1 truncate">
                  {product.title}
                </h3>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#DB4444] font-medium">${product.price}</span>
                  {discountPercent > 0 && index !== 2 && (
                    <span className="text-gray-400 line-through text-sm">
                      ${originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFAD33]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={
                          i < Math.round(product.rating)
                            ? 'fill-current'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">
                    ({product.stock})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;