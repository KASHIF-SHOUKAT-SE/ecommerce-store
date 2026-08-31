import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './component/layout/MainLayout';
import Home from './pages/Home';

import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
     
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import MainLayout from './components/layout/MainLayout';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';

// // ✅ Scroll to top on every route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         {/* Main Layout ke andar sab pages */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} 
          
//           {/* 404 Page - koi bhi unknown route */}
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/layout/MainLayout';
// import Home from './pages/Home';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="signup" element={<SignUp />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;