import { Link } from 'react-router-dom';

const NewArrival = () => {
  const arrivals = [
    {
      id: 1,
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=600&fit=crop',
      size: 'large',
    },
    {
      id: 2,
      title: "Women's Collections",
      description: 'Featured woman collections that give you another vibe.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
      size: 'small',
    },
    {
      id: 4,
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop',
      size: 'small',
    },
  ];

  return (
    <section className="container-custom py-12 border-t">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm">Featured</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">New Arrival</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
        <div className="md:col-span-2 md:row-span-2 relative bg-black rounded-lg overflow-hidden group">
          <img
            src={arrivals[0].image}
            alt={arrivals[0].title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xl font-bold mb-2">{arrivals[0].title}</h3>
            <p className="text-gray-300 text-sm mb-3">{arrivals[0].description}</p>
            <Link to="/" className="text-white underline underline-offset-4 hover:text-red-400">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 relative bg-black rounded-lg overflow-hidden group">
          <img
            src={arrivals[1].image}
            alt={arrivals[1].title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xl font-bold mb-2">{arrivals[1].title}</h3>
            <p className="text-gray-300 text-sm mb-3">{arrivals[1].description}</p>
            <Link to="/" className="text-white underline underline-offset-4 hover:text-red-400">
              Shop Now
            </Link>
          </div>
        </div>

        {arrivals.slice(2).map((item) => (
          <div key={item.id} className="relative bg-black rounded-lg overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-xs mb-2">{item.description}</p>
              <Link to="/" className="text-white text-sm underline underline-offset-4 hover:text-red-400">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;


