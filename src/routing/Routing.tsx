import { Routes, Route } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Account from "../pages/Account";
import NotFound from "../pages/NotFound";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routing = () => {
  return (
    <Routes>
      {/* Main Layout — Header/Footer ke saath */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account" element={<Account />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
