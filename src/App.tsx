import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
mainimport Routing from './routing/Routing';

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
      <Routing />
    </Router>
  );
}

export default App;