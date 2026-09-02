import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import Button from '../component/common/Button';
import iconCancel from '../assets/Icons/cartIcon/icon-cancel.svg';

const Cart = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium mb-6">Your Cart is Empty</h2>
        <Button to="/" variant="primary">
          Explore Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container-custom py-10 lg:py-16">
      {/* Breadcrumb */}
      <div className="text-sm mb-12">
        <span className="text-gray-500">Home</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-black font-medium">Cart</span>
      </div>

      {/* Cart Table Header */}
      <div className="hidden md:grid grid-cols-4 px-10 py-5 rounded shadow-sm border border-gray-100 mb-10 text-base font-medium">
        <div>Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-10 md:gap-6 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-4 items-center px-6 md:px-10 py-5 rounded shadow-sm border border-gray-100 gap-6 md:gap-0 relative"
          >
            {/* Product Column */}
            <div className="flex items-center gap-4 relative">
              <button
                onClick={() => handleRemove(item.id)}
                className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 group"
                style={{ opacity: 1 }} // Visible by default like in screenshot
              >
                <img src={iconCancel} alt="Remove" className="w-2.5 h-2.5 invert" />
              </button>
              <div className="w-14 h-14 object-contain relative group">
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium line-clamp-2 pr-4">{item.title}</span>
            </div>

            {/* Price Column */}
            <div className="text-sm md:text-center">
              <span className="md:hidden font-medium mr-2">Price:</span>
              ${item.price}
            </div>

            {/* Quantity Column */}
            <div className="flex items-center md:justify-center">
              <div className="flex items-center border border-gray-300 rounded px-3 py-1.5 gap-3 w-20">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                  className="w-8 text-center text-sm outline-none bg-transparent"
                />
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="hover:text-red-500 leading-none"
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 0.5L9.33013 5L0.669873 5L5 0.5Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="hover:text-red-500 leading-none"
                    disabled={item.quantity <= 1}
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5.5L0.669873 1L9.33013 1L5 5.5Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Subtotal Column */}
            <div className="text-sm md:text-right">
              <span className="md:hidden font-medium mr-2">Subtotal:</span>
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-20">
        <Button to="/" variant="outline" className="w-full sm:w-auto px-10 py-3 rounded text-sm font-medium">
          Return To Shop
        </Button>
        <Button variant="outline" className="w-full sm:w-auto px-10 py-3 rounded text-sm font-medium">
          Update Cart
        </Button>
      </div>

      {/* Bottom Layout (Coupon & Total) */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Coupon Section */}
        <div className="flex w-full lg:w-1/2 max-w-md gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-black rounded px-4 py-3 flex-1 text-sm outline-none"
          />
          <Button variant="primary" className="px-8 py-3 rounded whitespace-nowrap text-sm font-medium">
            Apply Coupon
          </Button>
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-[470px] border-2 border-black rounded p-6 lg:p-8">
          <h3 className="text-xl font-medium mb-6">Cart Total</h3>
          
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-sm">
            <span>Subtotal:</span>
            <span>${totalAmount}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          
          <div className="flex justify-between mb-6 text-sm">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => navigate('/checkout')}
              variant="primary"
              className="px-10 py-3 rounded text-sm font-medium w-full sm:w-auto"
            >
              Procees to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
