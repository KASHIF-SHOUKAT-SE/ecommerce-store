import { useAppSelector } from '../../hooks/useRedux';

const OrderSummary = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col gap-6">
      {/* Cart Items List */}
      <div className="flex flex-col gap-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src={item.thumbnail || item.images?.[0]} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium line-clamp-1 max-w-[200px]">
                {item.title}
              </span>
            </div>
            <span className="text-sm">${item.price * item.quantity}</span>
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-sm text-gray-500 py-4 text-center">
            No items in cart
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex justify-between border-b border-gray-300 pb-4 text-sm">
          <span>Subtotal:</span>
          <span>${totalAmount}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-4 text-sm">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
