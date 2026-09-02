import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-6 border-t border-gray-900 mt-20">
      <div className="container-custom">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Exclusive & Subscribe */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold tracking-wider">
              Exclusive
            </Link>
            <h3 className="text-xl font-medium mt-1">Subscribe</h3>
            <p className="text-gray-300 text-sm font-light">
              Get 10% off your first order
            </p>
            <div className="relative mt-2 max-w-[217px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/80 rounded px-4 py-3 text-sm placeholder:text-gray-400 text-white outline-none focus:border-white transition-colors pr-10"
              />
              <button 
                type="button" 
                aria-label="Send email"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-[190px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-gray-300 text-sm">exclusive@gmail.com</p>
            <p className="text-gray-300 text-sm">+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="space-y-3 text-gray-300 text-sm font-normal">
              <li>
                <Link to="/account" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition-colors">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="space-y-3 text-gray-300 text-sm font-normal">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-gray-400 text-xs font-light">
              Save $3 with App New User Only
            </p>
            
            <div className="flex items-center gap-2 mt-1">
              <div className="w-20 h-20 bg-white p-1 rounded-sm shrink-0 flex items-center justify-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExclusiveEcommerceApp"
                  alt="App Download QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 border border-white/60 bg-black hover:border-white px-2 py-1 rounded transition-colors"
                >
                  <svg className="w-4 h-4 text-white shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a1.95 1.95 0 0 1-.22-.916V2.73c0-.332.08-.646.219-.916zM15.207 13.414l2.457-2.457a1.5 1.5 0 0 0 0-1.914l-2.457-2.457-1.414 1.414 5.2 5.2-3.786 3.786 1.414 1.414zm-1.414-1.414L3.793 2.001l9.999 9.999zm0 0l-9.999 9.999 9.999-9.999z" />
                  </svg>
                  <div className="leading-tight text-left">
                    <span className="block text-[8px] uppercase tracking-wider text-gray-400">GET IT ON</span>
                    <span className="block text-[11px] font-semibold text-white">Google Play</span>
                  </div>
                </a>

                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 border border-white/60 bg-black hover:border-white px-2 py-1 rounded transition-colors"
                >
                  <svg className="w-4 h-4 text-white shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.95 2.77.99.08 2.06-.52 2.68-1.27z" />
                  </svg>
                  <div className="leading-tight text-left">
                    <span className="block text-[8px] tracking-wider text-gray-400">Download on the</span>
                    <span className="block text-[11px] font-semibold text-white">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media SVGs */}
            <div className="flex items-center gap-6 mt-4 text-white">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
          <span>&copy; Copyright Rimel 2022. All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
