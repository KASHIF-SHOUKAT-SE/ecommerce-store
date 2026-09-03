import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react'; // ✅ Star icon yahan add kiya
import type { Product } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import { addToCart } from '../../redux/slices/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const discountPercent = Math.round(product.discountPercentage || 0);
  const originalPrice =
    discountPercent > 0
      ? Math.round(product.price / (1 - product.discountPercentage / 100))
      : product.price;

  return (
    <div className="group relative bg-[#F5F5F5] rounded-sm overflow-hidden flex flex-col justify-between">
      {/* Discount Badge */}
      {discountPercent > 0 && (
        <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-medium px-2.5 py-1 rounded z-10">
          -{discountPercent}%
        </span>
      )}

      {/* Top Action Icons (Heart & Eye) */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label="Wishlist"
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'fill-[#DB4444] text-[#DB4444]' : 'text-gray-700'}
          />
        </button>
        <Link
          to={`/product/${product.id}`}
          aria-label="View Details"
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 text-gray-700"
        >
          <Eye size={16} />
        </Link>
      </div>

      {/* Clickable Image Area */}
      <Link
        to={`/product/${product.id}`}
        className="relative h-[230px] flex items-center justify-center p-4 cursor-pointer"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          onError={(e) => {
            // Fallback if DummyJSON image url returns 404
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80';
          }}
          className="max-h-[160px] max-w-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add To Cart
        </button>
      </Link>

      {/* Bottom Info Area */}
      <div className="p-4 bg-white">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-base text-black mb-1 truncate hover:text-[#DB4444] transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[#DB4444] font-medium">${product.price}</span>
          {discountPercent > 0 && (
            <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex text-[#FFAD33]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.round(product.rating || 4) ? 'fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs font-medium">({product.stock || 0})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
