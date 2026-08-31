import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categoriesList = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: 'Electronics', hasSubmenu: false },
  { name: 'Home & Lifestyle', hasSubmenu: false },
  { name: 'Medicine', hasSubmenu: false },
  { name: 'Sports & Outdoor', hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: 'Groceries & Pets', hasSubmenu: false },
  { name: 'Health & Beauty', hasSubmenu: false },
];

const slides = [
  {
    id: 1,
    brandIcon: '🍎',
    brandName: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    link: '/shop',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619986',
  },
  {
    id: 2,
    brandIcon: '📱',
    brandName: 'Samsung Galaxy Series',
    title: 'Up to 20% off Voucher',
    link: '/shop',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/pk/2307/gallery/pk-galaxy-z-flip5-f731-sm-f731blgcpkd-537572802?$1300_1038_PNG$',
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container-custom">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-10">
        {/* Left Side: Categories Sidebar Menu */}
        <div className="w-full lg:w-[240px] pt-6 lg:border-r border-gray-200 pr-4 shrink-0">
          <ul className="space-y-4">
            {categoriesList.map((category, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className="flex items-center justify-between text-black hover:text-red-500 font-normal text-base transition-colors group"
                >
                  <span>{category.name}</span>
                  {category.hasSubmenu && (
                    <ChevronRight size={18} className="text-black group-hover:text-red-500 transition-colors" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Black Hero Banner */}
        <div className="flex-1 pt-6 lg:pl-4">
          <div className="relative bg-black rounded-sm overflow-hidden min-h-[350px] md:h-[384px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between transition-opacity duration-700 p-8 md:p-14 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Text Content */}
                <div className="flex flex-col justify-center text-white max-w-[320px] md:max-w-[350px] z-10 text-center md:text-left mb-6 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
                    <span className="text-3xl">{slide.brandIcon}</span>
                    <span className="text-sm font-normal text-gray-200">{slide.brandName}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide mb-6">
                    {slide.title}
                  </h1>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center justify-center md:justify-start gap-2 text-white border-b border-white pb-1 w-fit mx-auto md:mx-0 hover:text-red-400 hover:border-red-400 transition-colors text-base font-medium"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Banner Image */}
                <div className="flex-1 flex items-center justify-center h-full max-h-[260px] md:max-h-full">
                  <img
                    src={slide.image}
                    alt={slide.brandName}
                    className="max-h-[220px] md:max-h-[320px] object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-red-500 ring-2 ring-white ring-offset-1 ring-offset-black'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const slides = [
//   {
//     id: 1,
//     title: 'Up to 10% off Voucher',
//     subtitle: 'iPhone 14 Series',
//     image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=600&fit=crop',
//     cta: 'Shop Now',
//   },
//   {
//     id: 2,
//     title: 'Up to 20% off Voucher',
//     subtitle: 'Samsung Galaxy Series',
//     image: 'https://images.unsplash.com/photo-1610945265078-3858a0828671?w=600&h=600&fit=crop',
//     cta: 'Shop Now',
//   },
// ];

// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="container-custom py-6">
//       <div className="relative bg-black rounded-lg overflow-hidden h-[400px] md:h-[500px]">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-500 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="flex h-full">
//               <div className="flex-1 flex flex-col justify-center px-8 md:px-16 text-white z-10">
//                 <span className="text-sm md:text-base mb-2">{slide.subtitle}</span>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title}</h2>
//                 <Link
//                   to="/"
//                   className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:text-red-400 transition-colors w-fit"
//                 >
//                   {slide.cta}
//                   <ArrowRight size={20} />
//                 </Link>
//               </div>
//               <div className="flex-1 flex items-center justify-center p-8">
//                 <img
//                   src={slide.image}
//                   alt={slide.subtitle}
//                   className="max-h-[80%] max-w-full object-contain rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
//         >
//           <ChevronLeft size={24} className="text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
//         >
//           <ChevronRight size={24} className="text-white" />
//         </button>

//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? 'bg-red-500' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const slides = [
//   {
//     id: 1,
//     title: 'Up to 10% off Voucher',
//     subtitle: 'iPhone 14 Series',
//     image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619986',
//     cta: 'Shop Now',
//   },
//   {
//     id: 2,
//     title: 'Up to 20% off Voucher',
//     subtitle: 'Samsung Galaxy Series',
//     image: 'https://images.samsung.com/is/image/samsung/p6pim/pk/2307/gallery/pk-galaxy-z-flip5-f731-sm-f731blgcpkd-537572802?$1300_1038_PNG$',
//     cta: 'Shop Now',
//   },
// ];

// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="container-custom py-6">
//       <div className="relative bg-black rounded-lg overflow-hidden h-[400px] md:h-[500px]">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-500 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="flex h-full">
//               {/* Text Content */}
//               <div className="flex-1 flex flex-col justify-center px-8 md:px-16 text-white z-10">
//                 <span className="text-sm md:text-base mb-2">{slide.subtitle}</span>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title}</h2>
//                 <Link
//                   to="/"
//                   className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:text-red-400 transition-colors w-fit"
//                 >
//                   {slide.cta}
//                   <ArrowRight size={20} />
//                 </Link>
//               </div>
//               {/* Image */}
//               <div className="flex-1 flex items-center justify-center p-8">
//                 <img
//                   src={slide.image}
//                   alt={slide.subtitle}
//                   className="max-h-[80%] max-w-full object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
//         >
//           <ChevronLeft size={24} className="text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
//         >
//           <ChevronRight size={24} className="text-white" />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? 'bg-red-500' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;