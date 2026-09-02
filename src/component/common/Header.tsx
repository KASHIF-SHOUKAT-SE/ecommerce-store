import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useAppSelector } from '../../hooks/useRedux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sign Up', path: '/signup' },
  ];

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `font-medium transition-colors pb-1 border-b-2 ${
      isActive 
        ? 'text-red-500 border-red-500' 
        : 'text-gray-700 border-transparent hover:text-red-500 hover:border-red-300'
    }`;
  };

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <Link to="/" className="underline font-semibold ml-1 hover:text-red-400">
            ShopNow
          </Link>
        </span>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold tracking-wider hover:text-red-500 transition-colors">
            Exclusive
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={getLinkClass}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded px-3 py-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-48 placeholder-gray-400"
              />
              <Search size={18} className="text-gray-500" />
            </div>

            <div className="flex items-center gap-3">
              <button className="hover:text-red-500 transition-colors">
                <Heart size={22} />
              </button>
              <button className="hover:text-red-500 transition-colors relative">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="hover:text-red-500 transition-colors">
                <User size={22} />
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                    }`
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

