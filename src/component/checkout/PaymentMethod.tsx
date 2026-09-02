import { useFormContext } from 'react-hook-form';
import Button from '../common/Button';

// Importing payment icons
import bkashIcon from '../../assets/Icons/checkoutIcon/Bkash.svg';
import visaIcon from '../../assets/Icons/checkoutIcon/Visa.svg';
import mastercardIcon from '../../assets/Icons/checkoutIcon/Mastercard.svg';
import nagadIcon from '../../assets/Icons/checkoutIcon/Nagad.svg';

const PaymentMethod = () => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-6 mt-6">
      {/* Payment Options */}
      <div className="flex flex-col gap-4">
        {/* Bank Option */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value="bank"
              {...register('paymentMethod')}
              className="appearance-none w-4 h-4 rounded-full border border-black checked:border-4 checked:border-black cursor-pointer transition-all"
            />
            <span className="text-sm">Bank</span>
          </label>
          {/* Payment Icons */}
          <div className="flex items-center gap-2">
            <img src={bkashIcon} alt="Bkash" className="h-6 object-contain" />
            <img src={visaIcon} alt="Visa" className="h-6 object-contain" />
            <img src={mastercardIcon} alt="Mastercard" className="h-6 object-contain" />
            <img src={nagadIcon} alt="Nagad" className="h-6 object-contain" />
          </div>
        </div>

        {/* Cash on Delivery Option */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="cod"
            {...register('paymentMethod')}
            className="appearance-none w-4 h-4 rounded-full border border-black checked:border-4 checked:border-black cursor-pointer transition-all"
          />
          <span className="text-sm">Cash on delivery</span>
        </label>
      </div>

      {/* Coupon Section */}
      <div className="flex gap-4 mt-2">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border border-black rounded px-4 py-3 flex-1 text-sm outline-none"
        />
        <Button variant="primary" type="button" className="px-8 py-3 rounded text-sm font-medium whitespace-nowrap">
          Apply Coupon
        </Button>
      </div>

      {/* Place Order Button */}
      <div className="mt-4">
        <Button 
          variant="primary" 
          type="submit"
          className="px-10 py-4 rounded text-sm font-medium"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
