import { Link } from 'react-router-dom';
import { Store, DollarSign, ShoppingBag, Gift, Truck, Headphones, ShieldCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Store,
    value: '10.5k',
    label: 'Sallers active our site',
    highlight: false,
  },
  {
    id: 2,
    icon: DollarSign,
    value: '33k',
    label: 'Monthly Product Sale',
    highlight: true,
  },
  {
    id: 3,
    icon: ShoppingBag,
    value: '45.5k',
    label: 'Customer active in our site',
    highlight: false,
  },
  {
    id: 4,
    icon: Gift,
    value: '25k',
    label: 'Anual gross sale in our site',
    highlight: false,
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Emma Watson',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Will Smith',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop&crop=face',
  },
];

const About = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-10">
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black font-medium">About</span>
        </div>
      </div>

      {/* ──────────────── 1. Our Story Section ──────────────── */}
      <section className="container-custom pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wider text-black mb-8">
              Our Story
            </h1>
            <p className="text-black text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makrketplace with an active presence in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions, Exclusive
              has 10,500 sallers and 300 brands and serves 3 millions customers
              across the region.
            </p>
            <p className="text-black text-sm sm:text-base leading-relaxed font-normal">
              Exclusive has more than 1 Million products to offer, growing at a very
              fast. Exclusive offers a diverse assotment in categories ranging from
              consumer.
            </p>
          </div>

          {/* Right Image (Exact Pink Shopping Girls Layout) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] h-[360px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-sm bg-[#E97A9B]">
              <img
                src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=900&h=800&fit=crop"
                alt="Two girls shopping with bags"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. Stats Cards Grid ──────────────── */}
      <section className="container-custom pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`border rounded-sm py-8 px-6 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer ${
                  stat.highlight
                    ? 'bg-[#DB4444] text-white border-[#DB4444] shadow-md'
                    : 'bg-white text-black border-black/30 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]'
                }`}
              >
                {/* Double Circle Icon Frame */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors ${
                    stat.highlight
                      ? 'bg-white/30 text-white'
                      : 'bg-gray-300 text-black group-hover:bg-white/30 group-hover:text-white'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${
                      stat.highlight
                        ? 'bg-white text-black'
                        : 'bg-black text-white group-hover:bg-white group-hover:text-black'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold tracking-tight mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-normal">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──────────────── 3. Team Members Section ──────────────── */}
      <section className="container-custom pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* Member Image Box */}
              <div className="bg-[#F5F5F5] rounded-sm overflow-hidden h-[400px] flex items-end justify-center pt-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="max-h-[360px] object-contain mix-blend-multiply"
                />
              </div>

              {/* Member Info */}
              <div className="pt-6">
                <h3 className="text-3xl font-medium text-black mb-1 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-black text-sm mb-3">{member.role}</p>

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-black">
                  {/* Twitter / X */}
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#DB4444] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#DB4444] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#DB4444] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Dots Slider Pagination */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
          <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
          <span className="w-3 h-3 rounded-full bg-[#DB4444] ring-2 ring-offset-2 ring-[#DB4444]" />
          <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
          <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
        </div>
      </section>

      {/* ──────────────── 4. Service Badges ──────────────── */}
      <section className="container-custom pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center">
                <Truck size={28} />
              </div>
            </div>
            <h3 className="font-bold text-lg uppercase tracking-wide mb-2 text-black">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-black text-xs font-normal">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center">
                <Headphones size={28} />
              </div>
            </div>
            <h3 className="font-bold text-lg uppercase tracking-wide mb-2 text-black">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-black text-xs font-normal">
              Friendly 24/7 customer support
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
            </div>
            <h3 className="font-bold text-lg uppercase tracking-wide mb-2 text-black">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-black text-xs font-normal">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;