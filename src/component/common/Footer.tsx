import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6 border-t border-gray-900 mt-20">
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
            {/* Input Box with Arrow */}
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
            
            {/* QR Code and App Store Badges */}
            <div className="flex items-center gap-2 mt-1">
              {/* QR Code */}
              <div className="w-20 h-20 bg-white p-1 rounded-sm shrink-0 flex items-center justify-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExclusiveEcommerceApp"
                  alt="App Download QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* App Buttons */}
              <div className="flex flex-col gap-2">
                {/* Google Play */}
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

                {/* App Store */}
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

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 mt-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
// import { Link } from 'react-router-dom';
// import { Send } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white pt-16 pb-8">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//           {/* Exclusive */}
//           <div className="lg:col-span-1">
//             <Link to="/" className="text-xl font-bold mb-4 block hover:text-red-400 transition-colors">
//               Exclusive
//             </Link>
//             <p className="text-gray-400 mb-4">Subscribe</p>
//             <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-transparent border border-gray-600 rounded-l px-4 py-2 text-sm flex-1 outline-none focus:border-white"
//               />
//               <button className="bg-transparent border border-l-0 border-gray-600 rounded-r px-3 hover:border-white transition-colors">
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 className="font-medium mb-4">Support</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
//               <li>exclusive@gmail.com</li>
//               <li>+88015-88888-9999</li>
//             </ul>
//           </div>

//           {/* Account */}
//           <div>
//             <h4 className="font-medium mb-4">Account</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li><Link to="/account" className="hover:text-white transition-colors">My Account</Link></li>
//               <li><Link to="/signup" className="hover:text-white transition-colors">Login / Register</Link></li>
//               <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
//               <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
//               <li><Link to="/" className="hover:text-white transition-colors">Shop</Link></li>
//             </ul>
//           </div>

//           {/* Quick Link */}
//           <div>
//             <h4 className="font-medium mb-4">Quick Link</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="hover:text-white transition-colors">Terms Of Use</Link></li>
//               <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
//               <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Download App */}
//           <div>
//             <h4 className="font-medium mb-4">Download App</h4>
//             <p className="text-gray-400 text-sm mb-4">Save $3 with App New User Only</p>
//             <div className="flex gap-2">
//               <div className="w-24 h-8 bg-gray-700 rounded flex items-center justify-center text-xs cursor-pointer hover:bg-gray-600 transition-colors">
//                 Google Play
//               </div>
//               <div className="w-24 h-8 bg-gray-700 rounded flex items-center justify-center text-xs cursor-pointer hover:bg-gray-600 transition-colors">
//                 App Store
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
//           <p>© Copyright Rimel 2022. All right reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;