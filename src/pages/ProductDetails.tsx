import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, Heart, Minus, Plus } from 'lucide-react';
import { useAppSelector } from '../hooks/useRedux';
import ProductCard from '../component/common/ProductCard';
import SectionTitle from '../component/common/SectionTitle';
import type { Product } from '../types';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useAppSelector((state) => state.product);

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<'red' | 'blue'>('red');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(2);

  useEffect(() => {
    if (products && products.length > 0 && id) {
      const found = products.find((p) => p.id === Number(id)) ?? products[0];

      if (!found) {
        return;
      }

      setProduct(found);
      setSelectedImage(found.thumbnail);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  // Safe Thumbnail array creation without TS error
  const rawImages = (product as unknown as { images?: string[] }).images;
  const thumbnails = Array.isArray(rawImages) && rawImages.length > 0
    ? rawImages.slice(0, 4)
    : [product.thumbnail, product.thumbnail, product.thumbnail, product.thumbnail];

  // Related products
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-10">
        <div className="text-sm text-gray-400 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-black transition-colors">Account</Link>
          <span>/</span>
          <Link to="/" className="hover:text-black transition-colors">
            {product.category || 'Gaming'}
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{product.title}</span>
        </div>
      </div>

      {/* Main Product Layout */}
      <section className="container-custom pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ──────── Left Image Gallery (7 cols) ──────── */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Vertical Thumbnails */}
            <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible shrink-0">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 sm:w-28 sm:h-28 bg-[#F5F5F5] rounded-sm p-2 flex items-center justify-center border transition-all ${
                    selectedImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = product.thumbnail;
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Main Preview */}
            <div className="flex-1 bg-[#F5F5F5] rounded-sm p-8 min-h-[380px] sm:min-h-[500px] flex items-center justify-center">
              <img
                src={selectedImage || product.thumbnail}
                alt={product.title}
                className="max-h-[360px] sm:max-h-[420px] max-w-[90%] object-contain mix-blend-multiply drop-shadow-md"
              />
            </div>
          </div>

          {/* ──────── Right Info Section (5 cols) ──────── */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black tracking-wide mb-3">
              {product.title}
            </h1>

            {/* Ratings & Stock */}
            <div className="flex items-center gap-3 text-sm mb-4">
              <div className="flex text-[#FFAD33]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating || 4) ? 'fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-500 font-normal">({product.stock || 150} Reviews)</span>
              <span className="text-gray-300">|</span>
              <span className="text-[#00FF66] font-normal">In Stock</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-medium text-black mb-4">
              ${product.price}.00
            </div>

            {/* Description */}
            <p className="text-sm text-black font-normal leading-relaxed pb-6 border-b border-gray-300">
              {product.description ||
                'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'}
            </p>

            {/* Colors */}
            <div className="flex items-center gap-4 py-5">
              <span className="text-sm font-normal text-black">Colours:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedColor('red')}
                  className={`w-5 h-5 rounded-full bg-[#E07575] ring-2 ring-offset-2 ${
                    selectedColor === 'red' ? 'ring-black' : 'ring-transparent'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setSelectedColor('blue')}
                  className={`w-5 h-5 rounded-full bg-[#A0BCE0] ring-2 ring-offset-2 ${
                    selectedColor === 'blue' ? 'ring-black' : 'ring-transparent'
                  }`}
                />
              </div>
            </div>

            {/* Sizes */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-normal text-black">Size:</span>
              <div className="flex items-center gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`w-8 h-8 rounded border text-sm font-medium transition-colors ${
                      selectedSize === s
                        ? 'bg-[#DB4444] text-white border-[#DB4444]'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity, Buy Button & Heart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center hover:bg-gray-100 text-black transition-colors"
                >
                  <Minus size={16} />
                </button>
                <div className="w-16 h-11 flex items-center justify-center font-medium text-black border-x border-gray-300">
                  {quantity}
                </div>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-11 bg-[#DB4444] text-white flex items-center justify-center hover:bg-[#c93939] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                className="flex-1 h-11 bg-[#DB4444] text-white font-medium rounded text-sm hover:bg-[#c93939] transition-colors flex items-center justify-center"
              >
                Buy Now
              </button>

              <button
                type="button"
                className="w-11 h-11 border border-gray-300 rounded flex items-center justify-center text-black hover:border-red-500 hover:text-red-500 transition-colors shrink-0"
              >
                <Heart size={20} />
              </button>
            </div>

            {/* Delivery Box */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <div className="p-4 flex items-center gap-4 border-b border-gray-300">
                <Truck size={32} className="text-black shrink-0" />
                <div>
                  <h4 className="font-medium text-base text-black">Free Delivery</h4>
                  <p className="text-xs text-black font-normal underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-4">
                <RotateCcw size={32} className="text-black shrink-0" />
                <div>
                  <h4 className="font-medium text-base text-black">Return Delivery</h4>
                  <p className="text-xs text-black font-normal">
                    Free 30 Days Delivery Returns.{' '}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────── Related Items Section ──────── */}
      <section className="container-custom pb-28">
        <div className="mb-10">
          <SectionTitle subtitle="Related Item" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;